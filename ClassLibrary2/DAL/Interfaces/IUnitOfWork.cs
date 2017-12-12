using System;

namespace SmartCom.DAL.Interfaces
{
    public interface IUnitOfWork: IDisposable
    {
        IRepository<T> GetRepository<T>() where T : class, IEntity, new();
        void Commit();
    }
}
