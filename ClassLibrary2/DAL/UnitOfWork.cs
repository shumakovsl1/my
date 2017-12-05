using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using SmartCom.BL;
using Autofac;

namespace SmartTest.DAL
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
            return _container.Resolve<IRepository<T>>();          
        }
        public void Dispose()
        {
            _dbContext.Dispose();
        }
    }
}