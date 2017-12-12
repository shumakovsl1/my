using System;
using System.ComponentModel.DataAnnotations;
using SmartCom.DAL.Interfaces;

namespace SmartCom.DAL
{
    public class Item : IEntity
    {
        public Guid Id { get; set; }

        public string Code { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        [MaxLength(30)]
        public string Category { get; set; }
    }
}