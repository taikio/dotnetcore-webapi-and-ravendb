using dotnetcore_webapi_and_ravendb.Contracts;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using dotnetcore_webapi_and_ravendb.Conventions;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using dotnetcore_webapi_and_ravendb.Models.Sales;
using Raven.Client.Documents;
using Sparrow.Platform.Posix.macOS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Providers.Sales
{
    public class BillProvider : IBillProvider
    {
        private readonly IRavenDatabaseProvider _ravenDatabaseProvider;
        public BillProvider(IRavenDatabaseProvider ravenDatabaseProvider)
        {
            _ravenDatabaseProvider = ravenDatabaseProvider;
        }

        public async Task NewBill(InputBillDto inputBillDto, string destiny)
        {
            try
            {
                var paymentMethod = SystemConstants.ListPaymentMethods().FirstOrDefault(wh => wh.SysId == inputBillDto.PaymentMethodSysId);
                var billDestiny = destiny.ToUpper() == SystemConstants.BillDestinyReceive
                    ? SystemConstants.BillDestinyReceive
                    : SystemConstants.BillDestinyPay;

                var bill = new Bill(
                                paymentMethod,
                                inputBillDto.Value,
                                billDestiny,
                                SystemConstants.BillStatus_EmAberto,
                                inputBillDto.DueDate,
                                inputBillDto.Description
                                );

                await _ravenDatabaseProvider.CreateEntity<Bill>(bill);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }       

        public async Task<List<Bill>> GetBillsByDate(DateTime startDate, DateTime endDate, string destiny)
        {
            var session = await _ravenDatabaseProvider.GetSession();
            try
            {
                startDate = startDate.AddHours(00).AddMinutes(00);
                endDate = endDate.AddHours(23).AddMinutes(59).AddSeconds(59);
                destiny = destiny.ToUpper();

                //var listResult = await session.Query<Bill>()
                //    .Where(x => x.DueDate >= startDate && x.DueDate <= endDate && x.Destiny == destiny).ToListAsync();

                List<Bill> listResult = await session.Query<Bill>()
                    .Where(x => x.DueDate >= startDate && x.DueDate <= endDate && x.Destiny == destiny).ToListAsync();
                
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

        public async Task<List<Bill>> GetAllBills()
        {
            var serviceOrdersList = await _ravenDatabaseProvider.GetEntities<Bill>();

            return serviceOrdersList;
        }

        public async Task UpdatePaymentMethod(string id, string paymentMethodSysId)
        {
            try
            {
                
                var bill = await _ravenDatabaseProvider.GetEntity<Bill>(id);                

                if (bill == null)
                {
                    throw new Exception("Não foi encontrado nenhum lançamento financeiro com o id " + id);
                }

                var paymentMethod = SystemConstants.ListPaymentMethods().FirstOrDefault(x => x.SysId == paymentMethodSysId);
                if (paymentMethod == null)
                {
                    throw new ArgumentException("Não foi incontrado um meio de pagamento válido!");
                }

                var session = await _ravenDatabaseProvider.GetSession();
                var listServiceOrder = await session.Query<ServiceOrder>().Where(wh => wh.Bill.Id == bill.Id).ToListAsync();
                var serviceOrder = listServiceOrder.FirstOrDefault();

                bill.UpdatePaymentMethod(paymentMethod);

                if (serviceOrder != null)
                {
                    serviceOrder.Bill.UpdatePaymentMethod(paymentMethod);
                    await session.StoreAsync(serviceOrder, serviceOrder.Id);
                    await session.SaveChangesAsync();
                    session.Dispose();
                }

                await _ravenDatabaseProvider.UpdateEntity<Bill>(id, bill);
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }

        public async Task UpdateDueDate(string id, DateTime dueDate)
        {
            try
            {
                var bill = await _ravenDatabaseProvider.GetEntity<Bill>(id);

                if (bill == null)
                {
                    throw new Exception("Não foi encontrado nenhum lançamento financeiro com o id " + id);
                }

                if (dueDate < DateTime.MinValue || dueDate < DateTime.Now)
                {
                    throw new ArgumentException("A data de vencimento deve ser maior que a data atual!");
                }

                bill.UpdateDueDate(dueDate);

                await _ravenDatabaseProvider.UpdateEntity<Bill>(id, bill);
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }

        public async Task UpdateValue(string id, decimal value)
        {
            try
            {
                var bill = await _ravenDatabaseProvider.GetEntity<Bill>(id);

                if (bill == null)
                {
                    throw new Exception("Não foi encontrado nenhum lançamento financeiro com o id " + id);
                }

                if (value <= 0)
                {
                    throw new ArgumentException("O valor deve ser maior que zero!");
                }

                bill.UpdateValue(value);

                await _ravenDatabaseProvider.UpdateEntity<Bill>(id, bill);
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }

        public async Task Cancel(string id)
        {
            try
            {
                var bill = await _ravenDatabaseProvider.GetEntity<Bill>(id);

                if (bill == null)
                {
                    throw new Exception("Não foi encontrado nenhum lançamento financeiro com o id " + id);
                }

                bill.CancelBill();

                 await _ravenDatabaseProvider.UpdateEntity<Bill>(id, bill);
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }

        public async Task<OutputAccountBalanceDto> GetAccountBalance(DateTime startDate, DateTime endDate)
        {
            var session = await _ravenDatabaseProvider.GetSession();
            try
            {
                startDate = startDate.AddHours(00).AddMinutes(00);
                endDate = endDate.AddHours(23).AddMinutes(59).AddSeconds(59);

                List<Bill> listBills = await session.Query<Bill>()
                    .Where(x => x.DueDate >= startDate && x.DueDate <= endDate).ToListAsync();

                var listResult = new OutputAccountBalanceDto();

                listResult.IncomingPendingQuantity = listBills.Count(x => x.Destiny == SystemConstants.BillDestinyReceive && !x.Paid);
                listResult.OutgoingPendingQuantity = listBills.Count(x => x.Destiny == SystemConstants.BillDestinyPay && !x.Paid);
                listResult.IncomingPaidQuantity = listBills.Count(x => x.Destiny == SystemConstants.BillDestinyReceive && x.Paid);
                listResult.OutgoingPaidQuantity = listBills.Count(x => x.Destiny == SystemConstants.BillDestinyPay && x.Paid);
                listResult.IncomingPendingValue = listBills.Where(wh => wh.Destiny == SystemConstants.BillDestinyReceive && !wh.Paid).Sum(x => x.Value);
                listResult.OutgoingPendingValue = listBills.Where(wh => wh.Destiny == SystemConstants.BillDestinyPay && !wh.Paid).Sum(x => x.Value);
                listResult.IncomingPaidValue = listBills.Where(wh => wh.Destiny == SystemConstants.BillDestinyReceive && wh.Paid).Sum(x => x.Value);
                listResult.OutgoingPaidValue = listBills.Where(wh => wh.Destiny == SystemConstants.BillDestinyPay && wh.Paid).Sum(x => x.Value);

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

        public async Task MakeRetirement(string billId)
        {
            try
            {
                var bill = await _ravenDatabaseProvider.GetEntity<Bill>(billId);

                if (bill == null)
                {
                    throw new ArgumentException("Não foi encontrado um lançamento financeiro com o ID informado!");
                }

                bill.MakeRetirement();

                await _ravenDatabaseProvider.UpdateEntity<Bill>(bill.Id, bill);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
