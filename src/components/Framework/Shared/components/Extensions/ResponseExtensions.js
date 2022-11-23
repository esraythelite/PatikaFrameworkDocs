import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

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

const ResponseExtensions = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Extensions.GeneralResponseDTOExtensions</Typography>
      {contents.sort((a, b) => (a.order - b.order)).map((content) => {
        return (
          content.type === 'code' ? <>
            <Highlighter key={content.order} title={content.title} descriptions={content.descriptions} code={content.item} language={content.language} startingLineNumber={content.startingLineNumber} />
          </>
            :
            <>  <ImageItem key={content.order} item={content.item}></ImageItem></>
        )
      })}
    </Stack>
  )
}
 

export default ResponseExtensions