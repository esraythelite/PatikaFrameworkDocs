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
                AddConfiguration(services, configuration);
    
                var auth = services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                });
    
                auth.AddJwtAuthentication(configuration.JwtAuthConfiguration);
    
                AddExternalAuthentications(configuration, auth);
    
                return auth;
            }`,
    descriptions: [
        "Adds Jwt Authentication ",
        "Adds External Authentications if "
       ],
  },
  {
    order: 2,
    type: 'code',
    title: 'AddConfiguration',
    language: 'csharp',
    startingLineNumber: 34,
    item: `
          private static void AddConfiguration(IServiceCollection services, Configuration configuration)
          {
              services.AddSingleton(configuration);
          }`,
    descriptions: [
       ],
  } ,
  {
    order: 3,
    type: 'code',
    title: 'AddExternalAuthentications',
    language: 'csharp',
    startingLineNumber: 34,
    item: ` 
            private static void AddExternalAuthentications(
                Configuration configuration, 
                AuthenticationBuilder auth)
            {
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
            }
        }
    }`,
    descriptions: [
        "Add configured external authentications"
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