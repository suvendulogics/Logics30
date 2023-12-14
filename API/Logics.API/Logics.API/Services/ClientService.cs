using Logics.API.DTO.Client;
using Logics.API.Exceptions;
using Logics.API.Interfaces;
//using Logics.API.Domain.Entities.Client;
using Logics.API.Domain.Settings;
using Logics.API.Infrastructure.Application.Context;
using Dapper;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Logics.API.DTO.APIResponse;
using Logics.API.DTO.Account;
using System.Security.Cryptography;
using Logics.API.Entities.Errors;
using Amazon.Runtime.Internal.Util;

namespace Logics.API.Infrastructure.Application.Services
{
    public class ClientService : IClientService
    {
        private readonly AppSettings _appSettings;
        private readonly IDapper _dapper;
        public ClientService(IOptions<AppSettings> appSettings, IDapper dapper)
        {
            _appSettings = appSettings.Value;
            _dapper = dapper;
        }

        public async Task<ClientResponse> ValidateSubdomain(string subDomain)
        {
            try
            {
                string cmd = @"SELECT TOP 1 [Clients].[ClientID] AS ClientID,[ClientServices].ClientServiceID, [ClientServices].[ClientPortalEnabled] AS CPEnabled, ISNULL([ClientServices].[IsNewClientPortalEnabled],0) AS NewCPEnabled FROM [dbo].[Clients] with (nolock) JOIN [dbo].[ClientServices] ON [ClientServices].[ClientID]=[Clients].[ClientID] WHERE [Clients].[Subdomain] = @Subdomain AND [Clients].[Active] = 1 ORDER BY [ClientServices].ClientServiceID DESC";
                var dbParam = new DynamicParameters();
                dbParam.Add("Subdomain", subDomain);
                var response = await Task.FromResult(_dapper.Get<ClientResponse>(_appSettings.ClientDBConnectionString, cmd, dbParam, commandType: CommandType.Text));
                return response;
            }
            catch (Exception exp)
            {
                throw new ApiException(exp, "Error validate subdomain");
            }
        }

        public async Task<ApiResponse> GetLogo(string subDomain)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                //string cmd = @"SELECT TOP 1 [Clients].[ClientID] AS ClientID,[ClientServices].ClientServiceID, [ClientServices].[ClientPortalEnabled] AS CPEnabled, ISNULL([ClientServices].[IsNewClientPortalEnabled],0) AS NewCPEnabled FROM [dbo].[Clients] with (nolock) JOIN [dbo].[ClientServices] ON [ClientServices].[ClientID]=[Clients].[ClientID] WHERE [Clients].[Subdomain] = @Subdomain AND [Clients].[Active] = 1 ORDER BY [ClientServices].ClientServiceID DESC";
                //var dbParam = new DynamicParameters();
                //dbParam.Add("Subdomain", subDomain);
                //var response = await Task.FromResult(_dapper.Get<ClientResponse>(_appSettings.ClientDBConnectionString, cmd, dbParam, commandType: CommandType.Text));
                response.Result = "<div class='" + subDomain + "' style=\"font-size:1.0em!important;color:rgb(83,83,83);letter-spacing:-2px;text-align:center;padding-left:2px;font-family:'Biome W01 Light';\">lo<span style=\"color:crimson;\">g</span>ics</div>";
                return response;
            }
            catch (Exception exp)
            {
                throw new ApiException(exp, "Error validate subdomain");
            }
        }

        public async Task<ApiResponse> Login(LoginReq obj)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                string cmd = @"select * from Users where Email =@EmailId";
                var dbParam = new DynamicParameters();
                dbParam.Add("EmailId", obj.Email);
                LoginResponse log =new  LoginResponse();
                log.Email = obj.Email;
                log.Token  = new Guid().ToString();
                response.Result = log;
                //var resp = _dapper.Get<List<LoginResponse>>(_appSettings.DBConnectionString, cmd, dbParam, commandType: CommandType.Text);
                var resp = await Task.FromResult(_dapper.GetAll<LoginResponse>(_appSettings.DBConnectionString, cmd, dbParam, commandType: CommandType.Text));
                if (resp.Count > 0)
                {
                    resp = resp.Where(x => x.Password == HashPassword(obj.Password)).ToList();
                    if(resp.Count > 0)
                    {
                        LoginResponse login = new LoginResponse();
                        login = resp.FirstOrDefault();
                        login.Password = "";
                        response.Result = login;
                    }
                    else
                    {
                        response.IsError = true;
                        response.ErrorMessage = LoginMessages.ErrorMessage;
                    }

                }
                else
                {
                    response.IsError = true;
                    response.ErrorMessage = LoginMessages.ErrorMessage;
                }

                return response;
            }
            catch (Exception exp)
            {
                var err =  new ApiException(exp, "Error during Login");
                response.IsError = true;
                response.ErrorMessage = LoginMessages.ErrorMessage;
                return response;
            }
        }
        public static string HashPassword(string password)
        {
            var sha1 = SHA1.Create();
            var step1 = Encoding.UTF8.GetBytes(password);
            var step2 = sha1.ComputeHash(step1);
            return BitConverter.ToString(step2);

            
        }

        public async Task<ApiResponse> ForgotPassword(string email)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                //Need to integrate mailing logics
                response.Result = "We have emailed a password reset link to your email address. Check your email for this link. When you click on it, we'll reset your password.";
                return response;
            }
            catch (Exception exp)
            {
                throw new ApiException(exp, "Error : Reset password link could not be sent.");
            }
        }

        public async Task<ApiResponse> ResetPassword(string token,string password,string confirmPassword)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                if (string.IsNullOrEmpty(token))
                {
                    response.ErrorMessage = "Token can't be empty";
                    response.IsError = true;
                }
                if(password == confirmPassword)
                {
                    response.Result = "Password is updated successfully.";
                }
                else
                {
                    response.ErrorMessage = "Password didn't match";
                    response.IsError = true;
                }
                
                return response;
            }
            catch (Exception exp)
            {
                throw new ApiException(exp, "Error : Reset password link could not be sent.");
            }
        }
    }
}
