using System.Collections.Generic;
using dotnetcore_webapi_and_ravendb.Contracts.Lookups;
using dotnetcore_webapi_and_ravendb.Conventions;
using dotnetcore_webapi_and_ravendb.Models.Sales;

namespace dotnetcore_webapi_and_ravendb.Providers.Lookups
{
    public class LookupsProvider : ILookupsProvider
    {
        public LookupsProvider()
        {
            
        }

        public List<PaymentMethod> GetPaymentMethods()
        {
            var listPaymentMethod = new List<PaymentMethod>();
            
            listPaymentMethod.Add(SystemConstants.PaymentMethod_Billet);
            listPaymentMethod.Add(SystemConstants.PaymentMethod_Card);
            listPaymentMethod.Add(SystemConstants.PaymentMethod_Money);

            return listPaymentMethod;
        }
    }
}