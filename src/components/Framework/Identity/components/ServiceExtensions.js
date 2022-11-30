import React from 'react'
import DocPaper from '../../../DocPaper';
  
const contents = [
    {
      order: 1,
      type: 'code',
      title: 'ServiceExtensions',
      language: 'csharp',
      startingLineNumber: 16,
      item: `
      namespace Patika.Framework.Identity.Extensions
      {
          internal static class ServiceExtensions
          {
              internal static IServiceCollection AddIdentityServices(this IServiceCollection services, Configuration configuration)
              {
                  AddConfiguration(services, configuration);
                  AddServices(services);
                  AddRepositories(services);
                  return services;
              }
      
              private static void AddConfiguration(IServiceCollection services, Configuration configuration)
              {
                  services.AddSingleton(configuration);
              }
      
              private static void AddServices(IServiceCollection services)
              {
                  services.AddSingleton<IEmailSender, NullEmailSender>();
                  services.AddScoped<IIdentityService, IdentityService>();
                  services.AddScoped<IExternalIdentityService, ExternalIdentityService>(); 
              }
              private static void AddRepositories(IServiceCollection services)
              { 
                  services.AddScoped<IWrongPasswordAttemptRepository, WrongPasswordAttemptRepository>();
                  services.AddScoped<IUserRefreshTokenRepository, UserRefreshTokenRepository>();
                  services.AddScoped<IUserTenantRepository, UserTenantRepository>();
              }
          }
      }`,
      descriptions: [
        "Use AddIdentityServices to inject all identity packages by single line of code :)",
        "AddConfiguration injects Configuration",
        "AddServices injects services",
        "AddRepositories inject repositories", 
         ],
    } 
  ]

const header = 'Patika.Framework.Identity.Extensions';
const ServiceExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}


export default ServiceExtensions