using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using EasyPark.Repositories.Interfaces;
using EasyPark.Repositories;
using EasyPark.Services.Interfaces;
using EasyPark.Services;
using System.Reflection;
using EasyPark.Hubs;

namespace EasyPark
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddSingleton<IConfiguration>(Configuration);

            services.AddScoped(typeof(IDatabaseSettings<>), typeof(DatabaseSettings<>));
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IEstablishmentRepository, EstablishmentRepository>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IEstablishmentService, EstablishmentService>();

            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddSignalR();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .SetIsOriginAllowed(_ => true)
                    .AllowCredentials());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<RobotHub>("/robotHub");
            });
        }
    }
}
