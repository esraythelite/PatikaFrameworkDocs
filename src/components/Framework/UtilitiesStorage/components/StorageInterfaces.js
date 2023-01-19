import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IStorageService',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Utilities.Storage.Interfaces
    {
        public interface IStorageService
        {
            Task<FileUploadOutputDTO> UploadFormFileAsync(FormFileUploadInputDTO input);
            Task<FileUploadOutputDTO> UploadBase64FileAsync(Base64FileUploadInputDTO input);
            Task<bool> IsFileExistsAsync(CheckFileExistanceInputDTO input);
            string GenerateUniqueFileName(string fileName);
        }
    }`,
    descriptions: [
      "Base interface for each file upload targets.",
      "IAzureStorageService and IAmazonStorageService are inherited from this common interface"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'IAzureStorageService',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Utilities.Storage.Interfaces
    {
        public interface IAzureStorageService: IStorageService
        {       
        }
    }`,
    descriptions: [
      "Used to upload files to Azure Blob Storage.",
      "Inherited from IStorageService"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'IAmazonStorageService',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Utilities.Storage.Interfaces
    {
        public interface IAmazonStorageService : IStorageService
        {       
        }
    }`,
    descriptions: [
      "Used to upload files to Amazon S3 buckets.",
      "Inherited from IStorageService"
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'IFormFileUploadInputDTOValidator',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Utilities.Storage.Interfaces.Validators
    {
        public interface IFormFileUploadInputDTOValidator : IPatikaValidator<FormFileUploadInputDTO>
        {
        }
    }`,
    descriptions: [
      "Validates FormFileUploadInputDTO input before uploading file", 
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'IBase64FileUploadInputDTOValidator',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Utilities.Storage.Interfaces.Validators
    {
        public interface IBase64FileUploadInputDTOValidator : IPatikaValidator<Base64FileUploadInputDTO>
        {
        }
    }`,
    descriptions: [
      "Validates Base64FileUploadInputDTO input before uploading file", 
    ],
  }
]

const header = 'Patika.Framework.Utilities.Storage.Interfaces';
const StorageInterfaces = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default StorageInterfaces