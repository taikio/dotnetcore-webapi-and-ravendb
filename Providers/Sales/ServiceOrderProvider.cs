using dotnetcore_webapi_and_ravendb.Contracts;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using dotnetcore_webapi_and_ravendb.Conventions;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using dotnetcore_webapi_and_ravendb.Models.Sales;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Raven.Client.Documents;

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
                var paymentMethod = SystemConstants.ListPaymentMethods().FirstOrDefault(wh => wh.SysId == serviceOrderDto.PaymentMethodSysId);
                var customer = await _ravenDatabaseProvider.GetEntity<Customer>(serviceOrderDto.CustomerId);

                var bill = new Bill(
                                paymentMethod, 
                                serviceOrderDto.Value, 
                                SystemConstants.BillDestinyReceive, 
                                SystemConstants.BillStatus_EmAberto, 
                                serviceOrderDto.DueDate
                                );

                await _ravenDatabaseProvider.CreateEntity(bill);

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
        
        public async Task<List<ServiceOrder>> GetServiceOrdersByDate(DateTime startDate, DateTime endDate)
        {
            var session = _ravenDatabaseProvider.GetSession();
            try
            {
//                var listResult = from serviceOrder in session.Query<ServiceOrder>()
//                    where serviceOrder.Date >= startDate.Date
//                    where serviceOrder.Date <= endDate.Date
//                    select serviceOrder;
                startDate = startDate.AddHours(00).AddMinutes(00);
                endDate = endDate.AddHours(23).AddMinutes(59).AddSeconds(59);
                var listResult = session.Query<ServiceOrder>()
                    .Where(x => x.Date >= startDate && x.Date <= endDate).ToList();

                return listResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                session.Dispose();
            }
        }
    }
}
