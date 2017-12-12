using System;
using AutoMapper.Attributes;
using SmartCom.DAL;

namespace SmartTest.DTO
{
    [MapsFrom(typeof(Order))]
    public class OrderModel
    {
        public Guid Id { get; set; }

        public DateTime OrderDate { get; set; }
        public DateTime ShipmentDate { get; set; }
        public int OrderNumber { get; set; }

        public string Status { get; set; }

        public Guid CustomerId { get; set; }        
    }

}