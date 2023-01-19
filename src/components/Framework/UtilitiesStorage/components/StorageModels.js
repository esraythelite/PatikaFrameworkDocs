import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AzureConfiguration',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Utilities.Storage.Models
    {
        public class AzureConfiguration
        {
            public string ConnectionString { get; set; } = string.Empty;
        }
    }`,
    descriptions: [
      "Provides ConnectionString of Azure Blob Containers",
      "You have to inject this config on Startup.cs or Program.cs"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'FileUploadInputDTO',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Utilities.Storage.Models.DTOs
    {
        public class FileUploadInputDTO : DTO
        {
            public string StorageName { get; set; } = string.Empty;
        }
    }`,
    descriptions: [
      "Base input for file upload inputs.",
      "StorageName is BucketName on Amazon S3, ContainerName on Azure Blob Storages"
    ],
  } ,
  {
    order: 3,
    type: 'code',
    title: 'FormFileUploadInputDTO',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Utilities.Storage.Models.DTOs
    {
        public class FormFileUploadInputDTO : FileUploadInputDTO
        {
            public IFormFile? File { get; set; }
        }
    } `,
    descriptions: [
      "Helps you upload FormFile type files",
    ],
  } ,
  {
    order: 4,
    type: 'code',
    title: 'Base64FileUploadInputDTO',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Utilities.Storage.Models.DTOs
    {
        public class Base64FileUploadInputDTO : FileUploadInputDTO
        {
            public string FileAsBase64String { get; set; } = string.Empty;
            public string ContentType { get; set; } = string.Empty;
            public string FileNameWithExtension { get; set; } = string.Empty;
        }
    }`,
    descriptions: [
      "Helps you upload Base64String type files",
      "You must set ContentType and FileNameWithExtension properties too, to avoid validation exceptions."
    ],
  } ,
  {
    order: 5,
    type: 'code',
    title: 'CheckFileExistanceInputDTO',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Utilities.Storage.Models.DTOs
    {
        public class CheckFileExistanceInputDTO : DTO
        {
            public string FileName { get; set; } = string.Empty;
            public string StorageName { get; set; } = string.Empty; 
        }
    }`,
    descriptions: [
      "",
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'FileUploadOutputDTO',
    language: 'csharp', 
    item: `namespace Patika.Framework.Utilities.Storage.Models.DTOs
    {
        public class FileUploadOutputDTO : DTO
        {
            public string FileName { get; set; } = string.Empty;
            public string FileUrl { get; set; } = string.Empty;
            public string StorageName { get; set; } = string.Empty;
            public StorageEnums Storage { get; set; }
    
        }
    }`,
    descriptions: [
      "Response model for file upload.",
      "The input FileName may changes if any files with this name is already exists, so this is the actual FileName as result",
      "FileUrl is the file url over the Amazon S3 bucket or the Azure Blob storage",
      "StorageName is which container (Azure) or bucket (Amazon) file uploaded to.",
      "Storage is which storage where file uploaded; Azure or AmazonS3"
    ],
  }
]

const header = 'Patika.Framework.Utilities.Storage.Models';
const StorageModels = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default StorageModels