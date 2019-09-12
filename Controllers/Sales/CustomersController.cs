using System.Threading.Tasks;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using dotnetcore_webapi_and_ravendb.Models.Sales;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcore_webapi_and_ravendb.Controllers.Sales
{
    public class CustomersController : Controller
    {
        private readonly ICustomerProvider _customerProvider; 
        public CustomersController(ICustomerProvider customerProvider)
        {
            _customerProvider = customerProvider;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> New(InputCustomerRegistrationDto customerDto)
        {
            try
            {
                Customer newCustomer = new Customer(customerDto.Name, customerDto.ShortName, customerDto.Cpf, customerDto.Email);
                
                await _customerProvider.NewCustomer(newCustomer);

                return Ok();
            }
            catch (System.Exception)
            {
                
                return BadRequest();
            }
        }
    }
}