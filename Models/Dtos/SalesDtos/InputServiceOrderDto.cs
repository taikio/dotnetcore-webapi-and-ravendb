using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos
{
    public class InputServiceOrderDto
    {
        public string Description { get; set; }
        public string CustomerId { get; set; }
        public string PaymentMethodSysId { get; set; }
        public decimal Value { get; set; }
        public DateTime DueDate { get; set; }
    }
}
