using SmartCom.BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using SmartCom.BL.Models;
using SmartTest.DTO;
using SmartTest.Models;

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
