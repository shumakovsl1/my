using System;
using SmartCom.DAL.Interfaces;

namespace SmartCom.DAL
{
    public class Customer: IEntity
    {
       
        public Guid Id { get; set; }

        public string Name { get; set; }
     
        public string Code { get; set; }

        public string Address { get; set; }
        public int? Discount { get; set; }
       public string UserId { get; set; }

    }
}