using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SmartTest.Startup))]
namespace SmartTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
