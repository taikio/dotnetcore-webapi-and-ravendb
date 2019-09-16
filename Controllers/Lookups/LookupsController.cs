using System;
using System.Threading.Tasks;
using dotnetcore_webapi_and_ravendb.Contracts.Lookups;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcore_webapi_and_ravendb.Controllers.Lookups
{
    public class LookupsController : Controller
    {
        
        public LookupsController(ILookupsProvider lookupsProvider, ICustomerProvider customerProvider)
        {
            _LookupsProvider = lookupsProvider;
            customerProvider = _customerProvider;
        }
        
        public ILookupsProvider _LookupsProvider { get; set; }
        public ICustomerProvider _customerProvider { get; set; }

        [HttpGet]
        [Authorize]
        public IActionResult GetPaymentMethods()
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

        [HttpGet]
        [Authorize]
        public IActionResult GetCustomers()
        {
            try
            {
                var listReturn = _customerProvider.GetAllCustomers();

                return Ok(listReturn);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}