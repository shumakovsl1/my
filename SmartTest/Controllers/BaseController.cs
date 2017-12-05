using SmartCom.BL;
using System;
using System.Collections.Generic;
using TestSmartCom.DTO;
using TestSmartCom.DAL;
using System.Web.Mvc;
using SmartCom.BL.Models;

namespace SmartTest.Controllers
{
    public class BaseController : Controller
    {
        protected IUserInfo UserInfo { get; }

        public BaseController(IUserInfo userInfo)
        {
            UserInfo = userInfo;
        } 
    }
}
