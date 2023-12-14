using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logics.API.DTO.Client
{
    public class ClientResponse
    {
        public int ClientID { get; set; }
        public bool CPEnabled { get; set; }
        public bool NewCPEnabled { get; set; }
    }
}
