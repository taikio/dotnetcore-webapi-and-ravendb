using System;
using System.Threading.Tasks;
using dotnetcore_webapi_and_ravendb.Contracts.Lookups;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcore_webapi_and_ravendb.Controllers.Lookups
{
    public class LookupsController : Controller
    {
        
        public LookupsController(ILookupsProvider lookupsProvider)
        {
            _LookupsProvider = lookupsProvider;
        }
        
        public ILookupsProvider _LookupsProvider { get; set; }

        [HttpGet]
        [Authorize]
        public IActionResult GetList()
        {
            try
            {
                var listReturn = _LookupsProvider.GetPaymentMethods();

                return Ok(listReturn);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}