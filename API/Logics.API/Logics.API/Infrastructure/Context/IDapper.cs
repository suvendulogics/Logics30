using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace Logics.API.Infrastructure.Application.Context
{
    public interface IDapper : IDisposable
    {
        T Get<T>(string connectionString, string sp, DynamicParameters parms, CommandType commandType = CommandType.StoredProcedure);
        List<T> GetAll<T>(string connectionString, string sp, DynamicParameters parms, CommandType commandType = CommandType.StoredProcedure);
        int Execute(string connectionString, string sp, DynamicParameters parms, CommandType commandType = CommandType.StoredProcedure);
        T Insert<T>(string connectionString, string sp, DynamicParameters parms, CommandType commandType = CommandType.StoredProcedure);
        T Update<T>(string connectionString, string sp, DynamicParameters parms, CommandType commandType = CommandType.StoredProcedure);
    }
}
