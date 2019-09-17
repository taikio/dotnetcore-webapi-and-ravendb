using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Sales
{
    public class PaymentMethod
    {
        public string Id { get; set; }
        public string SysId { get; set; }
        public string Description { get; set; }
    }
}
