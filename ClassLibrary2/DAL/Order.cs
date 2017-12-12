using System;
using SmartCom.DAL.Interfaces;

namespace SmartCom.DAL
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