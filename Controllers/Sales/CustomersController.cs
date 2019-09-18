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
        public async Task<IActionResult> New([FromBody] InputCustomerRegistrationDto customerDto)
        {
            try
            {

                if(!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                Customer newCustomer = new Customer(customerDto.Name, customerDto.ShortName, customerDto.Cpf, customerDto.Email);
                
                await _customerProvider.NewCustomer(newCustomer);

                return Ok();
            }
            catch (System.Exception)
            {
                
                return BadRequest();
            }
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetList()
        {
            try
            {
                                
                var customersList = await _customerProvider.GetAllCustomers();

                return Ok(customersList);
            }
            catch (System.Exception)
            {

                return BadRequest();
            }
        }
    }
}