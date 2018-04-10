using System.Data.Entity;
using Autofac;
using SmartCom.DAL.Interfaces;

namespace SmartCom.DAL
{
    public class UnitOfWork: IUnitOfWork
    {
        readonly DbContext _dbContext;
        readonly IContainer _container;

        public UnitOfWork(DbContext dbContext, IContainer container)
        {
            _dbContext = dbContext;
            _container = container;
        }

        public void Commit()
        {
            _dbContext.SaveChanges();
        }

        IRepository<T> IUnitOfWork.GetRepository<T>()
        {
            return _container.Resolve<IRepository<T>>(new NamedParameter("context", _dbContext));          
        }
        public void Dispose()
        {
            _dbContext.Dispose();
        }
    }
}