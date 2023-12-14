using Logics.API.Exceptions;
using Logics.API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Logics.API.Controllers
{
    [Route("{subdomain?}/api/[controller]")]
    [ApiController]
    public class ClientController : BaseApiController
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IClientService _clientService;
        private readonly string _subdomain;
        public ClientController(IClientService clienttService, IHttpContextAccessor httpContextAccessor)
        {
            _clientService = clienttService;
            _httpContextAccessor = httpContextAccessor;
            _subdomain = _httpContextAccessor.HttpContext.Request.RouteValues["subdomain"]?.ToString();
        }
        [HttpGet("validatesubdomain")]
        public async Task<IActionResult> AuthenticateAsync()
        {
            try
            {
                return Ok(await _clientService.ValidateSubdomain(_subdomain));
            }
            catch(Exception exp)
            {
                throw new ApiException(exp.Message);
            }
        }
        //[Authorize]
        //[HttpGet("getclientdetails")]
        //public async Task<IActionResult> GetClientDetails()
        //{
        //    try
        //    {
        //        return Ok(await _clientService.getclientdetails(_subdomain));
        //    }
        //    catch (Exception) { throw new ApiException("Error Getting Client Information"); }
        //}

        //[Authorize]
        //[HttpGet("getclientlogo")]
        //public async Task<IActionResult> GetClientLogo()
        //{
        //    try
        //    {
        //        return Ok(await _clientService.GetClientLogo(_subdomain));
        //    }
        //    catch (Exception) { throw new ApiException("Error Getting Client Logo"); }
        //}

        //[HttpGet("getconfiguration")]
        //public async Task<IActionResult> GetClientConfig()
        //{
        //    try
        //    {
        //        return Ok(await _clientService.GetClientConfig(_subdomain));
        //    }
        //    catch (Exception)
        //    {
        //        throw new ApiException("Error getting client configuration");
        //    }
        //}
    }
}
