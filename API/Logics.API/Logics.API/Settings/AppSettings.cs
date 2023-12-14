using System;
using System.Security.Cryptography;
using System.Text;

namespace Logics.API.Domain.Settings
{
    public class AppSettings
    {

        /// <summary>
        /// get Database connection string
        /// </summary>
        public string DBConnectionString { get; set; }
        /// <summary>
        /// get client Database connection string
        /// </summary>
        public string ClientDBConnectionString { get; set; }

        public string getlogicsconnectionstring(string connectionstring, string subdomain)
        {
            try
            {
                if (connectionstring != null)
                {
                    if (subdomain.ToLower().Trim() == "dev")
                    {
                        return connectionstring;
                    }
                    else
                    {
                        return connectionstring.Replace("IRSLogics", "IRSLogics_" + subdomain).Replace("logicsAppName", "clientportal_" + subdomain);
                    }
                }
                else
                {
                    throw new ArgumentNullException("IRSLogicsConnectionString", "IRSLogics ConnectionString not found in app setting");
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public String generatemd5hash(String inputtext, string salt = "UmLtXsd8xSd6mbjj")
        {
            HMACMD5 md5 = null;
            byte[] saltedhash = null;
            try
            {
                if ((inputtext ?? "").Trim().Length <= 0)
                {
                    return String.Empty;
                }
                md5 = salt.Trim().Length > 0 ? new HMACMD5(Encoding.Default.GetBytes(salt)) : new HMACMD5();
                saltedhash = md5.ComputeHash(Encoding.Default.GetBytes(inputtext));

                return System.BitConverter.ToString(saltedhash).Replace("-", "");
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                saltedhash = null;
                md5 = null;
            }
        }



    }

    public class UploadSettings{
        public string Url { get; set; }
        public string ZapierEmail { get;set;}
    }
}