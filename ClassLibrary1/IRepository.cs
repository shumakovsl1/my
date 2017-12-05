using SmartCom.BL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SmartCom.BL
{
    public interface IRepository <T> where T: class, new()
    {
        ICollection<T> GetList();
        T Create(T entity);
        T Update(T entity);
        bool Delete(T entity);
        T GetById(Guid id);
    }
}
