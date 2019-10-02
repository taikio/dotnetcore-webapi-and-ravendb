using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputBillDtoValidator : AbstractValidator<InputBillDto>
    {
        public InputBillDtoValidator()
        {
            RuleFor(x => x.PaymentMethodSysId).NotEmpty();
            RuleFor(x => x.Value).NotNull().GreaterThan(0);
            RuleFor(x => x.DueDate).NotNull().GreaterThanOrEqualTo(DateTime.Now.Date);
            RuleFor(x => x.Description).NotEmpty();
        }
    }
}
