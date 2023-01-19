import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'BucketNotExistsException',
        language: 'csharp',
        item: `
        namespace Patika.Framework.Utilities.Storage.Exceptions
        {
            public class BucketNotExistsException : BaseApplicationException
            {
                public BucketNotExistsException() : base($"{typeof(BucketNotExistsException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
            "Throwed when Amazon s3 bucket does not exists",
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'ContainerNotExistsException',
        language: 'csharp',
        item: `
        namespace Patika.Framework.Utilities.Storage.Exceptions
        {
            public class ContainerNotExistsException : BaseApplicationException
            {
                public ContainerNotExistsException() : base($"{typeof(ContainerNotExistsException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
            "Throwed when Azure Blob Container does not exists",
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'FileContentTypeRequiredException',
        language: 'csharp',
        item: `
        namespace Patika.Framework.Utilities.Storage.Exceptions
        {
            public class FileContentTypeRequiredException : BaseApplicationException
            {
                public FileContentTypeRequiredException() : base($"{typeof(FileContentTypeRequiredException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
            "Throwed when FileType is not setted",
        ],
    },
    {
        order: 4,
        type: 'code',
        title: 'FileNameWithExtensionRequiredException',
        language: 'csharp',
        item: `
        namespace Patika.Framework.Utilities.Storage.Exceptions
        {
            public class FileNameWithExtensionRequiredException : BaseApplicationException
            {
                public FileNameWithExtensionRequiredException() : base($"{typeof(FileNameWithExtensionRequiredException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
            "Throwed when FileNameWithExtension is not setted",
        ],
    },
    {
        order: 5,
        type: 'code',
        title: 'FileRequiredException',
        language: 'csharp',
        item: `
        namespace Patika.Framework.Utilities.Storage.Exceptions
        {
            public class FileRequiredException : BaseApplicationException
            {
                public FileRequiredException() : base($"{typeof(FileRequiredException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
            "Throwed when File is not setted",
        ],
    },
    {
        order: 6,
        type: 'code',
        title: 'FileUploadFailedException',
        language: 'csharp',
        item: `
        namespace Patika.Framework.Utilities.Storage.Exceptions
        {
            public class FileUploadFailedException : BaseApplicationException
            {
                public FileUploadFailedException() : base($"{typeof(FileUploadFailedException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
            "Throwed when File upload is failed, check logs for exception details :) ",
        ],
    },
    {
        order: 7,
        type: 'code',
        title: 'InvalidFileNameException',
        language: 'csharp',
        item: `
        namespace Patika.Framework.Utilities.Storage.Exceptions
        {
            public class InvalidFileNameException : BaseApplicationException
            {
                public InvalidFileNameException() : base($"{typeof(InvalidFileNameException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
            "Throwed When fileNameWithExtension has multiple dots in it, at GenerateUniqueFileName method",
        ],
    },
    {
        order: 7,
        type: 'code',
        title: 'StorageNameRequiredException',
        language: 'csharp',
        item: `
        namespace Patika.Framework.Utilities.Storage.Exceptions
        {
            public class StorageNameRequiredException : BaseApplicationException
            {
                public StorageNameRequiredException() : base($"{typeof(StorageNameRequiredException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
            "Throwed When StorageName is null or empty.",
        ],
    }
]

const header = 'Patika.Framework.Utilities.Storage.Exceptions';
const StorageExceptions = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  

 
export default StorageExceptions