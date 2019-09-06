using dotnetcore_webapi_and_ravendb.Contracts;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Controllers.Sales
{
    public class SalesController : Controller
    {
        protected IRavenDatabaseProvider RavenDatabaseProvider { get; set; }

        public SalesController(IRavenDatabaseProvider ravenDatabaseProvider)
        {
            RavenDatabaseProvider = ravenDatabaseProvider;
        }

        [HttpPost]
        public async Task<IActionResult> New()
        {
            return Ok();
        }
    }
}
