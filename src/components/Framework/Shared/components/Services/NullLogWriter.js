import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'NullLogWriter',
        language: 'csharp',
        startingLineNumber: 3,
        item: `
        namespace Patika.Framework.Shared.Services
        {
            public class NullLogWriter : ILogWriter
            {
                public Task AddLogDetail(Guid jobId, LogDetail detail)
                    => Task.CompletedTask;
        
                public Task<Log> CreateLog(string applicationName, Guid? userId = null, LogStatusEnum intialStatus = LogStatusEnum.Started)
                 => Task.FromResult(new Log() { });
        
                public Task FinishLog(Guid logId, LogStatusEnum finalStatus = LogStatusEnum.Success)
                => Task.CompletedTask;
            }
        }`,
        descriptions: [
            "Used for preventing null dependency injection of ILogWriter",
            "Actually it does nothing",  
        ],
    }
]

const NullLogWriter = () => {
    return (
        <Stack spacing={2} direction='column'>
            <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Services.NullLogWriter</Typography>
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
export default NullLogWriter