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

const header = 'Patika.Framework.Shared.Services';
const NullLogWriter = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}    
export default NullLogWriter