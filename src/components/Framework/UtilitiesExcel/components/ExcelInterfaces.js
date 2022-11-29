import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'IExportable',  
        item: `namespace Patika.Framework.Utilities.Excel.Interfaces
{
    public interface IExportable
    {
    }
}`,
        descriptions: [ 
            "Export as excel extensions work only for classes inherited from this interface",
            "Otherwise you will encounter syntax error"
        ],
    } 
]

const header = 'Patika.Framework.Utilities.Excel.Interfaces';
const ExcelInterfaces = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  

export default ExcelInterfaces;
