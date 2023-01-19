import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AmazonStorageService',
    language: 'csharp',
    startingLineNumber: 9,
    item: `
    namespace Patika.Framework.Utilities.Storage.Services
    {
        public class AmazonStorageService : StorageService, IAmazonStorageService
        {
            private IAmazonS3 AmazonS3Client { get; }
            public AmazonStorageService(IServiceProvider serviceProvider) : base(serviceProvider)
            {
                AmazonS3Client = GetService<IAmazonS3>();
            }`,
    descriptions: [
      "Constructor and props",
      "Upload files to Amazon S3 buckets"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'UploadFormFileAsync',
    language: 'csharp',
    startingLineNumber: 19,
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
  }  ,
  {
    order: 3,
    type: 'code',
    title: 'UploadBase64FileAsync',
    language: 'csharp',
    startingLineNumber: 32,
    item: ` 
            public async Task<FileUploadOutputDTO> UploadBase64FileAsync(Base64FileUploadInputDTO input)
            {
                await Base64FileUploadInputDTOValidator.ValidateAndThrowAsync(input);
                try
                {
                    if (!await AmazonS3Client.DoesS3BucketExistAsync(input.StorageName)) throw new BucketNotExistsException();

                    string fileName = await GetFileNameAsync(input);

                    using var stream = input.FileAsBase64String.ConvertBase64ToMemoryStream();

                    var request = new PutObjectRequest
                    {
                        BucketName = input.StorageName,
                        Key = fileName,
                        InputStream = stream,
                        ContentType = input.ContentType,
                    };

                    var response = await AmazonS3Client.PutObjectAsync(request);

                    if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
                    {
                        var link = await GetUploadedFileUrlAsync(input.StorageName, fileName);

                        return new FileUploadOutputDTO
                        {
                            FileName = fileName,
                            FileUrl = link,
                            Storage = StorageEnums.AmazonS3,
                            StorageName = input.StorageName,
                            LogId = input.LogId
                        };
                    }
                    else
                    {
                        await LogWriter.AddCodeMileStoneLogAsync(input, "PutObjectResponse", GetType(), output: new { response.HttpStatusCode });
                        throw new FileUploadFailedException();
                    }
                }
                catch (BucketNotExistsException)
                {
                    throw;
                }
                catch (FileUploadFailedException)
                {
                    throw;
                }
                catch (AmazonS3Exception ex)
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
    startingLineNumber: 92,
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
  }   ,
  {
    order: 5,
    type: 'code',
    title: 'IsFileExistsAsync',
    language: 'csharp',
    startingLineNumber: 92,
    item: ` 
          public async Task<bool> IsFileExistsAsync(CheckFileExistanceInputDTO input)
          {
              try
              {
                  var response = await AmazonS3Client.GetObjectAsync(new GetObjectRequest
                  {
                      BucketName = input.StorageName,
                      Key = input.FileName,
                  });
                  return true;
              }
              catch (AmazonS3Exception ex)
              {
                  if (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
                      return false;
                  await LogWriter.AddExceptionLogAsync(input, ex, GetType());
                  throw;
              }
          }`,
    descriptions: [ 
      "Checks whether file name is exists or not", 
    ],
  }    ,
  {
    order: 5,
    type: 'code',
    title: 'GetUploadedFileUrlAsync',
    language: 'csharp',
    startingLineNumber: 131,
    item: `  
          public async Task<string> GetUploadedFileUrlAsync(string bucketName, string fileName)
          {
              var locationResponse = await AmazonS3Client.GetBucketLocationAsync(bucketName);
              var link = $"https://{bucketName}.s3.{locationResponse.Location.Value}.amazonaws.com/{fileName}";
              return link;
          }`,
    descriptions: [ 
      "Generates and returns the link for uploaded file", 
    ],
  }  
]

const header = 'Patika.Framework.Utilities.Storage.Services';
const AmazonStorageService = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default AmazonStorageService