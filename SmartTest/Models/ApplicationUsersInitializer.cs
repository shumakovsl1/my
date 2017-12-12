using System.Collections.Generic;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace SmartTest.Models
{
    public class ApplicationUsersInitializer : System.Data.Entity.DropCreateDatabaseAlways<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            if (!roleManager.RoleExists(Roles.Manager))
            {
                roleManager.Create(new IdentityRole(Roles.Manager));
            }

            if (!roleManager.RoleExists(Roles.Customer))
            {
                roleManager.Create(new IdentityRole(Roles.Customer));
            }

            var user1 = new ApplicationUser { UserName = "User1" };

            var user2 = new ApplicationUser { UserName = "User2" };

            var user3 = new ApplicationUser { UserName = "User3" };

            var users = new List<ApplicationUser> { user1, user2, user3 };

            foreach (var user in users)
            {
                if (userManager.FindByName(user.UserName) != null) return;
                if (!userManager.Create(user, "1234567").Succeeded)
                {
                    throw new System.Exception();
                }
            }
            userManager.AddToRole(user1.Id, Roles.Customer);
            userManager.AddToRole(user1.Id, Roles.Manager);
            userManager.AddToRole(user2.Id, Roles.Customer);
            userManager.AddToRole(user3.Id, Roles.Manager);

        }
    }
}