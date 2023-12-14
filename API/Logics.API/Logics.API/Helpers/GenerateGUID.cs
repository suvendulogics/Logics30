using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CP.Domain.Helpers
{
    public class GenerateGUID
    {
        public GenerateGUID()
        {

        }
        public string Generateguid(int length=250)
        {
            StringBuilder sb = null;
            try
            {
                sb = new StringBuilder();
                if ((length / 32) > 0)
                {
                    for (int i = 0; i < length / 32; i++)
                        sb.Append(Guid.NewGuid().ToString("N"));
                }
                else
                {
                    sb.Append(Guid.NewGuid().ToString("N").Substring(0, length));
                }
                return sb.ToString();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                sb = null;
            }
        }
    }
}
