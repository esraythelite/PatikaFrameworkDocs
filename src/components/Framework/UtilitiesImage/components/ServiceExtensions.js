import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ServiceExtensions',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    namespace Patika.Framework.Utilities.Image.Extensions
    {
        public static class ServiceExtensions
        {
            public static IServiceCollection AddImageUtitilies(this IServiceCollection services, Configuration configuration)
            {
                AddConfiguration(services, configuration);
                AddServices(services);
                return services;
            }
    
            private static void AddConfiguration(IServiceCollection services, Configuration configuration)
            {
                services.AddSingleton(configuration);
            }
    
            private static void AddServices(IServiceCollection services )
            {
                services.AddScoped<IImageResizer, ImageResizer>(); 
            }
        }
    }`,
    descriptions: [
      "Use services.AddImageUtitilies on Startup to inject all services in this package.",
    ],
  }
]

const header = 'Patika.Framework.Utilities.Image.Extensions';
const ServiceExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default ServiceExtensions