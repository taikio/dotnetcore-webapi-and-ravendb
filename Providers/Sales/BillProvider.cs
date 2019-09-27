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
    public class BillProvider : IBillProvider
    {
        private readonly IRavenDatabaseProvider _ravenDatabaseProvider;
        public BillProvider(IRavenDatabaseProvider ravenDatabaseProvider)
        {
            _ravenDatabaseProvider = ravenDatabaseProvider;
        }

        public async Task NewBill(InputBillDto inputBillDto)
        {
            try
            {
                var paymentMethod = SystemConstants.ListPaymentMethods().FirstOrDefault(wh => wh.SysId == inputBillDto.PaymentMethodSysId);
                var billDestiny = inputBillDto.Destiny.ToUpper() == SystemConstants.BillDestinyReceive
                    ? SystemConstants.BillDestinyReceive
                    : SystemConstants.BillDestinyPay;

                var bill = new Bill(
                                paymentMethod,
                                inputBillDto.Value,
                                billDestiny,
                                SystemConstants.BillStatus_EmAberto,
                                inputBillDto.DueDate
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

                var listResult = session.Query<Bill>()
                    .Where(x => x.DueDate >= startDate && x.DueDate <= endDate && x.Destiny == destiny).ToList();

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
