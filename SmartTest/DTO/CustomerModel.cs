using System;
using AutoMapper.Attributes;
using SmartCom.DAL;

namespace SmartTest.DTO
{
    [MapsFrom(typeof(Customer))]
    public class CustomerModel
    {
       
        public Guid Id { get; set; }

        public string Name { get; set; }
     
        public string Code { get; set; }

        public string Address { get; set; }
        public int? Discount { get; set; }
       public string UserId { get; set; }

    }
}