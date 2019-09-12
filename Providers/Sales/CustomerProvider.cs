using System.Threading.Tasks;
using dotnetcore_webapi_and_ravendb.Contracts;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using dotnetcore_webapi_and_ravendb.Models.Sales;

namespace dotnetcore_webapi_and_ravendb.Providers.Sales
{
    public class CustomerProvider : ICustomerProvider
    {
        private readonly IRavenDatabaseProvider _ravenDatabaseProvider;
        public CustomerProvider(IRavenDatabaseProvider ravenDatabaseProvider)
        {
            _ravenDatabaseProvider = ravenDatabaseProvider;
        }

        public async Task NewCustomer(Customer customer)
        {
            try
            {
                await _ravenDatabaseProvider.CreateEntity(customer);
            }
            catch (System.Exception ex)
            {
                
                throw;
            }
        }

        public async Task UpdateCustomerInfo(Customer customer)
        {
            
            try
            {
                await _ravenDatabaseProvider.UpdateEntity(customer.Id, customer);
            }
            catch (System.Exception ex)
            {
                
                throw;
            }
        }

        public async Task DeleteCustomer(Customer customer)
        {
            
            try
            {
                await _ravenDatabaseProvider.DeleteEntity(customer.Id);
            }
            catch (System.Exception ex)
            {
                
                throw;
            }
        }
    }
}