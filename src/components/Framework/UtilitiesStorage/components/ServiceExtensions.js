import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ServiceExtensions',
    language: 'csharp',
    startingLineNumber: 9,
    item: `
    namespace Patika.Framework.Utilities.Storage.Extensions
    {
        public static class ServiceExtensions
        {
            public static IServiceCollection UseAzureBlobStorage(this IServiceCollection services, AzureConfiguration configuration)
            {
                services.AddSingleton(configuration);
                services.AddScoped<IAzureStorageService, AzureStorageService>();
                AddValidators(services);
                return services;
            }
    
            public static IServiceCollection UseAmazonS3Buckets(this IServiceCollection services, IConfiguration configuration)
            {
                services.AddDefaultAWSOptions(configuration.GetAWSOptions());
                services.AddAWSService<IAmazonS3>();
                services.AddScoped<IAmazonStorageService, AmazonStorageService>();
                AddValidators(services);
                return services;
            }
    
            private static void AddValidators(IServiceCollection services)
            {
                services.AddScoped<IFormFileUploadInputDTOValidator, FormFileUploadInputDTOValidator>();
                services.AddScoped<IBase64FileUploadInputDTOValidator, Base64FileUploadInputDTOValidator>();
            }
    
        }
    }`,
    descriptions: [
      "Use UseAzureBlobStorage on Startup to inject all services for upload files to Azure blob storage",
      "Use UseAmazonS3Buckets on Startup to inject all services for upload files to Amazon S3 containers",
      "For UseAzureBlobStorage, a configuration class is requiered.",
      "Amazon inject it's configuration automaticly by 'services.AddDefaultAWSOptions(configuration.GetAWSOptions())' "
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