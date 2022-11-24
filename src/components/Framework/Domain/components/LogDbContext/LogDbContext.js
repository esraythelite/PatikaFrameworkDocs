import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../../DocPaper'
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

const header = 'Patika.Framework.Domain.LogDbContext.LogDbContext';
const LogDbContext = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
export default LogDbContext