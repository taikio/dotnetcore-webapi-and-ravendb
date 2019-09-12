using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Sales
{
    public class Customer
    {

        public Customer(string name, string shortName, string cpf, string email)
        {
            Name = name;
            ShortName = shortName;
            Cpf = cpf;
            Email = email;
        }

        public string Id { get; private set; }
        public string Name { get; private set; }
        public string ShortName { get; private set; }
        public string Cpf { get; private set; }
        public string Email { get; private set; }
    }
}
