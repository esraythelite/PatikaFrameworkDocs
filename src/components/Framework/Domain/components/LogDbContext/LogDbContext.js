import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'LogDbContext',
    language: 'csharp',
    startingLineNumber: 9,
    item: `
    namespace Patika.Framework.Domain.LogDbContext
    {
        public partial class LogDbContext : DbContextWithUnitOfWork<LogDbContext>
        {
            public LogDbContext(DbContextOptions<LogDbContext> options)
                : base(options)
            {
            }
    
            internal DbSet<Log>? Logs { get; set; }
            internal DbSet<LogDetail>? LogDetails { get; set; }`,
    descriptions: [
      "Created Logs and LogDetails tables"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'OnModelCreating',
    language: 'csharp',
    startingLineNumber: 21,
    item: `
            potected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<LogDetail>()
                    .HasOne(s => s.Log)
                    .WithMany(g => g.Details)
                    .HasForeignKey(s => s.LogId);
            }
        }
    }`,
    descriptions: [
      "Sets entity relations"
    ],
  }
]

const LogDbContext = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Domain.LogDbContext.LogDbContext</Typography>      
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
export default LogDbContext