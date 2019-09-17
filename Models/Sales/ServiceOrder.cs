using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Sales
{
    public class ServiceOrder
    {
        public string Id { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public Customer Customer { get; set; }
        public Bill Bill { get; set; }
        public DateTime? CancelDate { get; set; }
        public bool IsCanceled { get; set; }
    }
}
