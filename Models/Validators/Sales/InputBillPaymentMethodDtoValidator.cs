using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputBillPaymentMethodDtoValidator : AbstractValidator<InputBillPaymentMethodDto>
    {
        public InputBillPaymentMethodDtoValidator()
        {
            RuleFor(x => x.PaymentMethodSysId).NotEmpty();
            RuleFor(x => x.Id).NotEmpty();
        }
    }
}