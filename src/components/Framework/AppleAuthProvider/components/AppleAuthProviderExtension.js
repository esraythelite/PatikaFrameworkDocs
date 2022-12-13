import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AddAppleAuthentication',
    language: 'csharp',
    startingLineNumber: 6,
    item: `
    using AppleAuthProviderConsts = Patika.Framework.Identity.AppleAuthProvider.Consts.Consts;
    
    namespace Patika.Framework.Identity.AppleAuthProvider.Extensions
    {
        public static AuthenticationBuilder AddAppleAuthentication(
            this AuthenticationBuilder builder, Configuration configuration)
        {
            AddConfiguration(builder.Services, configuration);
            ValidateConfiguration(builder);
            var scopes = GetScopes(configuration); 

            builder.AddApple(options =>
            {
                options.KeyId = configuration.KeyId;
                options.ClientId = configuration.ClientId;
                options.TeamId = configuration.TeamId;
                options.CallbackPath = configuration.CallbackPath;
                options.ClientSecret = configuration.GenerateClientSecret();
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
    order: 2,
    type: 'code',
    title: 'ValidateConfiguration',
    language: 'csharp',
    startingLineNumber: 40,
    item: `  
          private static void ValidateConfiguration(AuthenticationBuilder builder)
          {
              var configuration = builder.Services.BuildServiceProvider().GetService<Configuration>() ?? throw new ServiceNotInjectedException(typeof(Configuration).FullName ?? "");
              var validator = builder.Services.BuildServiceProvider().GetService<IConfigurationValidator>() ?? throw new ServiceNotInjectedException(typeof(IConfigurationValidator).FullName ?? "");
              validator.ValidateAndThrowAsync(configuration).Wait();
          }`,
    descriptions: [
      "Validates injected configuration"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'GetScopes',
    language: 'csharp',
    startingLineNumber: 47,
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