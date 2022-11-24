import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'LogRepository',
    language: 'csharp',
    startingLineNumber: 10,
    item: `
    namespace Patika.Framework.Domain.Services
    {
        public class LogRepository : GenericRepository<Log, LogDbContext.LogDbContext, Guid>, ILogRepository
        {
            public LogRepository(DbContextOptions<LogDbContext.LogDbContext> config) : base(config) { }
    
            public async Task<LogDetail> AddDetail(Guid logId, LogDetail logDetail)
            {
                logDetail.LogId = logId;
                logDetail.CreatedAt = DateTime.Now;
                using var ctx = GetContext();
                ctx.Set<LogDetail>().Add(logDetail);
                await ctx.SaveChangesAsync();
                return logDetail;
            }
    
            protected override LogDbContext.LogDbContext GetContext() => new(DbOptions);
    
            protected override IQueryable<Log> GetDbSetWithIncludes(DbContext ctx) => ctx.Set<Log>().Include(x => x.Details);
        }
    }`,
    descriptions: [
      "Constructor and props",
      "Inherited from ILogRepository and GenericRepository",
      "It has all capabilities of GenericRepository",
      "AddDetail is a custom method to save logDetails",
      "This repository can be considered as example of how to define and customize a repository."
    ],
  }
]

const LogRepository = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Domain.Services.LogRepository</Typography>
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
export default LogRepository