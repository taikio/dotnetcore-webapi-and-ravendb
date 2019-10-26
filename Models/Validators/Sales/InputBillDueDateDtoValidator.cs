using System;
using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputBillDueDateDtoValidator : AbstractValidator<InputBillDueDateDto>
    {
        public InputBillDueDateDtoValidator()
        {
            RuleFor(x => x.DueDate).NotNull().GreaterThanOrEqualTo(DateTime.Now.Date)
                .WithMessage("A data de vencimento deve ser maior ou igual a data atual");
            RuleFor(x => x.Id).NotEmpty()
                .WithMessage("O ID do lançamento Financeiro precisa ser informado");
        }
    }
}