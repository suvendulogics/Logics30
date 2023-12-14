//using Logics.API.DTOs.Account;
using Logics.API.Exceptions;
using Logics.API.Interfaces;
using Logics.API.Application.Wrappers;
using Logics.API.Domain.Helpers;
using Logics.API.Domain.Settings;
//using Logics.API.Infrastructure.Application.AmazonS3;
using Logics.API.Infrastructure.Application.Context;
//using Logics.API.Infrastructure.Application.Email;
//using Logics.API.Infrastructure.Application.Helpers;
//using Logics.API.Infrastructure.Application.Models;
using Logics.API.Infrastructure.Application.Services;
//using Infrastructure.Identity.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
//using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Logics.API.Infrastructure.Application
{
    public static class ServiceExtensions
    {
        public static void AddApplicationInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            //Register dapper in scope  
            services.AddScoped<IDapper, Context.Dapper>();
            services.AddScoped<IClientService, ClientService>();
            services.AddTransient<IClientService, ClientService>();
			services.Configure<AppSettings>(configuration.GetSection("ConnectionStrings"));
			//var _tokenValidationPerameters= new TokenValidationParameters
			//{
			//    ValidateIssuerSigningKey = true,
			//    ValidateIssuer = true,
			//    ValidateAudience = true,
			//    ValidateLifetime = true,
			//    ClockSkew = TimeSpan.Zero,
			//    ValidIssuer = configuration["JWTSettings:Issuer"],
			//    ValidAudience = configuration["JWTSettings:Audience"],
			//    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWTSettings:Key"])),

			//};

			// services.AddSingleton(_tokenValidationPerameters);
			//services.AddAuthentication(options =>
			//{
			//    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
			//    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
			//})
			//    .AddJwtBearer(o =>
			//    {
			//        o.RequireHttpsMetadata = false;
			//        o.SaveToken = false;
			//        o.TokenValidationParameters = _tokenValidationPerameters;
			//        o.Events = new JwtBearerEvents()
			//        {
			//            OnAuthenticationFailed = c =>
			//            {
			//                c.NoResult();
			//                c.Response.ContentType = "application/json";
			//                c.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
			//                var result = JsonConvert.SerializeObject(new Response<string>("Token Expired"));
			//                 return c.Response.WriteAsync(result);
			//                //return Task.CompletedTask;
			//                //if (c.Exception.GetType() == typeof(SecurityTokenExpiredException))
			//                //{
			//                //    c.Response.Headers.Add("IS-TOKEN-EXPIRED", "true");
			//                //}
			//                //return Task.CompletedTask;
			//            },
			//            //OnChallenge = context =>
			//            //{
			//            //    try
			//            //    {
			//            //        context.HandleResponse();
			//            //        context.Response.StatusCode = 401;
			//            //        context.Response.ContentType = "application/json";
			//            //        var result = JsonConvert.SerializeObject(new Response<string>("You are not Authorized"));
			//            //        return context.Response.WriteAsync(result);
			//            //    }
			//            //    catch (Exception)
			//            //    {
			//            //        var result = JsonConvert.SerializeObject(new Response<string>("You are not Authorized"));
			//            //        return context.Response.WriteAsync(result);
			//            //    }
			//            //},
			//            //OnForbidden = context =>
			//            //{
			//            //    context.Response.StatusCode = 403;
			//            //    context.Response.ContentType = "application/json";
			//            //    var result = JsonConvert.SerializeObject(new Response<string>("You are not authorized to access this resource"));
			//            //    return context.Response.WriteAsync(result);
			//            //},
			//        };
			//    });
		}
    }
}
