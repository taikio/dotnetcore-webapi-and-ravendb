using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputCustomerCpfDtoValidator : AbstractValidator<InputCustomerCpfDto>
    {
        public InputCustomerCpfDtoValidator()
        {
            RuleFor(x => x.Id).NotEmpty()
                .WithMessage("O ID do cliente precisa ser informado");
            RuleFor(x => x.Cpf).NotEmpty().EmailAddress()
                .WithMessage("Informe um cpf válido");
        }
    }
}