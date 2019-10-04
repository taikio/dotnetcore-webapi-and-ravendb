using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnetcore_webapi_and_ravendb.Models.Sales
{
    public class Customer
    {

        public Customer(string name, string shortName, string cpf)
        {
            Name = name;
            ShortName = shortName;
            Cpf = cpf;            
        }

        public string Id { get; private set; }
        public string Name { get; private set; }
        public string ShortName { get; private set; }
        public string Cpf { get; private set; }
        public string Email { get; private set; }

        #region MÉTODOS

        public void ChangeEmail(string newEmail)
        {
            this.Email = newEmail;
        }

        #endregion
    }
}
