using SmartCom.BL.Models;
using System;

namespace TestSmartCom.DAL
{
    public class OrderItem: IEntity
    {  
        public Guid Id { get; set; }
        public int ItemsCount { get; set; }
        public decimal ItemPrice { get; set; }
       
        public virtual Guid OrderId { get; set; }

        public virtual Guid ItemId { get; set; }
    }
}