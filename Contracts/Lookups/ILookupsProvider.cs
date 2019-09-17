using System.Collections.Generic;
using dotnetcore_webapi_and_ravendb.Models.Sales;

namespace dotnetcore_webapi_and_ravendb.Contracts.Lookups
{
    public interface ILookupsProvider
    {
        List<PaymentMethod> GetPaymentMethods();
    }
}