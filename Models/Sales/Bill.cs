using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnetcore_webapi_and_ravendb.Conventions;

namespace dotnetcore_webapi_and_ravendb.Models.Sales
{
    public class Bill
    {
        public Bill(PaymentMethod paymentMethod, decimal value, string destiny, string status, DateTime dueDate, string description)
        {
            PaymentMethod = paymentMethod;
            Value = value;
            Destiny = destiny;
            Status = status;
            DueDate = dueDate;
            Description = description;
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
        public string Description { get; private set; }
        public string ServiceOrderId { get; private set; }

        #region PROPRIEDADES VIRTUAIS

        public virtual string ComputedStatus 
        {
            get 
            {
                var status = string.Empty;
                
                if (!this.Paid && this.Status == SystemConstants.BillStatus_EmAberto && this.DueDate < DateTime.Now.Date)
                {
                    status = SystemConstants.BillStatus_Vencido;
                }
                else
                {
                    status = this.Status;
                }

                return status;
            }
        }        

        #endregion

        #region MÉTODOS

        public void CancelBill()
        {
            this.Status = SystemConstants.BillStatus_Cancelado;
            this.CancelDate = DateTime.Now;
        }

        public void UpdatePaymentMethod(PaymentMethod paymentMethod)
        {
            this.PaymentMethod = paymentMethod;
        }

        public void UpdateDueDate(DateTime newDueDate)
        {
            this.DueDate = newDueDate;
        }

        public void UpdateValue(decimal newValue)
        {
            this.Value = newValue;
        }

        public void SetServiceOrderId(string id)
        {
            if (string.IsNullOrEmpty(this.ServiceOrderId))
            {
                this.ServiceOrderId = id;
            }
        }

        public void MakeRetirement()
        {
            this.Paid = true;
            this.PayDay = DateTime.Now;
            this.Status = SystemConstants.BillStatus_Pago;
        }

        public void ChangeDescription(string newDescription)
        {
            this.Description = newDescription;
        }

        #endregion
    }
}
