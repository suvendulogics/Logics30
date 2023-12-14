using MailBee.Mime;
using MailBee.SmtpMail;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Net.Mail;
using System.IO;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Net.Security;
using System.Text.RegularExpressions;
using Newtonsoft.Json.Linq;
using System.Linq;
using Logics.API.Domain.Settings;
using Microsoft.Extensions.Options;
//using Logics.API.Application.Exceptions;
using Microsoft.IO;
using Logics.API.Interfaces;
using Logics.API.DTO.Email;
using static Logics.API.Domain.Helpers.Enums.Enum;
using Sentry;
using Logics.API.Exceptions;

namespace CP.Infrastructure.Application.Email
{
    public class SMTP : IEmailService
    {
        public readonly EmailSettings _emailSettings;

        private static string privatekey = @"-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQDavVOPblacdGKONBCr+DjdYU1lPYp5T4wf+vRrGbI3xBG17QAm
62d1LPFhRAPupQSnI1FlBBKpGyEIP2MrNh0XBrbDrc2cGWaQxWghSqefgnaDHfiu
gFO8dwiZl5t3aqHe3T6pmd52KqUBDsZqYi/sJQqk7tIJcN1xA3Hls+N8vwIDAQAB
AoGAeTTtx42xipJnRjsNfe1WvT08oLvgLmZo1BPAOlSLz6Di23dPXUGWG3Ti8C27
LBLeqCrG4H3IRVJWFHbjYb9jkCeK7P4OgxrL+N6Nmp2ij+CKN7xKUIdvAXPerM7w
abo7oanPrMA7QNmrv2MszSnqCL3SIQ6ALxyW7x8y91tK1HECQQDwsAc6bLkmwt5J
Ie/GHvsMNfNHS5FkOsdbtmrITVnPcusq9yMjzD4hrmjWJz/HKL7GVL3O9+a63IFP
VwMsXk35AkEA6KfXCpBiadSkzH5Mc68y/lylFPxbjF62XFKqG2UmAvg4jVaHjfYu
x5b2Lv2rLp7a674J6nx4+fW3NyynDv6udwJAfFKwqSEX0km+ABCjhbbi/j+v1hfW
les2psznA2fRCDLX/m2BnTAWt9cbF+NWMk19nXyQPqQWblcQBCdx4C0mIQJAbgkT
t7daFFuyJdWGKyCtqYf/u9EvK1CQR1IBijtoovbrKE3IhufscBGCFe97yuzu9ZhH
8FM2lGIWaU4BJSJnOQJAWmQDQnsTnk2lbJ/QyIadNx9wohRw9FPDQ3KDWmUYbBwn
HPcLgpsdFcJsCAUVViSt7BNyauu64J4wpKLdiCYnYw==
-----END RSA PRIVATE KEY-----";

        protected static string svrName0 = "";
        protected static string usrName0 = "";
        protected static string pass0 = "";

        protected static string MailQueuePickupFolder_Local = "";
        protected static string MailQueuePickupFolder_Cloud = "";

        protected static string DNS = "";
        protected static string DNS2 = "";
        protected static string SendMail = "";

        public SMTP(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
            svrName0 = _emailSettings.MainSMTPServerName;
            usrName0 = _emailSettings.MainSMTPUserName;
            pass0 = _emailSettings.MainSMTPPassword;

            MailQueuePickupFolder_Local = _emailSettings.MailQueuePickupFolder_Local ?? "";
            MailQueuePickupFolder_Cloud = _emailSettings.MailQueuePickupFolder_Cloud ?? "";

            DNS = _emailSettings.DNS;
            DNS2 = _emailSettings.DNS2;
            SendMail = _emailSettings.SendMail;

        }
        private static bool sendMail
        {
            get
            {
                bool b = false;

                bool.TryParse(SendMail ?? "true", out b);

                return b;
            }
        }



        public SendEmailResult SendEmail(SendEmailRequest emailRequest, string ticketID = null, MessageType messageType = MessageType.Unknown)
        {
            //  return _SendEmail(subject, body, from, to, cc, bcc, attachments, false, false, throwExp, true, MessageType.Unknown,subdomain).Success;
            return _SendEmail(emailRequest, ticketID, messageType);
        }

        public static SendEmailResult _SendEmail(SendEmailRequest emailRequest, string ticketID = null, MessageType messageType = MessageType.Unknown)
        {
            emailRequest.Subject = (emailRequest.Subject ?? "").Replace('\r', ' ').Replace('\n', ' ');
            emailRequest.Body = emailRequest.Body ?? "";
            bool smtpSendResult = true;
            string smtpLog = "";
            string subdomain = emailRequest.ClientSubdomain;

            try
            {
                if (emailRequest.SendDirect)
                {
                    Smtp smtp = null;
                    smtp = new Smtp();
                    smtp.DirectSendDefaults.HelloDomain = "postman.irslogics.com";

                    if (emailRequest.LogEnabled)
                    {
                        //MailBee.DnsMX.DnsCache.Clear();
                        smtp.Log.Enabled = true;
                        smtp.Log.MemoryLog = true;
                        smtp.ThrowExceptions = true;
                    }


                    ServicePointManager.ServerCertificateValidationCallback = delegate (object s, X509Certificate certificate,
                     X509Chain chain, SslPolicyErrors sslPolicyErrors)
                    { return true; };

                    using (MailBee.Mime.MailMessage message = new MailBee.Mime.MailMessage())
                    {

                        message.From.AsString = emailRequest.From;
                        message.ReplyTo.AsString = emailRequest.From;
                        message.To.AsString = emailRequest.To;
                        if (!string.IsNullOrEmpty(emailRequest.CC?.Trim()))
                        {
                            message.Cc.AsString = emailRequest.CC.Replace(";", ",");
                        }
                        if (!string.IsNullOrEmpty(emailRequest.BCC?.Trim()))
                        {
                            message.Bcc.AsString = emailRequest.BCC.Replace(";", ",");
                        }

                        message.Subject = emailRequest.Subject;
                        message.BodyHtmlText = !emailRequest.Body.ToLower().Trim().Contains("</html>") ? string.Format("<html><body>{0}</body></html>", emailRequest.Body) : emailRequest.Body;

                        string senderHost = message.From.GetDomain().ToLower();

                        if (messageType == MessageType.Ticketing)
                        {
                            string displayName = Regex.Replace(emailRequest.From, @" ?\<.*?\>", string.Empty).Replace("'", "");
                            if (string.IsNullOrEmpty(ticketID))
                                message.From = new EmailAddress(subdomain + ".postman@postman.io", displayName);
                            else
                            {
                                subdomain = emailRequest.ClientSubdomain;
                                //string email = ticketID + "." + subdomain + ".postman@postman.io";
                                string email = "33.sandbox.postman@postman.io";
                                message.From = new EmailAddress(email, displayName);
                            }
                        }
                        else if (emailRequest.Type != MessageType.CaseFax)
                        {
                            message.From = new EmailAddress(subdomain + ".postman@postman.io", Regex.Replace(emailRequest.From, @" ?\<.*?\>", string.Empty).Replace("'", ""));
                            message.From.DisplayName = (emailRequest.Type == MessageType.Notification) ? "Notification Service" : emailRequest.From;
                            message.ReplyTo.Add(new EmailAddress(emailRequest.From));
                        }



                        MailBee.Security.DomainKeys domainKey1 = new MailBee.Security.DomainKeys();
                        smtp.Message = message;

                        if (emailRequest.Attachments != null)
                        {
                            emailRequest.Attachments = emailRequest.Attachments.AsEnumerable().OrderBy(x => x.Key.ToString() != "__FAXCOVERSHEET.PDF").ToList();
                            foreach (var item1 in emailRequest.Attachments)
                            {
                                message.Attachments.Add((byte[])item1.Value, item1.Key, "", item1.Key.ToLower().EndsWith(".pdf") ? "application/pdf" : "", null, NewAttachmentOptions.None, MailBee.Mime.MailTransferEncoding.None);
                            }
                        }

                        smtp.Message = domainKey1.Sign(smtp.Message, null, privatekey, false, "p");
                        smtp.DnsServers.Add(DNS ?? "1.1.1.1");
                        smtp.DnsServers.Add(DNS2 ?? "8.8.8.8");

                        if (sendMail)
                        {
                            if (MailQueuePickupFolder_Local == "")
                            {
                                smtp.DirectSendDefaults.EnableStartTls = true;
                                smtp.DirectSendDefaults.Timeout = 60000;
                                smtpSendResult = smtp.Send();
                            }
                            else
                            {
                                smtpSendResult = true;
                                smtp.SubmitToPickupFolder(MailQueuePickupFolder_Local, false);
                            }
                        }
                        if (emailRequest.LogEnabled)
                        {
                            smtpLog = smtp.Log.GetMemoryLog();
                        }
                    }
                    smtp.Dispose();
                    return new SendEmailResult() { Success = smtpSendResult, Log = smtpLog + "test ticketing feature" + emailRequest.From + " " + emailRequest.To };
                }
                else
                {
                    var smtpNativeClient = new SmtpClient();
                    {

                    };
                    if (MailQueuePickupFolder_Cloud == "")
                    {
                        smtpNativeClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                        smtpNativeClient.Host = svrName0;
                        smtpNativeClient.Port = 587;
                        smtpNativeClient.EnableSsl = true;
                        smtpNativeClient.Credentials = new System.Net.NetworkCredential(usrName0, pass0);
                        smtpNativeClient.Timeout = 200000;
                    }
                    else
                    {
                        smtpNativeClient.DeliveryMethod = SmtpDeliveryMethod.SpecifiedPickupDirectory;
                        smtpNativeClient.DeliveryFormat = SmtpDeliveryFormat.International;
                        smtpNativeClient.PickupDirectoryLocation = MailQueuePickupFolder_Cloud;
                    }
                    var message2 = new System.Net.Mail.MailMessage(emailRequest.From, emailRequest.To)
                    {

                        Subject = emailRequest.Subject,
                        Body = emailRequest.Body,
                        IsBodyHtml = true,

                    };

                    string senderHost = message2.From.Host.ToLower();
                    string displayName = Regex.Replace(emailRequest.From, @" ?\<.*?\>", string.Empty).Replace("'", "");
                    displayName = (messageType == MessageType.Notification) ? "Notification Service" : displayName;
                    if (messageType == MessageType.CaseFax)
                    {
                        message2.From = new MailAddress(emailRequest.From);
                        message2.Sender = new MailAddress(emailRequest.From);
                    }
                    else if (messageType == MessageType.Ticketing)
                    {

                        //message2.From = new MailAddress(subdomain + ".postman@postman.io", displayName);
                        if (string.IsNullOrEmpty(ticketID))
                            message2.From = new MailAddress(subdomain + ".postman@postman.io", displayName);
                        else
                        {
                            subdomain = emailRequest.ClientSubdomain;
                            string email = ticketID + "." + subdomain + ".postman@postman.io";
                            //string email = "33.sandbox.postman@postman.io";
                            message2.From = new MailAddress(email, displayName);
                        }
                    }
                    message2.ReplyToList.Add(new MailAddress(emailRequest.From));

                    JArray tagsArray = new JArray();
                    tagsArray.Add("subdomain:" + subdomain ?? "");
                    tagsArray.Add("type:" + messageType.ToString() ?? "");
                    tagsArray.Add("replyto:" + emailRequest.From ?? "");
                    JObject additionalHeaders = new JObject(
                        new JProperty("campaign_id", subdomain),
                        new JProperty("tags", tagsArray),
                        new JProperty("options",
                        new JObject(
                        new JProperty("open_tracking", true),
                        new JProperty("click_tracking", true)
                        )));
                    message2.Headers.Add("X-MSYS-API", additionalHeaders.ToString());
                    if (!String.IsNullOrEmpty(emailRequest.CC?.Trim()))
                    {
                        message2.CC.Add(emailRequest.CC.Replace(";", ","));
                    }
                    if (!String.IsNullOrEmpty(emailRequest.BCC?.Trim()))
                    {
                        message2.Bcc.Add(emailRequest.BCC.Replace(";", ","));
                    }


                    if (emailRequest.IsReply)
                    {
                        var msgId = emailRequest.MessageID;
                        message2.Headers.Add("In-Reply-To", msgId.Trim());
                        message2.Headers.Add("References", msgId.Trim());
                    }

                    message2.ReplyToList.Add(new MailAddress(emailRequest.From));


                    if (emailRequest.Attachments != null)
                    {
                        emailRequest.Attachments = emailRequest.Attachments.AsEnumerable().OrderBy(x => x.Key.ToString() != "__FAXCOVERSHEET.PDF").ToList();

                        foreach (var item1 in emailRequest.Attachments)
                        {
                            var rstream = GlobalVariables.rms_Manager.GetStream(Guid.NewGuid().ToString(), item1.Value, 0, item1.Value.Length);
                            System.Net.Mail.Attachment attachment = new System.Net.Mail.Attachment(rstream, item1.Key);
                            message2.Attachments.Add(attachment);
                        }
                    }
                    if (sendMail)
                    {
                        try
                        {
                            smtpNativeClient.SendCompleted += (s, e) =>
                            {
                                smtpNativeClient.Dispose();

                                if (e.Error != null)
                                {
                                    smtpSendResult = false;
                                    string errorMsg = "error:" + (e.Error.Data.ToString() ?? "") + " , from" + (message2.From.ToString() ?? "") + (message2.To.ToString() ?? "") + " stack strace:" + (e.Error.InnerException.ToString());
                                    var ex = new Exception("SMTP Error", new Exception(errorMsg));
                                    new ApiException(ex, ex.Message);
                                }
                                else
                                {
                                    smtpSendResult = true;
                                }
                                if (e.UserState != null)
                                {
                                    var userMessage = e.UserState;
                                    ((System.Net.Mail.MailMessage)userMessage).Dispose();
                                }
                            };
                            message2.BodyEncoding = System.Text.Encoding.UTF8;
                            smtpNativeClient.Send(message2);
                        }
                        catch (Exception ex)
                        {
                            new ApiException(new Exception("SMTP Exception"), ex.Message + " , from" + (message2.From.ToString() ?? "") + (message2.To.ToString() ?? ""));
                            smtpLog += ex.ToString();
                            smtpSendResult = false;
                        }
                    }

                    return new SendEmailResult() { Success = smtpSendResult, Log = emailRequest.LogEnabled ? smtpLog + "test ticketing feature" + message2.From + " " + message2.To : "" };
                }
            }
            catch (Exception exp)
            {
                string expDetails = $"UNABLE TO SEND EMAIL --> [to:{emailRequest.To ?? ""}] [from:{emailRequest.From ?? ""}] [sendDirect:{emailRequest.SendDirect.ToString()}] [exception:{exp.InnerException?.Message ?? ""}].";

                if (emailRequest.ReportException) new ApiException(new Exception("Unable To Send Email", exp), expDetails, false);
                if (emailRequest.ThrowExp) throw exp;
                return new SendEmailResult() { Success = false, Log = exp.Message.ToString() + smtpLog + "test ticketing feature" + emailRequest.From + " " + emailRequest.To };
            }
        }

        static void smtpClient_SendCompleted(object sender, System.ComponentModel.AsyncCompletedEventArgs e)
        {
            // do nothing , but handler should be present

        }
    }

    public static class GlobalVariables
    {
        private static RecyclableMemoryStreamManager _rms_Manager { get; set; }
        public static RecyclableMemoryStreamManager rms_Manager
        {
            get
            {
                if (_rms_Manager == null)
                    _rms_Manager = new RecyclableMemoryStreamManager();
                return _rms_Manager;
            }
        }
    }
}
