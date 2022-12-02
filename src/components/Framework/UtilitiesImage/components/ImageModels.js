import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Configuration',
    language: 'csharp',
    startingLineNumber: 2,
    item: `
    namespace Patika.Framework.Utilities.Image.Models
    {
        public class Configuration
        {
            public MagickFormat DefaultImageFormat { get; set; } = MagickFormat.WebP;
        }
    } `,
    descriptions: [
      "",
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'ResizingImageBaseInput',
    language: 'csharp',
    startingLineNumber: 2,
    item: `
    namespace Patika.Framework.Utilities.Image.Models
    {
        public class ResizingImageBaseInput
        {
            public string Extension { get; set; } = string.Empty;
            public ImageSizePercentageEnum Size { get; set; } = ImageSizePercentageEnum.Original;
        }
    } `,
    descriptions: [
      "",
    ],
  } ,
  {
    order: 3,
    type: 'code',
    title: 'ResizingBase64ImageInput',
    language: 'csharp',
    startingLineNumber: 1,
    item: `
    namespace Patika.Framework.Utilities.Image.Models
    {
        public class ResizingBase64ImageInput : ResizingImageBaseInput
        {
            public string File { get; set; } = string.Empty;
        }
    } `,
    descriptions: [
      "",
    ],
  } ,
  {
    order: 4,
    type: 'code',
    title: 'ResizingByteArrayImageInput',
    language: 'csharp',
    startingLineNumber: 1,
    item: `
    namespace Patika.Framework.Utilities.Image.Models
    {
        public class ResizingByteArrayImageInput : ResizingImageBaseInput
        {
            public byte[]? File { get; set; } 
        }
    } `,
    descriptions: [
      "",
    ],
  } ,
  {
    order: 5,
    type: 'code',
    title: 'ResizingFormImageInput',
    language: 'csharp',
    startingLineNumber: 2,
    item: `
    namespace Patika.Framework.Utilities.Image.Models
    {
        public class ResizingFormImageInput : ResizingImageBaseInput
        {
            public IFormFile? File { get; set; }
        }
    } `,
    descriptions: [
      "",
    ],
  }
]

const header = 'Patika.Framework.Utilities.Image.Models';
const ImageModels = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default ImageModels