using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Sales
{
    public class Bill
    {
        public string Id { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public decimal Value { get; set; }
        public string Destiny { get; set; }
        public string Status { get; set; }
        public bool Paid { get; set; }
        /// <summary>
        /// Dia de vencimento
        /// </summary>
        public DateTime DueDate { get; set; }
        /// <summary>
        /// Dia em que foi pago
        /// </summary>
        public DateTime? PayDay { get; set; }
        /// <summary>
        /// Data de estorno
        /// </summary>
        public DateTime? ReversalDate { get; set; }
        public DateTime? CancelDate { get; set; }
    }
}
