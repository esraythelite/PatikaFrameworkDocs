import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AzureStorageService',
    language: 'csharp',
    startingLineNumber: 10,
    item: `
    namespace Patika.Framework.Utilities.Storage.Services
    {
        public class AzureStorageService : StorageService, IAzureStorageService
        {
            BlobServiceClient BlobServiceClient { get; }
            AzureConfiguration AzureConfiguration { get; }
    
            public AzureStorageService(IServiceProvider serviceProvider) : base(serviceProvider)
            {
                AzureConfiguration = GetService<AzureConfiguration>();
                BlobServiceClient = new BlobServiceClient(AzureConfiguration.ConnectionString);
            }`,
    descriptions: [
      "Constructor and props",
      "Upload files to Azure Blob Storages"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'GenerateUniqueFileName',
    language: 'csharp',
    startingLineNumber: 23,
    item: `  
            public async Task<FileUploadOutputDTO> UploadFormFileAsync(FormFileUploadInputDTO input)
            {
                await FormFileUploadInputDTOValidator.ValidateAndThrowAsync(input);
                var base64FileUploadInput = new Base64FileUploadInputDTO
                {
                    ContentType = input.File?.ContentType ?? "",
                    FileAsBase64String = input.File.ConvertFormFileToBase64File(),
                    FileNameWithExtension = input.File?.FileName ?? "",
                    StorageName = input.StorageName
                };
                return await UploadBase64FileAsync(base64FileUploadInput);
            }`,
    descriptions: [ 
      "Uploads formFiles",
      "Validate input first",
      "Convert FormFileUploadInputDTO to Base64FileUploadInputDTO then calls UploadBase64FileAsync to upload files." 
    ],
  } ,
  {
    order: 3,
    type: 'code',
    title: 'UploadBase64FileAsync',
    language: 'csharp',
    startingLineNumber: 36,
    item: `  
            public async Task<FileUploadOutputDTO> UploadBase64FileAsync(Base64FileUploadInputDTO input)
            {
                await Base64FileUploadInputDTOValidator.ValidateAndThrowAsync(input);
                try
                {
                    string fileName = await GetFileNameAsync(input);

                    var blobClient = GetBlobClient(fileName, input.StorageName);
                    using var stream = input.FileAsBase64String.ConvertBase64ToMemoryStream();

                    await blobClient.UploadAsync(stream);
                    var link = blobClient.Uri.AbsoluteUri;
                    return new FileUploadOutputDTO
                    {
                        FileName = fileName,
                        FileUrl = link,
                        Storage = StorageEnums.Azure,
                        StorageName = input.StorageName,
                        LogId = input.LogId
                    };
                }
                catch (ContainerNotExistsException)
                {
                    throw;
                }
                catch (RequestFailedException ex)
                {
                    await LogWriter.AddExceptionLogAsync(input, ex, GetType());
                    throw new FileUploadFailedException();
                }
                catch (Exception ex)
                {
                    await LogWriter.AddExceptionLogAsync(input, ex, GetType());
                    throw new FileUploadFailedException();
                }
            }`,
    descriptions: [ 
      "Uploads base64string type files",
      "Validate input first",
      "Checks bucket existance" ,
      "Gets (new) filename",
      "Converts file to Memory stream, then uploads the stream to bucket",
      "If uplodad succeded return FileUploadOutputDTO as response, otherwise logs StatusCode then throws FileUploadFailedException",
    ],
  }   ,
  {
    order: 4,
    type: 'code',
    title: 'GetFileNameAsync',
    language: 'csharp',
    startingLineNumber: 73,
    item: `   
            private async Task<string> GetFileNameAsync(Base64FileUploadInputDTO input)
            {
                var fileName = input.FileNameWithExtension;
                var isExists = await IsFileExistsAsync(new CheckFileExistanceInputDTO
                {
                    FileName = fileName,
                    StorageName = input.StorageName,
                    LogId = input.LogId
                });
                if (isExists)
                {
                    fileName = GenerateUniqueFileName(fileName);
                }
                return fileName;
            }`,
    descriptions: [  
      "Checks the file name at cloud, if it exists then generate and returns new file name",
      "otherwise, returns the input file name", 
    ],
  }    ,
  {
    order: 5,
    type: 'code',
    title: 'IsFileExistsAsync',
    language: 'csharp',
    startingLineNumber: 89,
    item: `   
            public async Task<bool> IsFileExistsAsync(CheckFileExistanceInputDTO input)
            {
                if (string.IsNullOrEmpty(input.StorageName)) throw new StorageNameRequiredException();
                BlobClient blobClient = GetBlobClient(input.StorageName, input.FileName);

                return await blobClient.ExistsAsync();
            }`,
    descriptions: [ 
      "Checks whether file name is exists or not", 
    ],
  } ,
  {
    order: 6,
    type: 'code',
    title: 'GetBlobClient',
    language: 'csharp',
    startingLineNumber: 97,
    item: `     
          private BlobClient GetBlobClient(string containerName, string blobId)
          {
              return GetBlobContainerClient(containerName).GetBlobClient(blobId);
          }`,
    descriptions: [ 
        "Returns blob client for the file."
    ],
  },
  {
    order: 7,
    type: 'code',
    title: 'GetBlobContainerClient',
    language: 'csharp',
    startingLineNumber: 102,
    item: `    
          private BlobContainerClient GetBlobContainerClient(string containerName)
          {
              var container = BlobServiceClient.GetBlobContainerClient(containerName);
              return container.Exists() ? container : throw new ContainerNotExistsException();
          }
      }
    }`,
    descriptions: [ 
      "Returns blob client for the storage name (container name)."
    ],
  }
]

const header = 'Patika.Framework.Utilities.Storage.Services';
const AzureStorageService = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default AzureStorageService