import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'JwtAuthProviderExtension',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    namespace Patika.Framework.Identity.JwtAuthProvider.Extensions
    {
        public static class JwtAuthProviderExtension
        {
            public static AuthenticationBuilder AddJwtAuthentication(this AuthenticationBuilder builder, Configuration configuration)
            {
                configuration.Validate();
    
                AddConfiguration(builder.Services, configuration);
    
                builder.AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = configuration.Jwt.RequireHttpsMetadata;
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = configuration.Jwt.ValidateIssuer,
                        ValidIssuer = configuration.Jwt.ValidIssuer,
                        ValidateAudience = configuration.Jwt.ValidateAudience,
                        ValidAudience = configuration.Jwt.ValidAudience,
                        ValidateIssuerSigningKey = configuration.Jwt.ValidateIssuerSigningKey,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.Jwt.Secret)),
                        ValidateLifetime = configuration.Jwt.ValidateLifetime,
                        ClockSkew = TimeSpan.FromMinutes(2)
                    };
                });
    
                return builder;
            }
    
            private static void AddConfiguration(IServiceCollection services, Configuration configuration)
            {
                services.AddSingleton(configuration);
            }
        }
    }`,
    descriptions: [
      ""
    ],
  } ,
  {
    order: 2,
    type: 'code',
    title: 'Example',
    language: 'csharp',
    startingLineNumber: 4,
    showLineNumbers : false,
    item: `
    var auth = services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    });

    auth.AddJwtAuthentication(configuration.JwtAuthConfiguration);
     `,
    descriptions: [
      "You can add Jwt authentication like this.", 
    ],
  } 
]

const header = 'Patika.Framework.Identity.JwtAuthProvider.Extensions';
const JwtAuthProviderExtensions = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 

export default JwtAuthProviderExtensions