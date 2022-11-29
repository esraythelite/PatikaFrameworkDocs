import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'ExportConfiguration',
        language: 'csharp',
        startingLineNumber: 1,
        item: `namespace Patika.Framework.Utilities.Excel.Models
{
    public class ExportConfiguration
    {
        public string SheetName { get; set; } = string.Empty;
        public string FileName { get; set; } = string.Empty;

        public ExportConfiguration() : this(fileName: DateAsFileName())
        {
        }

        public ExportConfiguration(string fileName) : this(fileName: fileName, sheetName: fileName)
        {
        }

        public ExportConfiguration(string fileName, string sheetName)
        {
            FileName = IsStringDefined(fileName) ? fileName : DateAsFileName();
            SheetName = IsStringDefined(sheetName) ? sheetName : FileName;
        }

        private static bool IsStringDefined(string fileName)
        {
            return !string.IsNullOrEmpty(fileName);
        }

        private static string DateAsFileName()
        {
            return DateTime.Now.ToString("yyyyMMddHHmmss");
        }
    }
}        `,
        descriptions: [
            "You can set excel file name and sheet name when exporting data as excel",
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'ImportConfiguration',
        language: 'csharp',
        startingLineNumber: 1,
        item: `namespace Patika.Framework.Utilities.Excel.Models
{
    public class ImportConfiguration
    {
        public string SheetName { get; set; } = string.Empty;
        public int SheetIndex { get; set; } = 0;

        public ImportConfiguration() : this(sheetIndex: 0)
        {
        }

        public ImportConfiguration(int sheetIndex)
        {
            SheetIndex = sheetIndex;
        }

        public ImportConfiguration(string sheetName)
        {
            SheetName = sheetName;
        }        
    }
}         `,
        descriptions: [
            "You can point which sheet will imported via sheetIndex or sheetName",
        ],
    }
]

const header = 'Patika.Framework.Utilities.Excel.Models';
const ExcelModels = () => {
    return (
        <DocPaper header={header} contents={contents} />
    )
}

export default ExcelModels;