import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'MagickFormatExtensions',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Utilities.Image.Extensions
    {
        public static class MagickFormatExtensions
        {
            public static MagickFormat GetImageFormat(this string imageExtension)
            {
                var magickFormatAsDictionary = EnumHelper<MagickFormat>.ToList().ToDictionary(t => t, t => t.GetNameOfMagickFormat());
                var map = magickFormatAsDictionary.FirstOrDefault(keyValuePair => Equals(imageExtension, keyValuePair));
                return map.Key;
    
                static bool Equals(string imageExtension, KeyValuePair<MagickFormat, string> keyValuePair)
                {
                    return string.Equals(keyValuePair.Value, imageExtension, StringComparison.InvariantCultureIgnoreCase);
                }
            }
    
            public static string GetNameOfMagickFormat(this MagickFormat t) => $"{Enum.GetName(typeof(MagickFormat), t)}";
        }
    }`,
    descriptions: [
      "GetImageFormat find appropriate MagickFormat for string image extension.",
      "GetNameOfMagickFormat converts MagickFormat to extension name"
    ],
  }
]

const header = 'Patika.Framework.Utilities.Image.Extensions';
const MagickFormatExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}


export default MagickFormatExtensions