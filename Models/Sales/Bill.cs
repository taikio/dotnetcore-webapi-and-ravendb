﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Sales
{
    public class Bill
    {
        public Bill(PaymentMethod paymentMethod, decimal value, string destiny, string status, DateTime dueDate)
        {
            PaymentMethod = paymentMethod;
            Value = value;
            Destiny = destiny;
            Status = status;
            DueDate = dueDate;
        }

        public string Id { get; private set; }
        public PaymentMethod PaymentMethod { get; private set; }
        public decimal Value { get; private set; }
        /// <summary>
        /// Indica o tipo de conta
        /// R = Receber
        /// P = Pagar
        /// </summary>
        public string Destiny { get; private set; }
        public string Status { get; private set; }
        public bool Paid { get; private set; }
        /// <summary>
        /// Dia de vencimento
        /// </summary>
        public DateTime DueDate { get; private set; }
        /// <summary>
        /// Dia em que foi pago
        /// </summary>
        public DateTime? PayDay { get; private set; }
        /// <summary>
        /// Data de estorno
        /// </summary>
        public DateTime? ReversalDate { get; private set; }
        public DateTime? CancelDate { get; private set; }
    }
}