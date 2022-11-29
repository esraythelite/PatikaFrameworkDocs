import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ConvertBase64ToFormFile',
    language: 'csharp',
    startingLineNumber: 8,
    item: `
    public static IFormFile ConvertBase64ToFormFile(this string fileAsBase64, string fileName)
    {
        if (string.IsNullOrEmpty(fileAsBase64))
        {
            throw new FileIsNotValidException();
        }
        if (string.IsNullOrEmpty(fileName))
        {
            throw new FileNameIsRequiredException();
        }

        byte[] bytes = Convert.FromBase64String(fileAsBase64);
        var stream = new MemoryStream(bytes);
        IFormFile formFile = new FormFile(stream, 0, bytes.Length, fileName, fileName);
        return formFile;
    }`,
    descriptions: [
      "Converts base64 string file to IFormFile", 
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'ConvertByteArrayToFormFile',
    language: 'csharp',
    startingLineNumber: 25,
    item: `
    public static IFormFile ConvertByteArrayToFormFile(this byte[] bytes, string fileName)
    {
        if (!bytes.Any())
        {
            throw new FileIsNotValidException();
        }
        if (string.IsNullOrEmpty(fileName))
        {
            throw new FileNameIsRequiredException();
        }

        var stream = new MemoryStream(bytes);  
        IFormFile formFile = new FormFile(stream, 0, bytes.Length, fileName, fileName);
        return formFile;
    }`,
    descriptions: [
      "Converts byte array o a file to IFormFile", 
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'ConvertBase64ToMemoryStream',
    language: 'csharp',
    startingLineNumber: 41,
    item: `
    public static MemoryStream ConvertBase64ToMemoryStream(this string fileAsBase64)
    {
        if (string.IsNullOrEmpty(fileAsBase64))
        {
            throw new FileIsNotValidException();
        } 

        byte[] bytes = Convert.FromBase64String(fileAsBase64);
        var stream = new MemoryStream(bytes);
        return stream;
    }`,
    descriptions: [
      "Converts base64 string file to MemoryStream", 
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'ConvertFormFileToBase64File',
    language: 'csharp',
    startingLineNumber: 54,
    item: `
    public static string ConvertFormFileToBase64File(this IFormFile file)
    {
        if (file.Length <= 0)
        {
            throw new FileIsNotValidException();
        }   
        
        using var ms = new MemoryStream();
        file.CopyTo(ms);
        var fileBytes = ms.ToArray();
        string fileAsBase64 = Convert.ToBase64String(fileBytes);
        return fileAsBase64;
    }`,
    descriptions: [
      "Converts IFormFile to base64 string file", 
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'ConvertFormFileToStream',
    language: 'csharp',
    startingLineNumber: 54,
    item: `
    public static Stream ConvertFormFileToStream(this IFormFile? file)
    {
        if (file is null || file.Length <= 0)
        {
            throw new FileIsNotValidException();
        } 
        var stream = file.OpenReadStream() ?? throw new OpenFileStreamFailedException();
        return stream;
    }`,
    descriptions: [
      "Converts IFormFile to stream", 
    ],
  }
]

const header = 'Patika.Framework.Utilities.File.Extensions';
const FileConversionExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default FileConversionExtensions