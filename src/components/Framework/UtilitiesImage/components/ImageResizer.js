import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ImageResizer',
    language: 'csharp',
    startingLineNumber: 8,
    item: `
    namespace Patika.Framework.Utilities.Image.Services
    {
        public class ImageResizer : CoreService, IImageResizer
        { 
            Configuration Configuration { get; }
    
            public ImageResizer(IServiceProvider serviceProvider): base(serviceProvider)
            { 
                Configuration = GetService<Configuration>();
            }`,
    descriptions: [
      "Constructor and props",
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'ResizeAs(ResizingFormImageInput)',
    language: 'csharp',
    startingLineNumber: 19,
    item: ` 
    public async Task<MagickImage> ResizeAsMagickImageAsync(ResizingFormImageInput input)
    {
        var image = input.File.ConvertFormFileToMagickImage();
        SetImageFormat(image, input.Extension);
        await ResizeImageAsync(image, input.Size); 
        return image;
    }

    public async Task<MemoryStream> ResizeAsMemoryStreamAsync(ResizingFormImageInput input)
    {
        var image = await ResizeAsMagickImageAsync(input);
        var memoryStream = image.ConvertMagickImageToMemoryStream();
        return memoryStream;
    }

    public async Task<byte[]> ResizeAsByteArrayAsync(ResizingFormImageInput input)
    {
        var image = await ResizeAsMagickImageAsync(input);
        return image.ToByteArray();
    }`,
    descriptions: [
      "Resizes form file as MagickImage, MemoryStream or byte array",
    ],
  } ,
  {
    order: 3,
    type: 'code',
    title: 'ResizeAs(ResizingBase64ImageInput)',
    language: 'csharp',
    startingLineNumber: 40,
    item: ` 
    public async Task<MagickImage> ResizeAsMagickImageAsync(ResizingBase64ImageInput input)
    {
        var image = input.File.ConvertBase64ToMagickImage();
        SetImageFormat(image, input.Extension);
        await ResizeImageAsync(image, input.Size);
        return image;
    }

    public async Task<MemoryStream> ResizeAsMemoryStreamAsync(ResizingBase64ImageInput input)
    {
        var image = await ResizeAsMagickImageAsync(input);
        var memoryStream = image.ConvertMagickImageToMemoryStream();
        return memoryStream;
    }

    public async Task<byte[]> ResizeAsByteArrayAsync(ResizingBase64ImageInput input)
    {
        var image = await ResizeAsMagickImageAsync(input);
        return image.ToByteArray();
    } `,
    descriptions: [
      "Resizes base64 string file as MagickImage, MemoryStream or byte array",
    ],
  } ,
  {
    order: 4,
    type: 'code',
    title: 'ResizeAs(ResizingByteArrayImageInput)',
    language: 'csharp',
    startingLineNumber: 61,
    item: ` 
    public async Task<MagickImage> ResizeAsMagickImageAsync(ResizingByteArrayImageInput input)
    {
        var image = input.File.ConvertByteArrayToMagickImage();
        SetImageFormat(image, input.Extension);
        await ResizeImageAsync(image, input.Size);
        return image;
    }

    public async Task<MemoryStream> ResizeAsMemoryStreamAsync(ResizingByteArrayImageInput input)
    {
        var image = await ResizeAsMagickImageAsync(input);
        var memoryStream = image.ConvertMagickImageToMemoryStream();
        return memoryStream;
    }

    public async Task<byte[]> ResizeAsByteArrayAsync(ResizingByteArrayImageInput input)
    {
        var image = await ResizeAsMagickImageAsync(input);
        return image.ToByteArray();
    }`,
    descriptions: [
      "Resizes byte array file as MagickImage, MemoryStream or byte array",
    ],
  } ,
  {
    order: 5,
    type: 'code',
    title: 'SetImageFormat',
    language: 'csharp',
    startingLineNumber: 82,
    item: `
    public void SetImageFormat(MagickImage image, string imageExtension)
    {
        var imageFormat = imageExtension.GetImageFormat();
        image.Format = imageFormat != MagickFormat.Unknown ? imageFormat : Configuration.DefaultImageFormat;
    }`,
    descriptions: [
      "imageExtension.GetImageFormat() finds ImageFormar",
      "if imageFormat is unknown then sets image format as Configuration.DefaultImageFormat"
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'ResizeImageAsync',
    language: 'csharp',
    startingLineNumber: 88,
    item: ` 
    private static async Task ResizeImageAsync(MagickImage image, ImageSizePercentageEnum imageSize)
    {
        try
        {
            if (imageSize == ImageSizePercentageEnum.Original || imageSize == ImageSizePercentageEnum.None)
            {
                return;
            }
            image.Resize(new Percentage((int)imageSize));
            await Task.CompletedTask;
        }
        catch
        {
            throw new ResizeImageFailedException();
        }
    }`,
    descriptions: [
      "Actual resizing is done here, thanks to Magick.NET.Core package",
      "If input percentage is Original or None, returns with no resizing"
    ],
  }
]

const header = 'Patika.Framework.Utilities.Image.Services';
const ImageResizer = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default ImageResizer