using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logics.API.Domain.Settings
{
    public class AmazonS3Settings
    {
        public string AWSAccessKey { get; set; }
        public string AWSSecretKey { get; set; }
        public string AWSBucketName { get; set; }
    }
}
