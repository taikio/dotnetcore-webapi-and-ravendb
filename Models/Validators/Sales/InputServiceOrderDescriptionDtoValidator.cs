using dotnetcore_webapi_and_ravendb.Models.Dtos.SalesDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Validators.Sales
{
    public class InputServiceOrderDescriptionDtoValidator : AbstractValidator<InputServiceOrderDescriptionDto>
    {
        public InputServiceOrderDescriptionDtoValidator()
        {
            RuleFor(x => x.ServiceOrderId).NotEmpty()
                .WithMessage("O ID da ordem de serviço precisa ser informado");
            RuleFor(x => x.Description).NotEmpty()
                .WithMessage("É necessário informar uma descrição");
        }
    }
}
