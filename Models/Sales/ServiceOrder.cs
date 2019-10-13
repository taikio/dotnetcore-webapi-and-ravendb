using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Sales
{
    public class ServiceOrder
    {
        public ServiceOrder(DateTime date, string description, Customer customer, Bill bill)
        {
            Date = date;
            Description = description;
            Customer = customer;
            Bill = bill;
        }

        public string Id { get; private set; }
        public DateTime Date { get; private set; }
        public string Description { get; private set; }
        public Customer Customer { get; private set; }
        public Bill Bill { get; private set; }
        public DateTime? CancelDate { get; private set; }
        public bool IsCanceled { get; private set; }

        #region MÉTODOS

        public void CancelServiceOrder()
        {
            this.CancelDate = DateTime.Now;
            this.IsCanceled = true;

            this.Bill.CancelBill();
        }

        public void ChangeCustomer(Customer newCustomer)
        {
            this.Customer = newCustomer ?? throw new Exception("É obrigatório informar um cliente para a ordem de serviço");
        }

        public void ChangeDescription(string newDescription)
        {
            this.Description = newDescription;

            this.Bill.ChangeDescription(newDescription);
        }

        #endregion
    }
}
