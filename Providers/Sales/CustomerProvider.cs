using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotnetcore_webapi_and_ravendb.Contracts;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
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

        public async Task NewCustomer(InputCustomerRegistrationDto customerDto)
        {
            try
            {
                Customer newCustomer = new Customer(customerDto.Name, customerDto.ShortName, customerDto.Cpf);

                await _ravenDatabaseProvider.CreateEntity(newCustomer);
            }
            catch (System.Exception ex)
            {
                
                throw ex;
            }
        }

        public async Task ChangeCustomerEmail(string id, string emailAddress)
        {
            
            try
            {
                var customer = await _ravenDatabaseProvider.GetEntity<Customer>(id);

                if (customer == null)
                {
                    throw new ArgumentException("Não foi encontrado um cliente com o ID informado!");
                }

                customer.ChangeEmail(emailAddress);

                await _ravenDatabaseProvider.UpdateEntity(customer.Id, customer);
            }
            catch (System.Exception ex)
            {
                
                throw ex;
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

        public async Task<List<Customer>> GetAllCustomers()
        {
            var usersList = await _ravenDatabaseProvider.GetEntities<Customer>();

            return usersList;
        }
    }
}