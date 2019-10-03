using dotnetcore_webapi_and_ravendb.Contracts;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using dotnetcore_webapi_and_ravendb.Conventions;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using dotnetcore_webapi_and_ravendb.Models.Sales;
using Raven.Client.Documents;
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

                bill.UpdatePaymentMethod(paymentMethod);

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
    }
}
