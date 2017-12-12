using Microsoft.AspNet.Identity.EntityFramework;
using SmartCom.BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SmartCom.DAL.Interfaces;

namespace SmartTest.Models
{
    public class UserRepository : IRepository<ApplicationUser>
    {
        ApplicationUserManager _userManager;
        ApplicationDbContext _dbContext;
        public UserRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            _userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(dbContext));

        }
        public ApplicationUser Create(ApplicationUser entity)
        {
            throw new NotImplementedException();
        }

        public bool Delete(ApplicationUser entity)
        {
            throw new NotImplementedException();
        }

        public ApplicationUser GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public ICollection<ApplicationUser> GetList()
        {
            throw new NotImplementedException();
        }

        public ApplicationUser Update(ApplicationUser entity)
        {
            throw new NotImplementedException();
        }
    }
}