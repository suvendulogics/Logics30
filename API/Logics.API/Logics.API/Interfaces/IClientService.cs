using Logics.API.DTO.Client;
using Logics.API.Entities.Client;
using Logics.API.DTO.APIResponse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Logics.API.DTO.Account;

namespace Logics.API.Interfaces
{
    public interface IClientService
    {
        Task<ClientResponse> ValidateSubdomain(string subdomain);
        Task<ApiResponse> GetLogo(string subdomain);
        Task<ApiResponse> Login(LoginReq obj);
        Task<ApiResponse> ForgotPassword(string email);
        Task<ApiResponse> ResetPassword(string token, string password, string confirmPassword);
    }
}
