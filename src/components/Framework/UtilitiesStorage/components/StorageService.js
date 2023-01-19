import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'StorageService',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    namespace Patika.Framework.Utilities.Storage.Services
    {
        public class StorageService : CoreService
        {
            public ILogWriter LogWriter { get; }
            internal IFormFileUploadInputDTOValidator FormFileUploadInputDTOValidator { get; }
            internal IBase64FileUploadInputDTOValidator Base64FileUploadInputDTOValidator { get; }
    
            public StorageService(IServiceProvider serviceProvider) : base(serviceProvider)
            {
                LogWriter = GetService<ILogWriter>();
                FormFileUploadInputDTOValidator = GetService<IFormFileUploadInputDTOValidator>();
                Base64FileUploadInputDTOValidator = GetService<IBase64FileUploadInputDTOValidator>();
            }`,
    descriptions: [
      "Constructor and props",
      "This service is the base service for storage services (AmazonStorageService, AzureStorageService)"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'GenerateUniqueFileName',
    language: 'csharp',
    startingLineNumber: 20,
    item: ` 
          public string GenerateUniqueFileName(string fileNameWithExtension)
          {
              var fileNameParts = fileNameWithExtension.Split('.');
              if (fileNameParts.Length != 2)
              {
                  throw new InvalidFileNameException();
              }
              var fileName = fileNameParts[0];
              var fileExtension = fileNameParts[1];
              return string.Concat(fileName, "_", Guid.NewGuid(), ".", fileExtension);
          }
      }
    }`,
    descriptions: [ 
      "If any files with this name is already exists, this method generates a guid ve add the guid started with '_' to the fileName right before the file extension to make new file name unique." 
    ],
  }  
]

const header = 'Patika.Framework.Utilities.Storage.Services';
const StorageService = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default StorageService