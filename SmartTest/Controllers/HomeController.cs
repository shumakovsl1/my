using SmartCom.BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SmartTest.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController(IUserInfo userInfo) : base(userInfo)
        {
        }

        public ActionResult Index()
        {
            ViewBag.UserInfo = UserInfo;
            return View();
        }
    }
}