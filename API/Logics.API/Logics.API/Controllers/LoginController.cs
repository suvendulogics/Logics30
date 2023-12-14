using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Logics.Entity;
using Logics.API.Interfaces;
using Logics.API.Exceptions;
using Logics.API.DTO.Account;
using Logics.API.Entities.Errors;

namespace Logics.API.Controllers
{
    [Route("{subdomain?}/api/[controller]")]
    [ApiController]
    public class LoginController : BaseApiController
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IClientService _clientService;
        private readonly string _subdomain;
        public LoginController(IClientService clienttService, IHttpContextAccessor httpContextAccessor)
        {
            _clientService = clienttService;
            _httpContextAccessor = httpContextAccessor;
            _subdomain = _httpContextAccessor.HttpContext.Request.RouteValues["subdomain"]?.ToString();
        }

        [HttpGet("GetLogo")]
        public async Task<IActionResult> GetLogo()
        {
            try
            {
                return Ok(await _clientService.GetLogo(_subdomain));
            }
            catch (Exception exp)
            {
                throw new ApiException(exp.Message);
            }
        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginReq obj)
        {
            try
            {
                return Ok(await _clientService.Login(obj));
            }
            catch (Exception exp)
            {
                throw new ApiException(exp.Message);
            }
            finally
            {

            }
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            try
            {
                return Ok(await _clientService.ForgotPassword(email));
            }
            catch (Exception exp)
            {
                throw new ApiException(exp.Message);
            }
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword(string token, string password, string confirmPassword)
        {
            try
            {
                return Ok(await _clientService.ResetPassword(token,password,confirmPassword));
            }
            catch (Exception exp)
            {
                throw new ApiException(exp.Message);
            }
        }
    }
}
