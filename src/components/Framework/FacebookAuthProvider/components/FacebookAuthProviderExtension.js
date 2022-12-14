import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AddFacebookAuthentication',
    language: 'csharp',
    startingLineNumber: 6,
    item: `
    using FacebookAuthProviderConsts = Patika.Framework.Identity.FacebookAuthProvider.Consts.Consts;
    
    namespace Patika.Framework.Identity.FacebookAuthProvider.Extensions
    {
        public static class FacebookAuthProviderExtension
        {
            public static AuthenticationBuilder AddFacebookAuthentication(this AuthenticationBuilder builder, Configuration configuration)
            {    
                AddConfiguration(builder.Services, configuration);

                ValidateConfiguration(builder);
    
                var scopes = GetScopes(configuration);
    
                builder.AddFacebook(options =>
                {
                    options.ClientId = configuration.ClientId;
                    options.AppSecret = configuration.AppSecret;
                    scopes.ForEach(scope =>
                    {
                        options.Scope.Add(scope);
                    });
                });
                return builder;
            } `,
    descriptions: [
      "Adds facebook authentication using configuration",
      "Adds configuration dependency injection"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'AddConfiguration',
    language: 'csharp',
    startingLineNumber: 32,
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
    title: 'ValidateConfiguration',
    language: 'csharp',
    startingLineNumber: 39,
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
    order: 4,
    type: 'code',
    title: 'GetScopes',
    language: 'csharp',
    startingLineNumber: 44,
    item: `
          private static List<string> GetScopes(Configuration configuration)
          {
              List<string> scopes = FacebookAuthProviderConsts.DefaultScopes;

              if ((configuration.Scopes & ScopeEnum.Email) == ScopeEnum.Email)
              {
                  if (!scopes.Any(s => s.ToLowerInvariant() == "email"))
                      scopes.Add("email");
              }
              if ((configuration.Scopes & ScopeEnum.Profile) == ScopeEnum.Profile)
              {
                  if (!scopes.Any(s => s.ToLowerInvariant() == "public_profile"))
                      scopes.Add("public_profile");
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

const header = 'Patika.Framework.Identity.FacebookAuthProvider.Extensions';
const FacebookAuthProviderExtension = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}
export default FacebookAuthProviderExtension