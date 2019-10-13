using System;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputBillDueDateDtoValidator : AbstractValidator<InputBillDueDateDto>
    {
        public InputBillDueDateDtoValidator()
        {
            RuleFor(x => x.DueDate).NotNull().GreaterThanOrEqualTo(DateTime.Now.Date);
            RuleFor(x => x.Id).NotEmpty();
        }
    }
}