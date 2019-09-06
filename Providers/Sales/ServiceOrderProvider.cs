using dotnetcore_webapi_and_ravendb.Contracts;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Providers.Sales
{
    public class ServiceOrderProvider : IServiceOrderProvider
    {
        protected IRavenDatabaseProvider RavenDatabaseProvider;

        public ServiceOrderProvider(IRavenDatabaseProvider ravenDatabaseProvider)
        {
            RavenDatabaseProvider = ravenDatabaseProvider;
        }
    }
}
