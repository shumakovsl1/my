using System;
using AutoMapper.Attributes;
using SmartCom.DAL;

namespace SmartTest.DTO
{

    [MapsFrom(typeof(OrderItem))]
    public class OrderItemModel
    {  
        public Guid Id { get; set; }
        public int ItemsCount { get; set; }
        public decimal ItemPrice { get; set; }
       
        public virtual Guid OrderId { get; set; }

        public virtual Guid ItemId { get; set; }
    }
}