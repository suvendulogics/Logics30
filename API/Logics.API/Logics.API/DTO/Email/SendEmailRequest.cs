using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Logics.API.Domain.Helpers.Enums.Enum;

namespace Logics.API.DTO.Email
{
    public class SendEmailRequest
    {
        public string Subject { get; set; }
        public string Body { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string CC { get; set; }
        public string BCC { get; set; }
        public List<KeyValuePair<string, byte[]>> Attachments { get; set; }
        public bool SendDirect { get; set; }
        public bool LogEnabled { get; set; }
        public bool ThrowExp { get; set; }
        public bool ReportException { get; set; }
        public MessageType Type { get { return MessageType.Unknown; } }
        public string ClientSubdomain { get; set; }
        public bool IsReply { get; set; }
        public string MessageID { get; set; }
    }
}
