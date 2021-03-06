﻿using System;
using System.Collections.Generic;
using System.Linq;
using SmartCom.BL;
using SmartCom.BL.Models;
using SmartTest.DTO;
using System.Web.Mvc;
using SmartCom.DAL.Interfaces;

namespace SmartTest.Controllers
{
    public abstract class CrudController<T, TDto> : BaseController where T : class, IEntity, new()
    {
        readonly IUnitOfWork _uow;
        readonly IRepository<T> _repo;

        protected CrudController(IUnitOfWork uow, IUserInfo userInfo) : base(userInfo)
        {
            _uow = uow;
            _repo = _uow.GetRepository<T>();
        }

        [System.Web.Mvc.HttpGet]
        [System.Web.Mvc.AllowAnonymous]
        public virtual OperationResult GetList()
        {
            return ExecuteAction(_repo.GetList);
        }

        public virtual OperationResult Create(TDto model)
        {
            return ExecuteAction(() =>
            {
                var dbModel = AutoMapper.Mapper.Map<T>(model);
                _repo.Create(dbModel);
                _uow.Commit();
                return dbModel.Id;
            });
        }

        public virtual OperationResult Delete(TDto model)
        {
            return ExecuteAction(() =>
            {
                var dbModel = AutoMapper.Mapper.Map<T>(model);
                _repo.Delete(dbModel);
                _uow.Commit();
                return dbModel.Id;
            });
        }

        public virtual OperationResult Update(TDto model)
        {
            return ExecuteAction(() =>
            {
                var dbModel = AutoMapper.Mapper.Map<T>(model);
                _repo.Update(dbModel);
                _uow.Commit();
                return dbModel.Id;
            });
        }

        public virtual OperationResult GetItem(Guid id)
        {
            return ExecuteAction(() => _repo.GetById(id));
        }




       

        protected override void Dispose(bool disposing)
        {
            _uow.Dispose();
        }
    }   
}
