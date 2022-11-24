import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'LogWriter',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    namespace Patika.Framework.Domain.Services
    {
        public class LogWriter : ILogWriter
        {
            ILogRepository LogRepository { get; }
    
            public LogWriter(ILogRepository logRepository)
            {
                LogRepository = logRepository;
            }`,
    descriptions: [
      "Constructor and props",
      "Writes logs to database over LogRepository"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'CreateLog',
    language: 'csharp',
    startingLineNumber: 26,
    item: `        
        public async Task<Log> CreateLog(string applicationName, Guid? userId = null, LogStatusEnum intialStatus = LogStatusEnum.Started)
        {
            var log = new Log
            {
                StartDateTime = DateTime.Now,
                Status = intialStatus,
                ApplicationName = applicationName
            };

            await LogRepository.InsertOneAsync(log);

            return log;
        }`,
    descriptions: [
      "Inserts log entity and returns it.",
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'AddLogDetail',
    language: 'csharp',
    startingLineNumber: 16,
    item: `
        public async Task AddLogDetail(Guid logId, LogDetail detail)
        {
            var log = await LogRepository.GetByIdAsync(logId);
            if (log is not null)
            {
                detail.LogId = log.Id;
                await LogRepository.AddDetail(log.Id, detail);
            }
        }`,
    descriptions: [
      "Inserts (adds) log detail to log."
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'FinishLog',
    language: 'csharp',
    startingLineNumber: 40,
    item: `
        public async Task FinishLog(Guid logId, LogStatusEnum finalStatus = LogStatusEnum.Success)
        {
            var log = await LogRepository.GetByIdAsync(logId);
            if (log is not null)
            {
                log.EndDateTime = DateTime.Now;
                log.Status = finalStatus;
                await LogRepository.UpdateOneAsync(log);
            }
        }

      }
    }`,
    descriptions: [
      "Update log with finalStatus",  
    ],
  }
]

const LogWriter = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Domain.Services.LogWriter</Typography>
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
export default LogWriter