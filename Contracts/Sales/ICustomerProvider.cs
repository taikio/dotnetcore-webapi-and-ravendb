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

        Task DeleteCustomer(string id);

        Task<List<Customer>> GetAllCustomers();
        Task ChangeCustomerName(string id, string name);
        Task ChangeCustomerShortName(string id, string shortName);
        Task ChangeCustomerCpf(string id, string cpf);

    }
}