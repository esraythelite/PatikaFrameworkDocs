import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'CanNotReadExcelSheetException',
        language: 'csharp',
        startingLineNumber: 3,
        item: `namespace Patika.Framework.Utilities.Excel.Exceptions
{
    public class CanNotReadExcelSheetException : BaseApplicationException
    {
        public CanNotReadExcelSheetException() : base($"{typeof(CanNotReadExcelSheetException).FullName}")
        {
        }
    }
}`,
        descriptions: [ 
            "Throwed where excel sheet can not read",
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'ExportExcelFailedException',
        language: 'csharp',
        startingLineNumber: 3,
        item: `namespace Patika.Framework.Utilities.Excel.Exceptions
{
    public class ExportExcelFailedException : BaseApplicationException
    {
        public ExportExcelFailedException(string message) : base($"{typeof(ExportExcelFailedException).FullName}", message)
        {
        }
    }
} `,
        descriptions: [ 
            "Throwed where exportin excel failed",
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'GetSheetFailedException',
        language: 'csharp',
        startingLineNumber: 3,
        item: `namespace Patika.Framework.Utilities.Excel.Exceptions
{
    public class GetSheetFailedException : BaseApplicationException
    {
        public GetSheetFailedException(string message) : base($"{typeof(GetSheetFailedException).FullName}", message)
        {
        }
    }
} `,
        descriptions: [ 
            "Throwed where excel sheet failed with unknown exception", 
        ],
    },
    {
        order: 4,
        type: 'code',
        title: 'ObjectListRequiredException',
        language: 'csharp',
        startingLineNumber: 3,
        item: `namespace Patika.Framework.Utilities.Excel.Exceptions
{
    public class ObjectListRequiredException : BaseApplicationException
    {
        public ObjectListRequiredException() : base($"{typeof(ObjectListRequiredException).FullName}")
        {
        }
    }
} `,
        descriptions: [ 
            "Throwed where object list not contains any items in excel exporting.",
        ],
    },
    {
        order: 5,
        type: 'code',
        title: 'SheetHasNoDataException',
        language: 'csharp',
        startingLineNumber: 3,
        item: `namespace Patika.Framework.Utilities.Excel.Exceptions
{
    public class SheetHasNoDataException : BaseApplicationException
    {
        public SheetHasNoDataException( ) : base($"{typeof(SheetHasNoDataException).FullName}")
        {
        }
    }
}`,
        descriptions: [ 
            "Throwed when sheet data does not contains any items (empty excel)",
        ],
    }
]

const header = 'Patika.Framework.Utilities.Excel.Exceptions';
const ExcelExceptions = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  


export default ExcelExceptions