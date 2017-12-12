﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using SmartCom.DAL.Interfaces;

namespace SmartCom.DAL
{
    public class Repository<T> : IRepository<T> where T : class, IEntity, new()
    {

        DbSet<T> _dbSet;

        public Repository(DbContext context) {
            _dbSet = context.Set<T>();
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
            throw new NotImplementedException();
        }
    }
}