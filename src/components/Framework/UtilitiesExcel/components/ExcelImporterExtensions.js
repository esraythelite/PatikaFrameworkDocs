import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'MapExcelToEnumarable ',
    subtitle: 'With default config and default mapper', 
    language: 'csharp',
    startingLineNumber: 8,
    item: `namespace Patika.Framework.Utilities.Excel.Extensions
{
    public static class ExcelImporterExtensions
    {
        public static IEnumerable<T> MapExcelToEnumarable<T>(
            this string fileAsBase64) where T : class, new()
        {
            var file = fileAsBase64.ConvertBase64ToFormFile("import");
            return file.MapExcelToEnumarable<T>();
        }

        public static IEnumerable<T> MapExcelToEnumarable<T>(
            this IFormFile? file) where T : class, new()
        {
            Mapper mapper = SetupMapper(file); 
            return mapper.Map<T>(new ImportConfiguration());
        }
        `,
    descriptions: [
      "Maps fileAsBase64 or IFormFile to IEnumerable<T> With default config and default mapper",
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'MapExcelToEnumarable',
    subtitle: 'With custom config and default mapper', 
    language: 'csharp',
    startingLineNumber: 26,
    item: `public static IEnumerable<T> MapExcelToEnumarable<T>(
  this string fileAsBase64, ImportConfiguration config)
  where T : class, new()
  {
      var file = fileAsBase64.ConvertBase64ToFormFile("import");
      return file.MapExcelToEnumarable<T>(config);
  }

  public static IEnumerable<T> MapExcelToEnumarable<T>(
      this IFormFile? file, ImportConfiguration config)
      where T : class, new()
  {
      Mapper mapper = SetupMapper(file);
      return mapper.Map<T>(config);
  } 
      `,
    descriptions: [
      "Maps fileAsBase64 or IFormFile to IEnumerable<T> With custom config and default mapper",
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'MapExcelToEnumarable',
    subtitle: 'With default config and custom mapper', 
    language: 'csharp',
    startingLineNumber: 42,
    item: ` public static IEnumerable<T> MapExcelToEnumarable<T>(
    this string fileAsBase64, Mapper mapper)
    where T : class, new()
{
    var file = fileAsBase64.ConvertBase64ToFormFile("import");

    return file.MapExcelToEnumarable<T>(mapper);
}

public static IEnumerable<T> MapExcelToEnumarable<T>(
    this IFormFile? file, Mapper mapper)
    where T : class, new()
{
    mapper = SetupMapper(file, mapper);
    return mapper.Map<T>(new ImportConfiguration());
}    `,
    descriptions: [
      "Maps fileAsBase64 or IFormFile to IEnumerable<T> With default config and custom mapper",
    ],
  }, 
  {
    order: 4,
    type: 'code',
    title: 'MapExcelToEnumarable',
    subtitle: 'With custom config and custom mapper', 
    language: 'csharp',
    startingLineNumber: 59,
    item: `public static IEnumerable<T> MapExcelToEnumarable<T>(
  this string fileAsBase64, Mapper mapper, ImportConfiguration config)
  where T : class, new()
{
  var file = fileAsBase64.ConvertBase64ToFormFile("import");
  return file.MapExcelToEnumarable<T>(mapper, config);
}

public static IEnumerable<T> MapExcelToEnumarable<T>(
  this IFormFile? file, Mapper mapper, ImportConfiguration config)
  where T : class, new()
{
  mapper = SetupMapper(file, mapper);
  return mapper.Map<T>(config);
}`,
    descriptions: [ 
      "Maps fileAsBase64 or IFormFile to IEnumerable<T> With custom config and custom mapper",
    ],
}  , 
{
  order: 5,
  type: 'code',
  title: 'Map',
  language: 'csharp',
  startingLineNumber: 75,
  item: `private static IEnumerable<T> Map<T>(
  this Mapper mapper, ImportConfiguration config)
  where T : class
{
  var sheet = GetSheet<T>(config, mapper);

  var rows = GetRows(sheet);
  if (!rows.Any())
  {
      throw new SheetHasNoDataException();
  }
  return rows;
}`,
  descriptions: [ 
      "All mapp process in done here!",
      "First, get sheet",
      "Then convert sheet data to IEnumerable<T>"
  ],
}   , 
{
  order: 6,
  type: 'code',
  title: 'GetSheet',
  language: 'csharp',
  startingLineNumber: 89,
  item: `private static IEnumerable<RowInfo<T>> GetSheet<T>(
  ImportConfiguration config, Mapper mapper)
  where T : class
{
  try
  {
      var sheet = string.IsNullOrEmpty(config.SheetName)
          ? mapper.Take<T>(config.SheetIndex)
          : mapper.Take<T>(config.SheetName);

      if (sheet is null)
      {
          throw new CanNotReadExcelSheetException();
      }
      return sheet;
  }
  catch (CanNotReadExcelSheetException)
  {
      throw;
  }
  catch (Exception ex)
  {
      throw new GetSheetFailedException(ex.Message);
  }
}`,
  descriptions: [ 
      "Tries to read sheet by index or name",
      "If you use default configuration then it will read sheet first sheet (index: zero)",
      "If you use custom configuration and set sheetName or sheetIndex, then it will read specified sheet"
  ],
},
{
  order: 7,
  type: 'code',
  title: 'GetRows',
  language: 'csharp',
  startingLineNumber: 115,
  item: `private static IEnumerable<T> GetRows<T>(
  IEnumerable<RowInfo<T>> sheet)
{
  return sheet.Select(i => i.Value);
}`,
  descriptions: [ 
      "Converts sheet data to IEnumerable<T>",
  ],
}  ,
{
  order: 8,
  type: 'code',
  title: 'Mapper Setup',
  language: 'csharp',
  startingLineNumber: 120,
  item: `
    private static Mapper SetupMapper(IFormFile? file, Mapper? inputMapper = null)
    {
        return inputMapper != null && inputMapper != default
              ? CustomSetup(file, inputMapper)
              : DefaultSetup(file);
    }

    private static Mapper DefaultSetup(IFormFile? file)
    {
        var stream = file.ConvertFormFileToStream();
        var mapper = new Mapper(stream)
        {
            FirstRowIndex = 0,
            SkipBlankRows = true,
            TrimSpaces = TrimSpacesType.Both
        };
        return mapper;
    }

    private static Mapper CustomSetup(IFormFile? file, Mapper inputMapper)
    {
      var stream = file.ConvertFormFileToStream();
        var mapper = new Mapper(stream)
        {
            FirstRowIndex = inputMapper.FirstRowIndex,
            SkipBlankRows = true,
            HasHeader = inputMapper.HasHeader,
            TrimSpaces = inputMapper.TrimSpaces,
            IgnoredNameChars = inputMapper.IgnoredNameChars,
            SkipWriteDefaultValue = inputMapper.SkipWriteDefaultValue,
            TrackObjects = inputMapper.TrackObjects,
            TruncateNameFrom = inputMapper.TruncateNameFrom,
            UseDefaultValueAttribute = inputMapper.UseDefaultValueAttribute
        };

        return mapper;
    }
  }
}
`,
  descriptions: [ 
      "SetupMapper is a switcher to use default or predefined mapper.",
      "Mapper is belong to Npoi.Mapper nuget package"
  ],
}  
]

const header = 'Patika.Framework.Utilities.Excel.Extensions';
const ExcelImporterExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}


export default ExcelImporterExtensions