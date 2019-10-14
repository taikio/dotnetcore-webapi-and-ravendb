using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Primitives;
using dotnetcore_webapi_and_ravendb.Contracts;
using dotnetcore_webapi_and_ravendb.Contracts.Sales;
using dotnetcore_webapi_and_ravendb.Contracts.Lookups;
using dotnetcore_webapi_and_ravendb.Providers;
using dotnetcore_webapi_and_ravendb.Providers.Sales;
using dotnetcore_webapi_and_ravendb.Providers.Lookups;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Raven.Client.Documents;
using System.IO;

namespace dotnetcore_webapi_and_ravendb
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            Configuration = configuration;
            HostingEnvironment = env;
        }

        public IConfiguration Configuration { get; }
        public IHostingEnvironment HostingEnvironment { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvc()
                    .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());

            services.AddAuthentication(options =>
            {
                options.DefaultScheme = OpenIdConnectConstants.TokenTypes.Bearer;
            })
            .AddOAuthValidation()
            .AddOpenIdConnectServer(options =>
            {
                options.ProviderType = typeof(AuthorizationProvider);
                options.TokenEndpointPath = "/connect/token";
                options.AllowInsecureHttp = HostingEnvironment.IsDevelopment();
            });

            #region BIND DEPENDENCE INJECTION

            services.AddScoped<AuthorizationProvider>();
            services.AddScoped<IRavenDatabaseProvider, RavenDBProvider>();
            services.AddScoped<IPasswordHasherProvider, PasswordHasherProvider>();
            services.AddScoped<ILoginProvider, LoginProvider>();
            services.AddScoped<IRefreshTokenProvider, RefreshTokenProvider>();
            services.AddScoped<IUserProvider, UserProvider>();
            services.AddScoped<ILookupsProvider, LookupsProvider>();
            services.AddScoped<ICustomerProvider, CustomerProvider>();
            services.AddScoped<IServiceOrderProvider, ServiceOrderProvider>();
            services.AddScoped<IBillProvider, BillProvider>();

            #endregion
            

            // This will instantiate a communication channel between application and the RavenDB server instance.
            services.AddSingleton<IDocumentStore>(provider =>
            {
                
                 string physicalWebRootPath = HostingEnvironment.ContentRootPath;

                var clientCertificatePath = physicalWebRootPath + "/free.connectsys.client.certificate.pfx";
                var databaseName = "smartbudget";
                var databaseUrl = Configuration.GetConnectionString("ConexaoRavenDB");

                //StreamWriter valor = new StreamWriter("C:\\Inetpub\\wwwroot\\teste.txt");

                //valor.Write(clientCertificatePath);
                //valor.Close();

                // Load certificate
                var clientCertificate = new X509Certificate2(clientCertificatePath);

                var store = new DocumentStore
                {
                    Certificate = clientCertificate,
                    Database = databaseName,
                    Urls = new[] { databaseUrl },
                    Conventions =
                    {
                        IdentityPartsSeparator = "-"
                    }
                };
                store.Initialize();
                return store;   
                
                
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors(builder =>
            {
                builder.AllowAnyOrigin();
                builder.AllowCredentials();
                builder.AllowAnyMethod();
                builder.AllowAnyHeader();
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "api",
                    template: "api/{controller}/{action}/{id?}"
                    );

                routes.MapRoute(
                    name: "defaultmvc",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
