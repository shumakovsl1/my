using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SmartCom.DAL;
using SmartCom.DAL.Interfaces;
using SmartTest.DTO;

namespace SmartTest.Controllers
{
    public class ItemController : CrudController<Item, ItemModel>
    {
        protected ItemController(IUnitOfWork uow) : base(uow)
        {
        }
    }
}