import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IMultiTenant',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.Shared.Interfaces
    {
        public interface IMultiTenant 
        {
            Guid TenantId { get; set; }  
        }
    }`,
    descriptions: [
      "This interface will add TenantId to entities inherited from it",
      "All entities have to be multitenant must be inherited from this interface"
    ],
  }
]

const InterfacesIdentityShared = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Framework.Identity.Shared.Interfaces</Typography>
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
export default InterfacesIdentityShared