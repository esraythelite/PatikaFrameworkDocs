import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../Highlighter'
import ImageItem from '../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Consts',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.Shared
    {
        public static class Consts
        {
            public const string ADMIN_MAILADDRESS = "admin@patika.com";
            public const string ADMINISTRATOR_ROLE = "Administrator";
            public const string ANONYMOUS_ROLE = "Anonymous";
            public const string APPLICATION_CLIENT_ROLE = "Application";
            public const string ADMIN_POLICY = "AdministratorPolicy";
        }
    }`,
    descriptions: [
      "Some consts that used in setup of identity server.", 
    ],
  }
]

const ConstsIdentityShared = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Framework.Identity.Shared.Models</Typography>
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
export default ConstsIdentityShared