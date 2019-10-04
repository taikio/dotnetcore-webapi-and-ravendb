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
using System.ComponentModel;

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
                var session = await _ravenDatabaseProvider.GetSession();
                var paymentMethod = SystemConstants.ListPaymentMethods().FirstOrDefault(wh => wh.SysId == serviceOrderDto.PaymentMethodSysId);

                if (paymentMethod == null)
                {
                    throw new InvalidEnumArgumentException("Não foi encontrado um meio de pagamento válido");
                }

                var customer = await _ravenDatabaseProvider.GetEntity<Customer>(serviceOrderDto.CustomerId);

                if (customer == null)
                {
                    throw new InvalidEnumArgumentException("Não foi encontrado um cliente com o ID informado");
                }

                var bill = new Bill(
                                paymentMethod, 
                                serviceOrderDto.Value, 
                                SystemConstants.BillDestinyReceive, 
                                SystemConstants.BillStatus_EmAberto, 
                                serviceOrderDto.DueDate,
                                serviceOrderDto.Description
                                );

                await session.StoreAsync(bill);

                ServiceOrder serviceOrder = new ServiceOrder(DateTime.Now, serviceOrderDto.Description, customer, bill);

                await session.StoreAsync(serviceOrder);
                //await _ravenDatabaseProvider.CommitAsync(session);
                await session.SaveChangesAsync();
                session.Dispose();
                bill.SetServiceOrderId(serviceOrder.Id);
                await _ravenDatabaseProvider.UpdateEntity<Bill>(bill.Id, bill);
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        public async Task CancelServiceOrder(string serviceOrderId)
        {
            try
            {
                var session = await _ravenDatabaseProvider.GetSession();
                var serviceOrder = await _ravenDatabaseProvider.GetEntity<ServiceOrder>(serviceOrderId);

                if (serviceOrder == null)
                    throw new Exception("Não existe uma ordem de serviço com o ID informado!");
                
                if (serviceOrder.IsCanceled)
                    throw new Exception("A ordem de serviço já está cancelada!");

                var bill = await _ravenDatabaseProvider.GetEntity<Bill>(serviceOrder.Bill.Id);

                if (bill == null)
                    throw new Exception("Não existe um lançamento financeiro vinculado a esta ordem de serviço!");
                

                serviceOrder.CancelServiceOrder();
                bill.CancelBill();
                
                await session.StoreAsync(serviceOrder, serviceOrder.Id);
                await session.StoreAsync(bill, bill.Id);
                await _ravenDatabaseProvider.CommitAsync(session);
            }
            catch (Exception exception)
            {
                throw exception;
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
            var session = await _ravenDatabaseProvider.GetSession();
            try
            {
                
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

        public async Task ChangeCustomer(string serviceOrderId, string customerId)
        {
            try
            {
                var customer = await _ravenDatabaseProvider.GetEntity<Customer>(customerId);

                if (customer == null)
                {
                    throw new ArgumentException("Não foi encontrato um cliente com o ID informado!");
                }

                var serviceOrder = await _ravenDatabaseProvider.GetEntity<ServiceOrder>(serviceOrderId);

                if (serviceOrder == null)
                {
                    throw new ArgumentException("Não foi encontrada uma ordem de serviço com o ID informado!");
                }

                serviceOrder.ChangeCustomer(customer);

                await _ravenDatabaseProvider.UpdateEntity<ServiceOrder>(serviceOrder.Id, serviceOrder);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public async Task ChangeDescription(string serviceOrderId, string description)
        {
            try
            {
                var serviceOrder = await _ravenDatabaseProvider.GetEntity<ServiceOrder>(serviceOrderId);

                if (serviceOrder == null)
                {
                    throw new ArgumentException("Não foi encontrada uma ordem de serviço com o ID informado!");
                }

                serviceOrder.ChangeDescription(description);

                var bill = await _ravenDatabaseProvider.GetEntity<Bill>(serviceOrder.Bill.Id);

                if (bill == null)
                {
                    throw new ArgumentException("Não foi encontrado um lançamento financeiro vinculado à ordem de serviço!");
                }

                bill.ChangeDescription(description);

                await _ravenDatabaseProvider.UpdateEntity<Bill>(bill.Id, bill);
                await _ravenDatabaseProvider.UpdateEntity<ServiceOrder>(serviceOrder.Id, serviceOrder);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
