import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'MagickImageToMemoryStreamFailedException',
        language: 'csharp',
        startingLineNumber: 1,
        item: `
        namespace Patika.Framework.Utilities.Image.Exceptions
        {
            public class MagickImageToMemoryStreamFailedException : BaseApplicationException
            {
                public MagickImageToMemoryStreamFailedException() : base($"{typeof(MagickImageToMemoryStreamFailedException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
            "Throwed MagickImage to memory stream conversion failed",
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'MemoryStreamToMagickImageFailedException',
        language: 'csharp',
        startingLineNumber: 1,
        item: `
        namespace Patika.Framework.Utilities.Image.Exceptions
        {
            public class MemoryStreamToMagickImageFailedException : BaseApplicationException
            {
                public MemoryStreamToMagickImageFailedException() : base($"{typeof(MemoryStreamToMagickImageFailedException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
          "Throwed memory stream to MagickImage conversion failed",
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'ResizeImageFailedException',
        language: 'csharp',
        startingLineNumber: 3,
        item: `
        namespace Patika.Framework.Utilities.Image.Exceptions
        {
            public class ResizeImageFailedException : BaseApplicationException
            {
                public ResizeImageFailedException( ) : base($"{typeof(ResizeImageFailedException).FullName}")
                {
                }
            }
        }`,
        descriptions: [ 
            "Throwed when resizing image failed",
        ],
    }
]

const header = 'Patika.Framework.Utilities.Image.Exceptions';
const ImageExceptions = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  

 
export default ImageExceptions