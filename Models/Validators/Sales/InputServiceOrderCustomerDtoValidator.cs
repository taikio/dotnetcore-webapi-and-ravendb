using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputServiceOrderCustomerDtoValidator : AbstractValidator<InputServiceOrderCustomerDto>
    {
        public InputServiceOrderCustomerDtoValidator()
        {
            RuleFor(x => x.ServiceOrderId).NotEmpty()
                .WithMessage("O ID da ordem de serviço precisa ser informado");
            RuleFor(x => x.CustomerId).NotEmpty()
                .WithMessage("O ID do cliente precisa ser informado");
        }
    }
}
