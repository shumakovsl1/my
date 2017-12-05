using Autofac;
using Autofac.Integration.Mvc;
using AutoMapper.Attributes;
using SmartCom.BL;
using SmartCom.BL.Models;
using SmartTest.DAL;
using SmartTest.Models.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace SmartTest
{
    public class MvcApplication : System.Web.HttpApplication
    {
        IContainer container;

        public override void Dispose()
        {
            if (container != null)
            {
                container.Dispose();
            }
        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            GlobalConfiguration.Configure(WebApiConfig.Register);

            AutoMapper.Mapper.Initialize(config => {
                typeof(TestSmartCom.DTO.CustomerModel).Assembly.MapTypes(config);     
            });

            var builder = new ContainerBuilder();
            builder.RegisterGeneric(typeof(Repository<>)).As(typeof(IRepository<>));
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>().InstancePerRequest();
            builder.Register(x => container).As<IContainer>().SingleInstance();
            builder.RegisterType<UserInfo>().As<IUserInfo>().InstancePerRequest();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container)); //Set the MVC DependencyResolver
            //GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver((IContainer)container); //Set the WebApi DependencyResolver

        }
    }
}
