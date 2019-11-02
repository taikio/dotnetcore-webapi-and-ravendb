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
            RuleFor(x => x.PaymentMethodSysId).NotEmpty()
                .WithMessage("É necessário selecionar um meio de pagamento");
            RuleFor(x => x.Value).NotNull().GreaterThan(0)
                .WithMessage("O valor deve ser maior que 0");
            RuleFor(x => x.DueDate).NotNull().GreaterThanOrEqualTo(DateTime.Now.Date)
                .WithMessage("A data de vencimento deve ser maior que a data atual");
            RuleFor(x => x.Description).NotEmpty()
                .WithMessage("É necessário informar uma descrição para a orde de serviço");
        }
    }
}
