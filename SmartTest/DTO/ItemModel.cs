using System;
using AutoMapper.Attributes;
using SmartCom.DAL;

namespace SmartTest.DTO
{
    [MapsFrom(typeof(Item))]
    public class ItemModel 
    {
        public Guid Id { get; set; }

        public string Code { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public string Category { get; set; }
    }
}