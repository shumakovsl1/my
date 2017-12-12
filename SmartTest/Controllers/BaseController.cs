using SmartCom.BL;
using System;
using System.Collections.Generic;
using System.Web.Mvc;
using SmartCom.BL.Models;

namespace SmartTest.Controllers
{
    [Authorize]
    public class BaseController : Controller
    {
        protected IUserInfo UserInfo { get; }

        public BaseController(IUserInfo userInfo)
        {
            UserInfo = userInfo;
        } 
    }
}
