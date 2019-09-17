using System.Collections.Generic;
using System.Threading.Tasks;
using dotnetcore_webapi_and_ravendb.Models.Sales;

namespace dotnetcore_webapi_and_ravendb.Contracts.Sales
{
    public interface ICustomerProvider
    {
        Task NewCustomer(Customer customer);
        
        Task UpdateCustomerInfo(Customer customer);        

        Task DeleteCustomer(Customer customer);

        Task<List<Customer>> GetAllCustomers();
        
    }
}