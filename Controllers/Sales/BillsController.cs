using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using dotnetcore_webapi_and_ravendb.Conventions;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Controllers.Sales
{
    public class BillsController : Controller
    {
        private readonly IBillProvider _billProvider;
        public BillsController(IBillProvider billProvider)
        {
            _billProvider = billProvider;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> NewPayable([FromBody] InputBillDto inputBillDto)
        {

            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                await _billProvider.NewBill(inputBillDto, SystemConstants.BillDestinyPay);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> NewReceivable([FromBody] InputBillDto inputBillDto)
        {

            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                await _billProvider.NewBill(inputBillDto, SystemConstants.BillDestinyReceive);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetByDate(DateTime startDate, DateTime endDate, string destiny)
        {

            try
            {
                var listReturn = await _billProvider.GetBillsByDate(startDate, endDate, destiny);

                return Ok(listReturn);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> PaymentMethod([FromBody] InputBillPaymentMethodDto inputBillDto)
        {

            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                await _billProvider.UpdatePaymentMethod(inputBillDto.Id, inputBillDto.PaymentMethodSysId);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> DueDate([FromBody] InputBillPaymentMethodDto inputBillDto)
        {

            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                await _billProvider.UpdatePaymentMethod(inputBillDto.Id, inputBillDto.PaymentMethodSysId);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> Value([FromBody] InputBillValueDto inputBillDto)
        {

            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                await _billProvider.UpdateValue(inputBillDto.Id, inputBillDto.Value);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
