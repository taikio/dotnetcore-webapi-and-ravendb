using System;

namespace dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos
{
    public class InputBillDueDateDto
    {
        public string Id { get; set; }
        public DateTime DueDate { get; set; }
    }
}