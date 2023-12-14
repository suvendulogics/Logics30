using System;
using System.Collections.Generic;
using System.Text;

namespace Logics.API.DTO.Account
{
    public class RefreshToken
    {
        public int Id { get; set; }

        public string UserName { get; set; }
        public string Token { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime Expires { get; set; }
        //public bool IsExpired => DateTime.UtcNow >= Expires;        
        public string CreatedByIp { get; set; }
        //public DateTime? Revoked { get; set; }
        //public string RevokedByIp { get; set; }
        //public string ReplacedByToken { get; set; }
        //public bool IsActive => Revoked == null && !IsExpired;
    }
}
