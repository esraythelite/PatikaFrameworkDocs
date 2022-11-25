import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AddGoogleAuthentication',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    using GoogleAuthProviderConsts =Patika.Framework.Identity.GoogleAuthProvider.Consts.Consts;

    namespace Patika.Framework.Identity.GoogleAuthProvider.Extensions
    {
        public static class GoogleAuthProviderExtension
        {
            public static AuthenticationBuilder AddGoogleAuthentication(this AuthenticationBuilder builder, Configuration configuration)
            {
                configuration.Validate();
    
                AddConfiguration(builder.Services, configuration);
    
                var scopes = GetScopes(configuration);
                builder.AddGoogle(options =>
                {
                    options.ClientId = configuration.ClientId;
                    options.ClientSecret = configuration.ClientSecret;
                    scopes.ForEach(scope =>
                    {
                        options.Scope.Add(scope);
                    });
                });
                return builder;
            }`,
    descriptions: [
      "Adds google authentication using configuration",
      "Adds configuration dependency injection"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'AddConfiguration',
    language: 'csharp',
    startingLineNumber: 4,
    item: `  
          private static void AddConfiguration(IServiceCollection services, Configuration configuration)
          {
              services.AddSingleton(configuration);
          }`,
    descriptions: [
      "Adds configuration dependency injection"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'GetScopes',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
          private static List<string> GetScopes(Configuration configuration)
          {
              List<string> scopes = GoogleAuthProviderConsts.DefaultScopes;

              if ((configuration.Scopes & ScopeEnum.Email) == ScopeEnum.Email)
              {
                  if (!scopes.Any(s => s.ToLowerInvariant() == "email"))
                      scopes.Add("email");
              }

              if ((configuration.Scopes & ScopeEnum.Profile) == ScopeEnum.Profile)
              {
                  if (!scopes.Any(s => s.ToLowerInvariant() == GoogleAuthProviderConsts.ProfileScope.ToLowerInvariant()))
                      scopes.Add(GoogleAuthProviderConsts.ProfileScope);
              }

              if ((configuration.Scopes & ScopeEnum.OpenId) == ScopeEnum.OpenId)
              {
                  if (!scopes.Any(s => s.ToLowerInvariant() == "openid"))
                      scopes.Add("openid");
              }

              return scopes;
          }
       }
    }`, 
    descriptions: [
      "Adds other scopes to default scopes and returns the extended scope list"
    ],
  }
]

const header = 'Patika.Framework.Identity.GoogleAuthProvider.Extensions';
const GoogleAuthProviderExtension = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}
export default GoogleAuthProviderExtension