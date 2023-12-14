//using Amazon;
//using Amazon.S3;
//using Amazon.S3.Model;
//using Logics.API.Interfaces;
//using Logics.API.Domain.Entities.Client;
//using Logics.API.Domain.Settings;
//using Microsoft.Extensions.FileProviders;
//using Microsoft.Extensions.Options;
//using System;
//using System.IO;
//using System.Linq;
//using System.Net.Mime;
//using System.Security.Cryptography;
//using System.Threading.Tasks;
//using static Logics.API.Domain.Helpers.Enums.Enum;
//using static Logics.API.Domain.Helpers.Statics;

//namespace CP.Infrastructure.Application.AmazonS3
//{
//    public class AmazonS3Services:IAmazonS3Service
//    {
//        public static string accessKey = "";
//        private static string secretKey = "";
//        public static string bucketName = "";
//        public readonly AmazonS3Settings _amazonSettings;
//        public AmazonS3Services(IOptions<AmazonS3Settings> amazonSettings)
//        {
//            _amazonSettings = amazonSettings.Value;
//            accessKey = _amazonSettings.AWSAccessKey;
//            secretKey = _amazonSettings.AWSSecretKey;
//            bucketName = _amazonSettings.AWSBucketName;
//        }
//        public bool uploadFileToS3(byte[] fileBuffer, string storeKey, UploadType uploadType, string contentType, bool allowOverwrite = false)
//        {
//            bool uploadResult = false;
//            if (fileBuffer == null)
//            {
//                //can't upload a null buffer
//                return false;
//            }
//            if (uploadType != UploadType.CaseDocument)
//            {
//                throw (new Exception("Not Implemented uploadType, It's recommended to create a new bucket, security policies and access keys for new upload types"));
//            }
//            var s3 = new Amazon.S3.AmazonS3Client(accessKey, secretKey, RegionEndpoint.USEast1);
//            //cannot find Amazon.S3.IO
//            //var s3FileInfo = new Amazon.S3.IO.S3FileInfo(s3, bucketName, storeKey);
//            //try
//            //{
//            //    if (s3FileInfo.Exists && !allowOverwrite)
//            //    {
//            //        // file already exists- prevent overwriting unless it's explicitly specified" });
//            //        return false;
//            //    }
//            //}
//            //catch (AmazonS3Exception ex)
//            //{
//            //    if (ex.StatusCode == System.Net.HttpStatusCode.Forbidden)
//            //    {
//            //        // file is not there , continue to upload
//            //    }
//            //}
//            using (MemoryStream ms = new MemoryStream(fileBuffer))
//            {
//                PutObjectRequest request = new PutObjectRequest()
//                {
//                    BucketName = bucketName,
//                    Key = storeKey.ToString(),
//                    InputStream = ms,
//                    //server side encryption
//                    ServerSideEncryptionMethod = ServerSideEncryptionMethod.AES256,
//                    //MD5 check to ensure successful upload
//                    MD5Digest = GetBufferMD5(fileBuffer),
//                    ContentType=contentType,
                    
//                    //Timeout = new TimeSpan(0, 0, 60),
//                };
//                try
//                {
//                    var response = s3.PutObjectAsync(request);
//                    response.Wait();
//                    uploadResult = true;
//                }
//                catch (Exception)
//                {
//                    uploadResult = false;
//                }

//            }

//            return uploadResult;
//        }

//        public async Task<byte[]> DownloadFileFromS3(string keyName)
//        {
//            //string keyName = ReverseString(casdedocumentId.ToString()) + "-" + clientId.ToString() + "-" + UploadType.CaseDocument;
//            byte[] _buf = null;

//            try
//            {
//                using (var s3 = new Amazon.S3.AmazonS3Client(accessKey, secretKey, RegionEndpoint.USEast1))
//                {
//                    GetObjectRequest request = new GetObjectRequest
//                    {
//                        BucketName = bucketName,
//                        Key = keyName
//                    };
//                    GetObjectResponse response = await s3.GetObjectAsync(request);
//                    if (response != null)
//                    {
//                        _buf = ToByteArray(response.ResponseStream);
//                    }

//                }
//            }
//            catch (Exception ex)
//            {
//                return null;
//            }
//            return _buf;
//        }

//        public string getFileAmazonURL(string keyname, int clientId, string fileName, string contentType)
//        {
//            try
//            {
//                AWSConfigsS3.UseSignatureVersion4 = true;
//                IAmazonS3 S3Client;
//                S3Client = new AmazonS3Client(accessKey, secretKey, Amazon.RegionEndpoint.USEast1);
//                string url = null;
//                var isFileExist = CheckFileExists(keyname, S3Client);
//                if (isFileExist.Result)
//                {
//                    GetPreSignedUrlRequest request = new GetPreSignedUrlRequest
//                    {
//                        BucketName = bucketName,
//                        Key = keyname,
//                        ResponseHeaderOverrides =
//                        {
//                            ContentDisposition = @"inline;filename="""+fileName+@"""",
//                        },
//                        Expires = DateTime.Now.AddHours(8)
//                    };
//                    url = S3Client.GetPreSignedURL(request);
//                }
//                return url;
//            }
//            catch
//            {
//                return null;
//            }
//            //return GetSignedAmazonUrl(keyName, bucketName, fileName);
//        }
//        public async Task<bool> CheckFileExists(string key, IAmazonS3 S3Client)
//        {
//            try
//            {
//                var request = new GetObjectMetadataRequest()
//                {
//                    BucketName = bucketName,
//                    Key = key,
//                    VersionId = null
//                };

//                var response = await S3Client.GetObjectMetadataAsync(request);
//                return true;
//            }
//            catch { return false; }  
//        }

//        public string ReverseString(string s)
//        {
//            return new string(s.ToCharArray().Reverse().ToArray());
//        }

//        public byte[] ToByteArray(Stream stream)
//        {
//            using (stream)
//            {
//                using (MemoryStream memStream = GlobalVariables.rms_Manager.GetStream())
//                {
//                    stream.CopyTo(memStream);
//                    return memStream.ToArray();
//                }
//            }
//        }

//        private static string GetBufferMD5(byte[] buffer)
//        {
//            using (var md5 = MD5.Create())
//            {
//                return Convert.ToBase64String(md5.ComputeHash(buffer));
//            }
//        }
//    }
//}
