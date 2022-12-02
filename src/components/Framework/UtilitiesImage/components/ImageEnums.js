import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'ImageSizePercentageEnum',
        language: 'csharp',
        startingLineNumber: 0,
        item: `
        namespace Patika.Framework.Utilities.Image.Enums
        {
            public enum ImageSizePercentageEnum
            {
                None = 0,
                Small = 35,
                Medium = 65,
                Original  = 100,
                Larger = 150,
                Dublicated  = 200,
            }
        }`,
        descriptions: [ 
            "We resizing images by this enum",
        ],
    } 
]

const header = 'Patika.Framework.Utilities.Image.Enums';
const ImageEnums = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  

export default ImageEnums