using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputBillPaymentMethodDtoValidator : AbstractValidator<InputBillPaymentMethodDto>
    {
        public InputBillPaymentMethodDtoValidator()
        {
            RuleFor(x => x.PaymentMethodSysId).NotEmpty()
                .WithMessage("É necessário informar um meio de pagamento");
            RuleFor(x => x.Id).NotEmpty()
                .WithMessage("O ID do lançamento Financeiro precisa ser informado");
        }
    }
}