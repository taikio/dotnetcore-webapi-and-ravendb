using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Contracts.Sales
{
    public interface IServiceOrderProvider
    {
        Task NewServiceOrder(InputServiceOrderDto serviceOrderDto);
    }
}
