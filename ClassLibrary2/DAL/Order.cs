using System;
using System.ComponentModel.DataAnnotations.Schema;
using SmartCom.BL.Models;

namespace TestSmartCom.DAL
{
    public class Order: IEntity
    {
        public Guid Id { get; set; }

        public DateTime OrderDate { get; set; }
        public DateTime ShipmentDate { get; set; }
        public int OrderNumber { get; set; }    
        public virtual Guid CustomerId { get; set; }
        public string Status { get; set; }
    }

    
}