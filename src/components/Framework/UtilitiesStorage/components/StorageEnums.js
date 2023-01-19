import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'StorageEnums',
        language: 'csharp',
        startingLineNumber: 0,
        item: `
        namespace Patika.Framework.Utilities.Storage.Enums
        {
            public enum StorageEnums
            {
                NotSet,
                AmazonS3,
                Azure
            }
        }`,
        descriptions: [ 
            "Used on FileUploadOutputDTO to notify user about where file uploaded",
        ],
    } 
]

const header = 'Patika.Framework.Utilities.Storage.Enums';
const StorageEnums = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  

export default StorageEnums