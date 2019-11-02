using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputCustomerRegistrationDtoValidator : AbstractValidator<InputCustomerRegistrationDto>
    {
        public InputCustomerRegistrationDtoValidator()
        {
            RuleFor(x => x.Name).NotEmpty().Length(0, 255)
                .WithMessage("Informe o nome do usuário");
            RuleFor(x => x.ShortName).NotEmpty().Length(0, 30)
                .WithMessage("Informe o nome abreviado do usuário");
            RuleFor(x => x.Cpf).NotEmpty().Length(11)
                .WithMessage("Informe o cpf do usuário");
            
        }
    }
}