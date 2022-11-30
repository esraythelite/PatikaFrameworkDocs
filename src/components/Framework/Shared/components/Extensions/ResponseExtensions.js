import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ToGeneralResponse',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    namespace Patika.Framework.Shared.Extensions
    {
        public static class GeneralResponseDTOExtensions
        {
            public static ActionResult<GeneralResponseDTO<T>> ToGeneralResponse<T>(this T data, Guid? jobId = null) where T : class
            {
                var res = (GeneralResponseDTO<T>)data;
                res.JobId = jobId ?? Guid.Empty;
                return new ActionResult<GeneralResponseDTO<T>>(res);
            }    `,
    descriptions: [
      "Converts T Data to GeneralResponseDTO",
      "T data is set to GeneralResponseDTO.Result",
      "Sets logId to track logs with same id",
      "Returns ActionResult<GeneralResponseDTO<T>>"
    ],
  } ,
  {
    order: 2,
    type: 'code',
    title: 'ToExceptionGeneralResponse',
    language: 'csharp',
    startingLineNumber: 16,
    item: `         
            public static ActionResult<GeneralResponseDTO<T>> ToExceptionGeneralResponse<T>(this Exception data, Guid? jobId = null) where T : class
            {
                var res = (GeneralResponseDTO<T>)data;
                res.JobId = jobId ?? Guid.Empty;
                return new ActionResult<GeneralResponseDTO<T>>(res);
            }`,
    descriptions: [
        "Converts exceptions GeneralResponseDTO",
        "GeneralResponseDTO.Result is null",
        "Exception data is set to GeneralResponseDTO.Exception type of ApplicationException",
        "Sets logId to track logs with same id",
        "Returns ActionResult<GeneralResponseDTO<T>>"
    ],
  }    ,
  {
    order: 3,
    type: 'code',
    title: 'ToBaseException',
    language: 'csharp',
    startingLineNumber: 23,
    item: `
            public static BaseApplicationException ToBaseException<T>(this GeneralResponseDTO<T> exceptionResponse) where T: class
            {
                if(exceptionResponse.Exception != null)
                    return new ApplicationException(exceptionResponse.Exception);
                throw new InvalidOperationException();
            }
        }
    }`,
    descriptions: [
        "Converts GeneralResponseDTO to ApplicationException",
        "If exceptionResponse is null, throws InvalidOperationException", 
    ],
  }   
]


const header = 'Patika.Framework.Shared.Extensions.GeneralResponseDTOExtensions';
const ResponseExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}     

export default ResponseExtensions