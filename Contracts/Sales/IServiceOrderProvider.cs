using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnetcore_webapi_and_ravendb.Models.Sales;

namespace dotnetcore_webapi_and_ravendb.Contracts.Sales
{
    public interface IServiceOrderProvider
    {
        Task NewServiceOrder(InputServiceOrderDto serviceOrderDto);
        Task<List<ServiceOrder>> GetAllServiceOrders();
        Task<List<ServiceOrder>> GetServiceOrdersByDate(DateTime startDate, DateTime endDate);
        Task CancelServiceOrder(string serviceOrderId);
    }
}
