using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Text;
using Sentry;
using Sentry.Protocol;

namespace Logics.API.Exceptions
{
    public class ApiException : Exception
    {
        public static string sentryUrl = "";
        Exception exp = new Exception();
        public ApiException() : base() { }

        public ApiException(string message) : base(message) { }

        public ApiException(string message, params object[] args)
            : base(String.Format(CultureInfo.CurrentCulture, message, args))
        {
        }


        public ApiException(Exception exp, object customData, bool failOverOnEmail = true, string url = "")
        {
            try
            {
                try
                {
                    if (exp == null)
                    {
                        exp = new Exception("Logging Info");
                    }


                    //string cUsrEmail = "";
                    //if (HttpContext.Current != null && HttpContext.Current.User != null && HttpContext.Current.User.Identity.IsAuthenticated)
                    //{
                    //    cUsrEmail = HttpContext.Current.User.Identity.Name;
                    //}

                    //if (url == "")
                    //{
                    //    url = (HttpContext.Current == null) ? "" : HttpContext.Current.Request.Url.AbsoluteUri ?? "";
                    //}
                    string clientTag1 = "";
                    if (url != "")
                    {
                        string host = new Uri(url).DnsSafeHost;

                        var domainNameParts = host.Split('.');
                        if (domainNameParts.Length > 0)
                        {
                            clientTag1 = domainNameParts[0];
                        }
                    }

                    if (exp != null && !exp.Data.Contains("customData"))
                    {
                        if (customData.GetType().IsSerializable)
                        {
                            exp.Data.Add("customData", Newtonsoft.Json.JsonConvert.SerializeObject(customData) ?? "");
                        }

                    }
                    if (exp != null && !exp.Data.Contains("url"))
                    {
                        exp.Data.Add("url", url ?? "");
                    }
                    SentryOptions sentryOptions1 = new SentryOptions();
                    sentryOptions1.Dsn = sentryUrl;
                    using (SentrySdk.Init(sentryOptions1))
                    {

                        SentrySdk.WithScope(scope =>
                        {
                            try
                            {
                                scope.SetTag("client", clientTag1);
                                scope.Level = Sentry.SentryLevel.Error;
                                SentrySdk.CaptureException(exp);
                            }
                            catch (Exception ex1)
                            {
                                WriteLogicsEventLog("sentry exception:" + Newtonsoft.Json.JsonConvert.SerializeObject(ex1) + ", inner exception:" + Newtonsoft.Json.JsonConvert.SerializeObject(exp), EventLogEntryType.Warning);

                            }
                        });
                    }

                }
                catch (Exception rawExp)
                {
                    try
                    {
                        WriteLogicsEventLog("original exception:" + exp.ToString() + "--logging exception:" + rawExp.ToString(), EventLogEntryType.Warning);
                    }
                    catch
                    {
                        // do nothing to avoid loop infinite loop in error reporting caused by error in error reporting
                    }
                    try
                    {
                        if (failOverOnEmail) { 
                        
                        }
                    }
                    catch
                    {
                        // do nothing to avoid loop infinite loop in error reporting caused by error in error reporting
                    }
                }
            }
            catch (Exception ex2)
            {
                string ex3 = ex2.Message;

                // do nothing if can't report exception due to another exception 
            }
        }

        public static void WriteLogicsEventLog(string msg, EventLogEntryType logType)
        {
            try
            {
                if (msg.Length > 30000)
                {
                    msg = msg.Substring(30000);
                }
                using (EventLog eventLog = new EventLog("Application"))
                {
                    eventLog.Source = "Application";
                    eventLog.WriteEntry(msg, logType, 101, 1);
                }
            }
            catch
            {
                // do nothing
            }
        }

    }
}
