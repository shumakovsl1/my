using SmartCom.BL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SmartCom.BL
{
    public interface IUnitOfWork: IDisposable
    {
        IRepository<T> GetRepository<T>() where T : class, IEntity, new();
        void Commit();
    }
}
