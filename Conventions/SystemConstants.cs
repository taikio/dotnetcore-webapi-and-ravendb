using System.Collections.Generic;
using dotnetcore_webapi_and_ravendb.Models.Sales;

namespace dotnetcore_webapi_and_ravendb.Conventions
{
    public class SystemConstants
    {
        public static string BillDestinyReceive = "R";
        public static string BillDestinyPay = "P";

        public static string BillStatus_EmAberto = "ATIVO";
        public static string BillStatus_Vencido = "VENCIDO";
        public static string BillStatus_Pago = "PAGO";
        public static string BillStatus_Cancelado = "CANCELADO";
        
        public static PaymentMethod PaymentMethod_Money = new PaymentMethod
        {
            SysId = "DINHEIRO",
            Description = "Dinheiro"
        };
        
        public static PaymentMethod PaymentMethod_Card = new PaymentMethod
        {
            SysId = "CARTAO",
            Description = "Cartao de Credito"
        };
        
        public static PaymentMethod PaymentMethod_Billet = new PaymentMethod
        {
            SysId = "BOLETO",
            Description = "Boleto Bancario"
        };

        public static List<PaymentMethod> ListPaymentMethods()
        {
            var listReturn = new List<PaymentMethod>();
            
            listReturn.Add(PaymentMethod_Card);
            listReturn.Add(PaymentMethod_Money);
            listReturn.Add(PaymentMethod_Billet);

            return listReturn;
        }
    }
}