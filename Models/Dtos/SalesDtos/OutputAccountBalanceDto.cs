using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos
{
    public class OutputAccountBalanceDto
    {
        public int IncomingPendingQuantity { get; set; }
        public int OutgoingPendingQuantity { get; set; }
        public int IncomingPaidQuantity { get; set; }
        public int OutgoingPaidQuantity { get; set; }
        public decimal IncomingPendingValue { get; set; }
        public decimal OutgoingPendingValue { get; set; }
        public decimal IncomingPaidValue { get; set; }
        public decimal OutgoingPaidValue { get; set; }
        public decimal IncomingOutgoingBalance => IncomingPaidValue - OutgoingPaidValue;
        public decimal IncomingOutgoingProjection => (IncomingPaidValue + IncomingPendingValue) - (OutgoingPaidValue + OutgoingPendingValue);
    }
}
