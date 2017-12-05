using AutoMapper.Attributes;
using System;

namespace TestSmartCom.DTO
{

    [MapsFrom(typeof(DAL.OrderItem))]
    public class OrderItemModel
    {  
        public Guid Id { get; set; }
        public int ItemsCount { get; set; }
        public decimal ItemPrice { get; set; }
       
        public virtual Guid OrderId { get; set; }

        public virtual Guid ItemId { get; set; }
    }
}