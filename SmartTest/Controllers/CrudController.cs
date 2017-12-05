using System;
using System.Collections.Generic;
using System.Linq;
using SmartCom.BL;
using SmartCom.BL.Models;
using SmartTest.DTO;
using System.Web.Mvc;

namespace SmartTest.Controllers
{
    public abstract class CrudController<T, TDto> : Controller where T : class, IEntity, new()
    {
        readonly IUnitOfWork _uow;
        readonly IRepository<T> _repo;

        protected CrudController(IUnitOfWork uow)
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
                return dbModel.Id;
            });
        }

        public virtual OperationResult Delete(TDto model)
        {
            return ExecuteAction(() =>
            {
                var dbModel = AutoMapper.Mapper.Map<T>(model);
                _repo.Delete(dbModel);
                return dbModel.Id;
            });
        }

        public virtual OperationResult Update(TDto model)
        {
            return ExecuteAction(() =>
            {
                var dbModel = AutoMapper.Mapper.Map<T>(model);
                _repo.Update(dbModel);
                return dbModel.Id;
            });
        }

        public virtual OperationResult GetItem(Guid id)
        {
            return ExecuteAction(() => _repo.GetById(id));
        }




        protected OperationResult ExecuteAction(Func<object> action)
        {
            try
            {
                return new OperationResult()
                {
                    Data = action()
                };
            }
            catch (Exception e)
            {
                return new OperationResult() { Data = e.ToString() };
            }
        }

        protected override void Dispose(bool disposing)
        {
            _uow.Dispose();
        }
    }   
}
