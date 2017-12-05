using System;
using AutoMapper.Attributes;

namespace TestSmartCom.DTO
{
    [MapsFrom(typeof(DAL.Order))]
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