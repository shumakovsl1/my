using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartCom.DAL.Interfaces
{
    public interface IEntity
    {
        
        Guid Id { get; set; }
    }
}
