using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using SmartCom.DAL.Interfaces;

namespace SmartCom.DAL
{
    public class Repository<T> : IRepository<T> where T : class, IEntity, new()
    {

        readonly DbSet<T> _dbSet;
        private readonly DbContext _context;

        public Repository(DbContext context) {
            _dbSet = context.Set<T>();
            _context = context;
        }
        public T Create(T entity)
        {
            return _dbSet.Add(entity);
        }

        public bool Delete(T entity)
        {
            return _dbSet.Remove(entity) != null;
        }

        public T GetById(Guid id)
        {
            return _dbSet.SingleOrDefault(e => e.Id == id);
        }

        public ICollection<T> GetList()
        {
            return _dbSet.ToList();
        }

        public T Update(T model)
        {
            _dbSet.AddOrUpdate(model);
            return _dbSet.SingleOrDefault(e => e.Id == model.Id);
        }
    }
}