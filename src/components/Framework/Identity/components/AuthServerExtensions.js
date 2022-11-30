import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AddAuthServerAuthentications',
    language: 'csharp',
    startingLineNumber: 9,
    item: `
    using Configuration = Patika.Framework.Identity.Models.Configuration;
    
    namespace Patika.Framework.Identity.Extensions
    {
        public static class AuthServerExtensions
        {
            public static AuthenticationBuilder AddAuthServerAuthentications(
                this IServiceCollection services, Configuration configuration)
            {            
                services.AddIdentityServices(configuration); 
    
                var auth = services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                });
    
                auth.AddJwtAuthentication(configuration.JwtAuthConfiguration);
    
                if (configuration.GoogleAuthConfiguration is not null)
                {
                    auth.AddGoogleAuthentication(configuration.GoogleAuthConfiguration);
                }
    
                if (configuration.FacebookAuthConfiguration is not null)
                {
                    auth.AddFacebookAuthentication(configuration.FacebookAuthConfiguration);
                }
    
                if (configuration.OktaAuthConfiguration is not null)
                {
                    auth.AddOktaAuthentication(configuration.OktaAuthConfiguration);
                }
    
                if (configuration.AppleAuthConfiguration is not null)
                {
                    auth.AddAppleAuthentication(configuration.AppleAuthConfiguration);
                }
    
                return auth;
            }`,
    descriptions: [
       ],
  },
  {
    order: 2,
    type: 'code',
    title: 'AddConfiguration',
    language: 'csharp',
    startingLineNumber: 60,
    item: `
          private static void AddConfiguration(IServiceCollection services, Configuration configuration)
          {
              services.AddSingleton(configuration);
          }`,
    descriptions: [
       ],
  } ,
  {
    order: 2,
    type: 'code',
    title: 'AddServices',
    language: 'csharp',
    startingLineNumber: 65,
    item: ` 
          private static void AddServices(IServiceCollection services)
          {
              services.AddSingleton<IEmailSender, NullEmailSender>();
              services.AddScoped<IIdentityService, IdentityService>();
              services.AddScoped<IExternalIdentityService, ExternalIdentityService>();
              services.AddScoped<ITokenGenerator, TokenGenerator>();

              services.AddScoped<IWrongPasswordAttemptRepository, WrongPasswordAttemptRepository>();
              services.AddScoped<IUserRefreshTokenRepository, UserRefreshTokenRepository>();
              services.AddScoped<IUserTenantRepository, UserTenantRepository>();
          }
       }
    }`,
    descriptions: [
       ],
  } 
]

const header = 'Patika.Framework.Identity.Extensions';
const AuthServerExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}
export default AuthServerExtensions