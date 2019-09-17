using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputCustomerRegistrationDtoValidator
    {
         public class InputUserRegistrationDtoValidator : AbstractValidator<InputCustomerRegistrationDto>
    {
        public InputUserRegistrationDtoValidator()
        {
            RuleFor(x => x.Name).NotEmpty().Length(0, 255);
            RuleFor(x => x.ShortName).NotEmpty().Length(0, 255);
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
            RuleFor(x => x.Cpf).NotEmpty().Length(11);
            
        }
    }
    }
}