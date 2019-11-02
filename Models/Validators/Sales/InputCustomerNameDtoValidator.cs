using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputCustomerNameDtoValidator : AbstractValidator<InputCustomerNameDto>
    {
        public InputCustomerNameDtoValidator()
        {
            RuleFor(x => x.Id).NotEmpty()
                .WithMessage("O ID do cliente precisa ser informado");
            RuleFor(x => x.Name).NotEmpty()
                .WithMessage("Informe um nome válido");
        }
    }
}