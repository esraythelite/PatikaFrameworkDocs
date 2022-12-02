import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ConvertMagickImageToMemoryStream',
    language: 'csharp',
    startingLineNumber: 9,
    item: ` 
    public static MemoryStream ConvertMagickImageToMemoryStream(this MagickImage image)
    {
        try
        {
            var magickMemoryStream = new MemoryStream();
            image.Write(magickMemoryStream);
            magickMemoryStream.Position = 0;
            return magickMemoryStream;
        }
        catch
        {
            throw new MagickImageToMemoryStreamFailedException();
        }
    }`,
    descriptions: [
      "Converts MagickImage to memory stream",
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'ConvertMemoryStreamToMagickImage',
    language: 'csharp',
    startingLineNumber: 24,
    item: `
    public static MagickImage ConvertMemoryStreamToMagickImage(this MemoryStream memoryStream)
    {
        return new MagickImage(memoryStream) ?? throw new MemoryStreamToMagickImageFailedException();
    }`,
    descriptions: [
      "Converts memory stream to MagickImage",
    ],
  } ,
  {
    order: 3,
    type: 'code',
    title: 'ConvertFormFileToMagickImage',
    language: 'csharp',
    startingLineNumber: 29,
    item: `
    public static MagickImage ConvertFormFileToMagickImage(this IFormFile? file)
    {
        var memoryStream = file.ConvertFormFileToMemoryStream();
        return memoryStream.ConvertMemoryStreamToMagickImage();
    } `,
    descriptions: [
      "Converts FormFile to MagickImage", 
    ],
  } ,
  {
    order: 4,
    type: 'code',
    title: 'ConvertByteArrayToMagickImage',
    language: 'csharp',
    startingLineNumber: 35,
    item: `
    public static MagickImage ConvertByteArrayToMagickImage(this byte[]? file)
    {
        var memoryStream = file.ConvertByteArrayToMemoryStream();
        return memoryStream.ConvertMemoryStreamToMagickImage();
    }`,
    descriptions: [
      "Converts byte array to MagickImage",
    ],
  } ,
  {
    order: 5,
    type: 'code',
    title: 'ConvertBase64ToMagickImage',
    language: 'csharp',
    startingLineNumber: 40,
    item: `
    public static MagickImage ConvertBase64ToMagickImage(this string? fileAsBase64String)
    {
        using var memoryStream = fileAsBase64String.ConvertBase64ToMemoryStream();
        return memoryStream.ConvertMemoryStreamToMagickImage();
    }`,
    descriptions: [
      "Converts base64 string file to MagickImage",
    ],
  }
]

const commonDetails = [
  "This extensions use extensions of Patika.Framework.Utilities.Files package."
];

const header = 'Patika.Framework.Utilities.Image.Extensions';
const MagickImageExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} commonDetails={commonDetails} />
  )
}


export default MagickImageExtensions