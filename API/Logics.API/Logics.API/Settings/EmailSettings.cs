using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logics.API.Domain.Settings
{
    public  class EmailSettings
    {
        #region Email settings
        public string DNS { get; set; }
        public string DNS2 { get; set; }
        public string MainSMTPServerName { get; set; }
        public string MainSMTPUserName { get; set; }
        public string MainSMTPPassword { get; set; }
        
        public string MailQueuePickupFolder_Local { get; set; }
        public string MailQueuePickupFolder_Cloud { get; set; }
        public string SendMail { get; set; }

        public string EmailFrom { get; set; }
        public string SmtpHost { get; set; }
        public string SmtpPort { get; set; }
        public string SMTPUserName { get; set; }
        public string SMTPPassword { get; set; }

        public string DisplayName { get; set; }
        public string SMTPServer { get; set; }
        #endregion
    }
}
