using SmartCom.BL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Web;

namespace SmartTest.Models.Account
{
    public class UserInfo : IUserInfo
    {
        private readonly IPrincipal _principal;
        private ClaimsIdentity _claimsPrincipal;

        public UserInfo()
        {
            _principal = HttpContext.Current.User;
        }

        public ClaimsIdentity Identity
        {
            get
            {
                if (_claimsPrincipal == null)
                {
                    if (_principal.Identity is ClaimsIdentity)
                    {
                        _claimsPrincipal = (ClaimsIdentity)_principal.Identity;
                    }

                }
                return _claimsPrincipal;
            }
        }
        public string Name { get
            {
                return Identity?.Name;
            } }

        public ICollection<string> Roles { get
            {
                return Identity?.Claims
                    .Where(x => x.Type == ClaimTypes.Role)
                    .Select(x => x.Value)
                    .ToList();
            } }
    }
}