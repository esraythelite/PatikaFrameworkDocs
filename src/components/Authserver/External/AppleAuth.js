import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../Highlighter'
import ImageItem from '../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Scope Enum',
    language: 'csharp',
    item: `namespace Patika.Framework.Shared.Authentication.Facebook.Enums
  {
    [Flags]
    public enum ScopeEnum
    {
      Email = 1,
      Profile = 2
    }
  }`,
    descriptions: [

    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'Configuration Model',
    language: 'csharp',
    item: `using Patika.Framework.Shared.Authentication.Facebook.Enums;
    using Patika.Framework.Shared.Extensions;
    
    namespace Patika.Framework.Shared.Authentication.Facebook.Models
    {
        public class Configuration
        {
            public string ClientId { get; set; } = string.Empty;
            public string AppSecret { get; set; } = string.Empty;
            public ScopeEnum Scopes { get; set; } 
            public string ScopesString
            {
                get
                {
                    return Scopes.ToString();
                }
                set
                {
                    var flags = value.StringToEnumFlags<ScopeEnum>(',');
                    Scopes |= flags;
                }
            }
        }
    }`,
    descriptions: [
      'You have configure your app on Apple developer console for the config.',
      'StringToEnumFlags is an extension converts strings joined with a delimeter to flag enums.',
    ],
  },
  {
    order: 3,
    type: 'image',
    title: 'Apple Auth Provider',
    language: 'csharp',
    item: {
      img: '/images/AppleAuthProviderLook.png',
      title: 'Apple Auth Provider',
      subtitle: 'Project View',
    },
    descriptions: [

    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'Consts',
    language: 'csharp',
    item: `namespace Patika.Framework.Identity.AppleAuthProvider
    {
        public static class Consts
        {
            public static readonly List<string> DefaultScopes = new()
            {
                "email",
                "name",
                "openId",
            };
        }
    }`,
    descriptions: [
      'Defaults Scopes are added automatically to Apple scopes. For any scope other than these, you have to add it to the configuration.',
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'ClientSecret Generation',
    language: 'csharp',
    item: `namespace Patika.Framework.Identity.AppleAuthProvider
    {
        public static class ClientSecretGenerator
        {
            private const string Audience = "https://appleid.apple.com";
    
            public static string GenerateClientSecret(this Configuration configuration)
            {
                var now = DateTime.UtcNow;
                var ecdsa = ECDsa.Create();
                ecdsa?.ImportPkcs8PrivateKey(Convert.FromBase64String(configuration.PrivateKey), out _);
    
                var handler = new JsonWebTokenHandler();
    
                return handler.CreateToken(new SecurityTokenDescriptor
                {
                    Issuer = configuration.TeamId,
                    Audience = Audience,
                    Claims = new Dictionary<string, object> { { "sub", configuration.ClientId } },
                    s// expiry can be a maximum of 6 months - generate one per request or re-use until expiration
                    Expires = now.AddMinutes(245), 
                    IssuedAt = now,
                    NotBefore = now,
                    SigningCredentials = new SigningCredentials
                    (
                        new ECDsaSecurityKey(ecdsa)
                        {
                            KeyId = configuration.KeyId
                        },
                        SecurityAlgorithms.EcdsaSha256
                    )
                });
            }
        }
    }`,
    descriptions: [
      'Apple required ClientSecret as token. This extension is written for this purpose!',
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'Adding Apple Auth',
    language: 'csharp',
    item: `namespace Patika.Framework.Identity.AppleAuthProvider
    {
        public static class AppleAuthProviderExtension
        {
            public static AuthenticationBuilder AddAppleAuthentication(
                this AuthenticationBuilder builder, Configuration configuration)
            {
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
            }
    
            private static List<string> GetScopes(Configuration configuration)
            {
                List<string> scopes = Consts.DefaultScopes;
    
                if ((configuration.Scopes & ScopeEnum.Email) == ScopeEnum.Email)
                {
                    if (!scopes.Any(s => s == "email"))
                        scopes.Add("email");
                }
    
                if ((configuration.Scopes & ScopeEnum.Name) == ScopeEnum.Name)
                {
                    if (!scopes.Any(s => s == "name"))
                        scopes.Add("name");
                }
    
                if ((configuration.Scopes & ScopeEnum.OpenId) == ScopeEnum.OpenId)
                {
                    if (!scopes.Any(s => s == "openId"))
                        scopes.Add("openId");
                }
    
                return scopes;
            }  
        }
    }`,
    descriptions: [
      'GetScopes adds additional scopes to default scopes and returns them',
      'ClientSecret generated.',
      'AddApple required this nuget package: AspNet.Security.OAuth.Apple'

    ],

  },
  {
    order: 7,
    type: 'code',
    title: 'Authentication Config',
    language: 'csharp',
    item: `namespace Patika.Framework.Shared.Authentication
    {
        public class Configuration
        {
            public Apple.Models.Configuration? AppleAuthConfiguration { get; set; }
            public Facebook.Models.Configuration? FacebookAuthConfiguration { get; set; }
            public Google.Models.Configuration? GoogleAuthConfiguration { get; set; }
            public Jwt.Models.Configuration JwtAuthConfiguration { get; set; } = new();
            public Okta.Models.Configuration? OktaAuthConfiguration { get; set; }
        }
    }`,
    descriptions: [
      'All properties are nullable except JwtAuthConfiguration. Because it is required!',
    ],

  },
  {
    order: 8,
    type: 'code',
    title: 'Adding Auth Server Authentications',
    language: 'csharp',
    item: `public static AuthenticationBuilder AddAuthServerAuthentications(
      this IServiceCollection services, Configuration configuration)
    {
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
      'All supported external auth providers will be add here, if configured!',
      'JwtAuthConfiguration is required, must be configured!', 
      'This extension method is belong to Authserver.Program.cs or Authserver.Startup.cs. Do not use client web app!. ',
    ],

  },
  {
    order: 8,
    type: 'code',
    title: 'Adding Client Server Authentications',
    language: 'csharp',
    item: `public static AuthenticationBuilder AddClientServerAuthentications(
      this IServiceCollection services, Configuration configuration)
    {
        var auth = services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        });

        auth.AddJwtAuthentication(configuration.JwtAuthConfiguration);

        return auth;
    }`,
    descriptions: [
      'AddJwtAuthentication is enough for client web apps',
      'JwtAuthConfiguration is required, must be configured!',   ],

  }
]

const AppleAuth = () => {


  return (

    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Auth with Apple Account</Typography>
      {contents.sort((a, b) => (a.order - b.order)).map((content) => {
        return (
          content.type === 'code' ? <>
            <Highlighter key={content.order} title={content.title} descriptions={content.descriptions} code={content.item} language={content.language} />
          </>
            :
            <>  <ImageItem key={content.order} item={content.item}></ImageItem></>
        )
      })}
    </Stack>

  )
}

export default AppleAuth