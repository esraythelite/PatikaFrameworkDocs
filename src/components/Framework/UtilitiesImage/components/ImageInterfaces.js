import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IImageResizer',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
        namespace Patika.Framework.Utilities.Image.Interfaces
        {
            public interface IImageResizer
            {
                Task<MagickImage> ResizeAsMagickImageAsync(ResizingFormImageInput input);
                Task<MemoryStream> ResizeAsMemoryStreamAsync(ResizingFormImageInput input);
                Task<byte[]> ResizeAsByteArrayAsync(ResizingFormImageInput input);
        
                Task<MagickImage> ResizeAsMagickImageAsync(ResizingBase64ImageInput input);
                Task<MemoryStream> ResizeAsMemoryStreamAsync(ResizingBase64ImageInput input);
                Task<byte[]> ResizeAsByteArrayAsync(ResizingBase64ImageInput input);
        
                Task<MagickImage> ResizeAsMagickImageAsync(ResizingByteArrayImageInput input);
                Task<MemoryStream> ResizeAsMemoryStreamAsync(ResizingByteArrayImageInput input);
                Task<byte[]> ResizeAsByteArrayAsync(ResizingByteArrayImageInput input);
        
                void SetImageFormat(MagickImage image, string imageExtension);
            }
        }`,
    descriptions: [
      "Resizes images by several file types (FormFile, Base64 string file, byte array file)",
    ],
  }
]

const header = 'Patika.Framework.Utilities.Image.Interfaces';
const ImageInterfaces = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default ImageInterfaces