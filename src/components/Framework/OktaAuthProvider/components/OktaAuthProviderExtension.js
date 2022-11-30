import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AddOktaAuthentication',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    using OktaAuthProviderConsts = Patika.Framework.Identity.OktaAuthProvider.Consts.Consts;

    namespace Patika.Framework.Identity.OktaAuthProvider.Extensions
    {
        public static class OktaAuthProviderExtension
        {
            public static AuthenticationBuilder AddOktaAuthentication(this AuthenticationBuilder builder, Configuration configuration)
            {    
                AddConfiguration(builder.Services, configuration);
    
                var scopes = GetScopes(configuration);
                builder.AddOpenIdConnect(options =>
                {
                    options.ClientId = configuration.ClientId;
                    options.ClientSecret = configuration.ClientSecret;
                    options.CallbackPath = "/authorization-code/callback";
                    options.Authority = configuration.Issuer;
                    options.ResponseType = OpenIdConnectResponseType.Code;
                    options.SaveTokens = true;
                    scopes.ForEach(scope =>
                    {
                        options.Scope.Add(scope);
                    });
                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters.ValidateIssuer = false;
                    options.TokenValidationParameters.NameClaimType = "name";
                });
                return builder;
            }`,
    descriptions: [
      "Adds okta authentication using configuration",
      "Adds configuration dependency injection"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'AddConfiguration',
    language: 'csharp',
    startingLineNumber: 35,
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
    startingLineNumber: 40,
    item: `
          private static List<string> GetScopes(Configuration configuration)
          {
              List<string> scopes = OktaAuthProviderConsts.DefaultScopes;

              if ((configuration.Scopes & ScopeEnum.Email) == ScopeEnum.Email)
              {
                  if (!scopes.Any(s => s.ToLowerInvariant() == "email"))
                      scopes.Add("email");
              }

              if ((configuration.Scopes & ScopeEnum.Profile) == ScopeEnum.Profile)
              {
                  if (!scopes.Any(s => s.ToLowerInvariant() == "profile"))
                      scopes.Add("profile");
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

const header = 'Patika.Framework.Identity.OktaAuthProvider.Extensions';
const OktaAuthProviderExtension = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}
export default OktaAuthProviderExtension