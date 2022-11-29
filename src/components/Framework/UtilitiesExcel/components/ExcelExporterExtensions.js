import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'ExportAsExcel',
        subtitle: 'with default config',
        language: 'csharp',
        startingLineNumber: 7,
        item: `namespace Patika.Framework.Utilities.Excel.Extensions
{
    public static class ExcelExporterExtensions
    {
        private static readonly string ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

        public static FileContentResult ExportAsExcel<T>(this IEnumerable<T> objects) where T : IExportable
        {
            return objects.ExportAsExcel(new ExportConfiguration());
        }`,
        descriptions: [ 
            "Exports list as FileContentResult with content type of excel",
            "Uses default ExportConfiguration "
        ],
    } ,
    {
      order: 2,
      type: 'code',
      title: 'ExportAsExcel',
      subtitle: 'with custom config',
      language: 'csharp',
      startingLineNumber: 18,
      item: `public static FileContentResult ExportAsExcel<T>(this IEnumerable<T> objects, ExportConfiguration config) where T : IExportable
      {
          if (objects is null || !objects.Any())
          {
              throw new ObjectListRequiredException();
          }
          try
          {
              var mapper = new Mapper();
              var memoryStream = new MemoryStream();

              // Saves the objects to the stream.
              mapper.Save(memoryStream, objects, config.SheetName, overwrite: true, xlsx: true);
              return new FileContentResult(memoryStream.ToArray(), ContentType) { FileDownloadName = config.FileName };
          }
          catch (Exception ex)
          {
              throw new ExportExcelFailedException(ex.Message);
          }
      }
  }
} `,
      descriptions: [ 
        "Exports list as FileContentResult with content type of excel",
        "Uses input configuration"  ,
        "Mapper.Save method is from Npo.Mapper",        
      ],
  } 
]

const header = 'Patika.Framework.Utilities.Excel.Exceptions';
const ExcelExporterExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  


export default ExcelExporterExtensions