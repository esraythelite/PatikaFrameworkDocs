import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AddAppleAuthentication',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    using AppleAuthProviderConsts = Patika.Framework.Identity.AppleAuthProvider.Consts.Consts;
    
    namespace Patika.Framework.Identity.AppleAuthProvider.Extensions
    {
        public static class AppleAuthProviderExtension
        {
            public static AuthenticationBuilder AddAppleAuthentication(
                this AuthenticationBuilder builder, Configuration configuration)
            {    
                AddConfiguration(builder.Services, configuration);
    
                var scopes = GetScopes(configuration);
                var clientSecret = configuration.GenerateClientSecret();
        
                builder.AddApple(options =>
                {
                    options.KeyId = configuration.KeyId;
                    options.ClientId = configuration.ClientId;
                    options.TeamId = configuration.TeamId;
                    options.CallbackPath = configuration.CallbackPath;
                    options.ClientSecret = clientSecret;
                    options.Scope.Clear();
                    scopes.ForEach(scope =>
                    {
                        options.Scope.Add(scope);
                    });
                });
                return builder;
            } `,
    descriptions: [
      "Adds apple authentication using configuration",
      "Adds configuration dependency injection"
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
      "Adds configuration dependency injection"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'GetScopes',
    language: 'csharp',
    startingLineNumber: 39,
    item: `
          private static List<string> GetScopes(Configuration configuration)
          {
              List<string> scopes = AppleAuthProviderConsts.DefaultScopes;

              if ((configuration.Scopes & ScopeEnum.Email) == ScopeEnum.Email)
              {
                  if (!scopes.Any(s => s.ToLowerInvariant() == "email"))
                      scopes.Add("email");
              }

              if ((configuration.Scopes & ScopeEnum.Name) == ScopeEnum.Name)
              {
                  if (!scopes.Any(s => s.ToLowerInvariant() == "name"))
                      scopes.Add("name");
              }

              if ((configuration.Scopes & ScopeEnum.OpenId) == ScopeEnum.OpenId)
              {
                  if (!scopes.Any(s => s.ToLowerInvariant() == "openId"))
                      scopes.Add("openId");
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

const header = 'Patika.Framework.Identity.AppleAuthProvider.Extensions';
const AppleAuthProviderExtension = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}
export default AppleAuthProviderExtension