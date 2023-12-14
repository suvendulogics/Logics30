using Logics.API.DTO.Account;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace CP.Infrastructure.Application.Helpers
{
    public interface IJWTManagerRepository
    {
        TokenModel GenerateToken(string userName);
        TokenModel GenerateRefreshToken(string userName);
        ClaimsPrincipal GetPrincipalFromExpiredToken(string token);
    }
}
