using Logics.API.DTO.Email;
using System.Collections.Generic;
using static Logics.API.Domain.Helpers.Enums.Enum;

namespace Logics.API.Interfaces
{
    public interface IEmailService
    {
        // bool SendEmailViaCloud(string subject, string body, string from, string to, bool throwExp, string cc = "", List<KeyValuePair<string, byte[]>> attachments = null, string bcc = "", string subdomain = "");

        SendEmailResult SendEmail(SendEmailRequest emailRequest, string ticketID=null, MessageType messageType = MessageType.Unknown);
       
    }
}