using System;
using SmartCom.BL.Models;
using AutoMapper.Attributes;

namespace TestSmartCom.DTO
{
    [MapsFrom(typeof(DAL.Item))]
    public class ItemModel 
    {
        public Guid Id { get; set; }

        public string Code { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public string Category { get; set; }
    }
}