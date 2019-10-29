using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace Sentry
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            // App code
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
