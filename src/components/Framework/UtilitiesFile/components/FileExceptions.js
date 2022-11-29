import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'FileIsNotValidException',
        language: 'csharp',
        startingLineNumber: 1,
        item: `
        namespace Patika.Framework.Utilities.File.Exceptions
        {
            public class FileIsNotValidException : BaseApplicationException
            {
                public FileIsNotValidException() : base($"{typeof(FileIsNotValidException).FullName}")
                {
                }
            }
        } `,
        descriptions: [ 
            "Throwed where file input is not valid",
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'FileNameIsRequiredException',
        language: 'csharp',
        startingLineNumber: 1,
        item: `
        namespace Patika.Framework.Utilities.File.Exceptions
        {
            public class FileNameIsRequiredException : BaseApplicationException
            {
                public FileNameIsRequiredException() : base($"{typeof(FileNameIsRequiredException).FullName}")
                {
                }
            }
        } `,
        descriptions: [ 
            "Throwed where fileName input is not valid",
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'OpenFileStreamFailedException',
        language: 'csharp',
        startingLineNumber: 3,
        item: `namespace Patika.Framework.Utilities.Excel.Exceptions
{
    public class OpenFileStreamFailedException : BaseApplicationException
    {
        public OpenFileStreamFailedException( ) : base($"{typeof(OpenFileStreamFailedException).FullName}")
        {
        }
    }
} `,
        descriptions: [ 
            "Throwed when reading file stream failed",
        ],
    }
]

const header = 'Patika.Framework.Utilities.File.Exceptions';
const FileExceptions = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  


export default FileExceptions