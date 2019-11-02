using System;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputServiceOrderDtoValidator : AbstractValidator<InputServiceOrderDto>
    {
        public InputServiceOrderDtoValidator()
        {
            RuleFor(x => x.Description).NotEmpty().Length(0, 150)
                .WithMessage("É necessário informar uma descrição");
            RuleFor(x => x.CustomerId).NotEmpty()
                .WithMessage("O ID do cliente precisa ser informado");
            RuleFor(x => x.PaymentMethodSysId).NotEmpty()
                .WithMessage("O ID do meio de pagamento precisa ser informado");
            RuleFor(x => x.Value).NotEmpty().GreaterThan(0)
                .WithMessage("O valor deve ser maior que 0");
            RuleFor(x => x.DueDate).NotEmpty().NotNull().GreaterThanOrEqualTo(DateTime.Now.Date)
                .WithMessage("A data de vencimento deve ser maior ou igual a data atual");
        }
    }
}