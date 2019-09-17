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
        private readonly ICustomerProvider _customerProvider;

        public LookupsController(ILookupsProvider lookupsProvider, ICustomerProvider customerProvider)
        {
            _LookupsProvider = lookupsProvider;
            _customerProvider = customerProvider;
        }
        
        public ILookupsProvider _LookupsProvider { get; set; }

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
        public async Task<IActionResult> GetCustomers()
        {
            try
            {
                var listReturn = await _customerProvider.GetAllCustomers();

                return Ok(listReturn);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}