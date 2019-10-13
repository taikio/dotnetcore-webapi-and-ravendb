using System.Collections.Generic;
using System.Threading.Tasks;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using dotnetcore_webapi_and_ravendb.Models.Sales;

namespace dotnetcore_webapi_and_ravendb.Contracts.Sales
{
    public interface ICustomerProvider
    {
        Task NewCustomer(InputCustomerRegistrationDto customer);

        Task ChangeCustomerEmail(string id, string emailAddress);

        Task DeleteCustomer(Customer customer);

        Task<List<Customer>> GetAllCustomers();
        
    }
}