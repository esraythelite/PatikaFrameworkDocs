import React from 'react' 
import DocPaper from '../../../DocPaper';
const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ServiceExtensions',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Identity.JwtToken.Extensions
    {
        public static class ServiceExtensions
        {
            public static IServiceCollection AddJwtTokenServices(this IServiceCollection services, Configuration configuration)
            {
                AddConfiguration(services, configuration);
                AddServices(services);
                return services;
            }
            private static void AddConfiguration(IServiceCollection services, Configuration configuration)
            {
                services.AddSingleton(configuration);
            }
    
            private static void AddServices(IServiceCollection services)
            {
                services.AddScoped<ITokenGenerator, TokenGenerator>();
                services.AddScoped<ISimpleHash, Sha256Hasher>();
            }
        }
    }`,
    descriptions: [
      "AddJwtTokenServices extensions inject all required services to use this package.",  
      "Used by JwtAuthProvider (See extension of it)"
    ],
  } 
]

const header = 'Patika.Framework.Identity.JwtToken.Extensions';
const ServiceExtensions = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}  

export default ServiceExtensions