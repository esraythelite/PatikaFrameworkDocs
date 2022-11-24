import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ErrorDTO',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.Shared.DTO
    {
        public class ErrorDTO
        {
            public string Code { get; set; } = string.Empty;
            public string Message { get; set; } = string.Empty;
        }
    }`,
    descriptions: [
      ""
    ],
  } , {
    order: 2,
    type: 'code',
    title: 'ResponseDTO',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.Shared.DTO
    {
        public class ResponseDTO
        {
            public bool Result { get; set; }
            public ErrorDTO Error { get; set; } = new ErrorDTO();
    
            public static ResponseDTO Ok() => new() { Result = true };
            public static ResponseDTO Cancel(string code, string msg) => new() { Result = false, Error = new ErrorDTO { Code = code, Message = msg } };
    
            public static implicit operator ResponseDTO(BaseApplicationException ex) => Cancel(ex.Code, ex.Message);
            public static implicit operator ResponseDTO(Exception ex) => Cancel("", ex.Message);
        }
    }`,
    descriptions: [
      ""
    ],
  }  , {
    order: 2,
    type: 'code',
    title: 'ResponseDTO',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.Shared.DTO
    {
        public class RefreshTokenInputDTO  : Framework.Shared.DTO.DTO
        {
            public string AccessToken { get; set; } = string.Empty;
            public string RefreshToken { get; set; } = string.Empty; 
        }
    }`,
    descriptions: [
      ""
    ],
  } 
]

const DtoIdentityShared = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Framework.Identity.Shared.Attributes</Typography> 
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
export default DtoIdentityShared