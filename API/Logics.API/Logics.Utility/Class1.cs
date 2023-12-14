using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Data.SqlClient;
using System.Configuration;
using System.Diagnostics;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using System.Security.Cryptography;
using System.Net;
using System.Threading;



namespace Logics
{
    public class AmazonS3
    {
        private static string accessKey = ConfigurationManager.AppSettings["AWSAccessKeyId"];
        private static string secretKey = ConfigurationManager.AppSettings["AWSSecretKey"];
        public static byte[] getCaseFileFromS3(int casdedocumentId, int clientId)
        {

            string bucketName = "logics-docs1";
            string keyName = ReverseString(casdedocumentId.ToString()) + "-" + clientId.ToString() + "-" + UploadType.CaseDocument;
            byte[] _buf = null;

            try
            {
                using (var s3 = new Amazon.S3.AmazonS3Client(accessKey, secretKey, RegionEndpoint.USEast1))
                {
                    GetObjectRequest request = new GetObjectRequest
                    {
                        BucketName = bucketName,
                        Key = keyName
                    };
                    using (GetObjectResponse response = s3.GetObject(request))
                    {
                        _buf = ToByteArray(response.ResponseStream);
                    }
                }
            }

            catch (Exception ex)
            {
                LGS.Utility.ReportExceptionWithCustomData(ex, accessKey + "-keyName:" + keyName);
            }

            return _buf;
        }

        public static string ReverseString(string s)
        {
            return new string(s.ToCharArray().Reverse().ToArray());
        }

        public enum UploadType
        {
            CaseDocument = 1,
            Form = 2,
            EsignDocument = 3
        }


        public static bool uploadFileToS3(byte[] fileBuffer, string storeKey, UploadType uploadType, bool allowOverwrite = false)
        {

            bool uploadResult = false;
            if (fileBuffer == null)
            {
                //can't upload a null buffer
                return false;
            }
            if (uploadType != UploadType.CaseDocument)
            {
                throw (new Exception("Not Implemented uploadType, It's recommended to create a new bucket, security policies and access keys for new upload types"));
            }
            string accessKey = ConfigurationManager.AppSettings["AWSAccessKeyId"];
            string secretKey = ConfigurationManager.AppSettings["AWSSecretKey"];
            var s3 = new Amazon.S3.AmazonS3Client(accessKey, secretKey, RegionEndpoint.USEast1);
            Amazon.S3.IO.S3FileInfo s3FileInfo = new Amazon.S3.IO.S3FileInfo(s3, "logics-docs1", storeKey);
            try
            {
                if (s3FileInfo.Exists && !allowOverwrite)
                {
                    // file already exists- prevent overwriting unless it's explicitly specified" });
                    return false;
                }
            }
            catch (AmazonS3Exception ex)
            {
                if (ex.StatusCode == System.Net.HttpStatusCode.Forbidden)
                {
                    // file is not there , continue to upload
                }
                else
                {
                    LGS.Utility.ReportException(ex);
                }
            }
            using (MemoryStream ms = new MemoryStream(fileBuffer))
            {
                PutObjectRequest request = new PutObjectRequest()
                {
                    BucketName = "logics-docs1",
                    Key = storeKey.ToString(),
                    InputStream = ms,
                    //server side encryption
                    ServerSideEncryptionMethod = ServerSideEncryptionMethod.AES256,
                    //MD5 check to ensure successful upload
                    MD5Digest = GetBufferMD5(fileBuffer),
                    Timeout = new TimeSpan(0, 0, 60),
                };
                try
                {
                    PutObjectResponse response2 = s3.PutObject(request);
                    uploadResult = true;
                }
                catch (Exception ex)
                {
                    LGS.Utility.ReportException(ex);
                    uploadResult = false;
                }

            }

            return uploadResult;
        }


        public static string getCaseDocumentAmazonURL(int casdedocumentId, int clientId, string fileName)
        {
            string bucketName = "logics-docs1";
            string keyName = ReverseString(casdedocumentId.ToString()) + "-" + clientId.ToString() + "-" + UploadType.CaseDocument;
            return GetSignedAmazonUrl(keyName, bucketName, fileName);
        }

        /// <summary>
        /// Get document url with document content type
        /// </summary>
        /// <param name="casdedocumentId">document id</param>
        /// <param name="clientId">client id</param>
        /// <param name="fileName">file name</param>
        /// <param name="contentType">mime type</param>
        /// <returns></returns>
        public static string getCaseDocumentAmazonURL(int casdedocumentId, int clientId, string fileName, string contentType)
        {
            string bucketName = "logics-docs1";
            string keyName = ReverseString(casdedocumentId.ToString()) + "-" + clientId.ToString() + "-" + UploadType.CaseDocument;
            return GetSignedAmazonUrl(keyName, bucketName, fileName, contentType);
        }

        public static string GetSignedAmazonUrl(string objectKey, string bucketName, string fileName)
        {
            AWSConfigsS3.UseSignatureVersion4 = true;
            string accessKey = ConfigurationManager.AppSettings["AWSAccessKeyId"];
            string secretKey = ConfigurationManager.AppSettings["AWSSecretKey"];
            IAmazonS3 S3Client;
            S3Client = new AmazonS3Client(accessKey, secretKey, Amazon.RegionEndpoint.USEast1);

            GetPreSignedUrlRequest request = new GetPreSignedUrlRequest
            {
                BucketName = bucketName,
                Key = objectKey,
                ResponseHeaderOverrides =
                {
                        ContentDisposition = @"attachment;filename="""+fileName+@"""",
                },
                Expires = DateTime.Now.AddHours(8)
            };
            string url = S3Client.GetPreSignedURL(request);
            return url;
        }

        /// <summary>
        /// get mazone URL with configurable content type
        /// </summary>
        /// <param name="objectKey"></param>
        /// <param name="bucketName"></param>
        /// <param name="fileName"></param>
        /// <param name="contentType"></param>
        /// <returns></returns>
        public static string GetSignedAmazonUrl(string objectKey, string bucketName, string fileName, string contentType)
        {
            AWSConfigsS3.UseSignatureVersion4 = true;
            string accessKey = ConfigurationManager.AppSettings["AWSAccessKeyId"];
            string secretKey = ConfigurationManager.AppSettings["AWSSecretKey"];
            IAmazonS3 S3Client;
            S3Client = new AmazonS3Client(accessKey, secretKey, Amazon.RegionEndpoint.USEast1);

            GetPreSignedUrlRequest request = new GetPreSignedUrlRequest
            {
                BucketName = bucketName,
                Key = objectKey,
                ResponseHeaderOverrides =
                {
                        ContentType=contentType,
                        ContentDisposition = @"filename="""+fileName+@"""",
                },
                Expires = DateTime.Now.AddHours(8)
            };
            string url = S3Client.GetPreSignedURL(request);
            return url;
        }

        public static byte[] ToByteArray(Stream stream)
        {
            using (stream)
            {
                using (MemoryStream memStream = LGS.GlobalVariables.rms_Manager.GetStream())
                {
                    stream.CopyTo(memStream);
                    return memStream.ToArray();
                }
            }
        }

        private static string GetBufferMD5(byte[] buffer)
        {
            using (var md5 = MD5.Create())
            {
                return Convert.ToBase64String(md5.ComputeHash(buffer));
            }
        }
    }
}
