using System;
using SmartCom.DAL.Interfaces;

namespace SmartCom.DAL
{
    public class OrderItem: BaseEntity
    {  
  
        public int ItemsCount { get; set; }
        public decimal ItemPrice { get; set; }
       
        public virtual Guid OrderId { get; set; }

        public virtual Guid ItemId { get; set; }
    }
}