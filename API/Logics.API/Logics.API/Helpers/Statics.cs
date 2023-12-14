using Microsoft.IO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logics.API.Domain.Helpers
{
    public class Statics
    {
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
}
