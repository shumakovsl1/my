using SmartCom.BL;
using System;
using System.Collections.Generic;
using System.Web.Mvc;
using SmartCom.BL.Models;
using SmartTest.DTO;

namespace SmartTest.Controllers
{
    [Authorize]
    public abstract class BaseController : Controller
    {
        protected IUserInfo UserInfo { get; }

        protected BaseController(IUserInfo userInfo)
        {
            UserInfo = userInfo;
        }
        protected OperationResult ExecuteAction(Func<object> action)
        {
            try
            {
                return new OperationResult()
                {
                    Data = action(),
                    Success = true
                };
            }
            catch (Exception e)
            {
                return new OperationResult() { Data = e.ToString() };
            }
        }
    }
}
