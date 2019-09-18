using dotnetcore_webapi_and_ravendb.Contracts;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using dotnetcore_webapi_and_ravendb.Conventions;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using dotnetcore_webapi_and_ravendb.Models.Sales;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Providers.Sales
{
    public class ServiceOrderProvider : IServiceOrderProvider
    {
        private readonly IRavenDatabaseProvider _ravenDatabaseProvider;

        public ServiceOrderProvider(IRavenDatabaseProvider ravenDatabaseProvider)
        {
            _ravenDatabaseProvider = ravenDatabaseProvider;
        }

        public async Task NewServiceOrder(InputServiceOrderDto serviceOrderDto)
        {
            try
            {
                var paymentMethod = await _ravenDatabaseProvider.GetEntity<PaymentMethod>(serviceOrderDto.PaymentMethodId);
                var customer = await _ravenDatabaseProvider.GetEntity<Customer>(serviceOrderDto.CustomerId);

                var bill = new Bill(
                                paymentMethod, 
                                serviceOrderDto.Value, 
                                SystemConstants.BillDestinyReceive, 
                                SystemConstants.BillStatus_EmAberto, 
                                serviceOrderDto.DueDate
                                );

                ServiceOrder serviceOrder = new ServiceOrder(DateTime.Now, serviceOrderDto.Description, customer, bill);

                await _ravenDatabaseProvider.CreateEntity(serviceOrder);
            }
            catch (System.Exception ex)
            {

                throw;
            }
        }

        public async Task UpdateServiceOrder(ServiceOrder serviceOrder)
        {

            try
            {
                await _ravenDatabaseProvider.UpdateEntity(serviceOrder.Id, serviceOrder);
            }
            catch (System.Exception ex)
            {

                throw;
            }
        }

        public async Task DeleteServiceOrder(ServiceOrder serviceOrder)
        {

            try
            {
                await _ravenDatabaseProvider.DeleteEntity(serviceOrder.Id);
            }
            catch (System.Exception ex)
            {

                throw;
            }
        }

        public async Task<List<ServiceOrder>> GetAllServiceOrders()
        {
            var serviceOrdersList = await _ravenDatabaseProvider.GetEntities<ServiceOrder>();

            return serviceOrdersList;
        }
    }
}
