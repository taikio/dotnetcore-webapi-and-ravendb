using dotnetcore_webapi_and_ravendb.Contracts;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Controllers.Sales
{
    public class ServiceOrdersController : Controller
    {
        private readonly IServiceOrderProvider _serviceOrderProvider;

        public ServiceOrdersController(IServiceOrderProvider serviceOrderProvider)
        {
            _serviceOrderProvider = serviceOrderProvider;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> New([FromBody] InputServiceOrderDto serviceOrderDto)
        {

            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                await _serviceOrderProvider.NewServiceOrder(serviceOrderDto);

                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetList()
        {

            try
            {
                var listReturn = await _serviceOrderProvider.GetAllServiceOrders();

                return Ok(listReturn);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetByDate(DateTime startDate, DateTime endDate)
        {

            try
            {
                var listReturn = await _serviceOrderProvider.GetServiceOrdersByDate(startDate, endDate);

                return Ok(listReturn);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
