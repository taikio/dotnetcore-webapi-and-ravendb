using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos
{
    public class InputServiceOrderCustomerDto
    {
        public string ServiceOrderId { get; set; }
        public string CustomerId { get; set; }
    }
}
