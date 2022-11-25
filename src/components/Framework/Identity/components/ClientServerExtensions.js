import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AddClientServerAuthentications',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    using Configuration = Patika.Framework.Identity.Models.Configuration;

    namespace Patika.Framework.Identity.Extensions
    {
        public static class ClientServerExtensions
        {
            public static AuthenticationBuilder AddClientServerAuthentications(
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
    startingLineNumber: 4,
    item: `
          private static void AddConfiguration(IServiceCollection services, Configuration configuration)
          {
              services.AddSingleton(configuration);
          }
      }
    }`,
    descriptions: [
    ],
  }
]

const header = 'Patika.Framework.Identity.Extensions';
const ClientServerExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}
export default ClientServerExtensions