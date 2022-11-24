import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Repository',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    namespace Patika.Framework.Domain.Services
    {
        public abstract class Repository<T, TDbContext> 
            : GenericRepository<T, TDbContext, Guid>, IRepository<T> where T : class, 
            IEntity<Guid>, new() where TDbContext : DbContext
        {
            protected Repository(DbContextOptions<TDbContext> options) : base(options)
            {
            }
        }
    }`,
    descriptions: [
      ""
    ],
  }, 
]

const DomainRepository = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Domain.Services.Repository</Typography>
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

 
export default DomainRepository