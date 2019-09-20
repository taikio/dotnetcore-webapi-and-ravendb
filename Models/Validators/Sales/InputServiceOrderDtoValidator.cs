using System;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputServiceOrderDtoValidator : AbstractValidator<InputServiceOrderDto>
    {
        public InputServiceOrderDtoValidator()
        {
            RuleFor(x => x.Description).NotEmpty().Length(0, 150);
            RuleFor(x => x.CustomerId).NotEmpty();
            RuleFor(x => x.PaymentMethodId).NotEmpty();
            RuleFor(x => x.Value).NotEmpty().GreaterThan(0);
            RuleFor(x => x.DueDate).NotEmpty().NotNull().GreaterThanOrEqualTo(DateTime.Now);
        }
    }
}