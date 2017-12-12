using System;
using System.Collections.Generic;

namespace SmartCom.DAL.Interfaces
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
