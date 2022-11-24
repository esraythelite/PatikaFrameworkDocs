import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../../DocPaper' 

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'BaseService',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    namespace Patika.Framework.Application.Services
    {
        public abstract class BaseService
        {
            public ILogWriter LogWriter { get; }
            public Configuration Configuration { get; }
    
            public BaseService(ILogWriter logger, Configuration configuration)
            {
                LogWriter = logger;
                Configuration = configuration;
            } `,
    descriptions: [
      "Constructor and props"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'WithLogging',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    public async Task<T> WithLogging<T>(
        IDTO input, 
        Type type, 
        Func<Task<T>> tryPart, 
        [CallerMemberName] string method = "") where T : class
    {
        // TODO:  await LogWriter.AddMethodStartLogAsync(input, type, input, callerName: method);
        var res = await tryPart();
        // TODO:  await LogWriter.AddMethodEndLogAsync(input, type, input, output: res, callerName: method);
        return res;
    } `,
    descriptions: [
      "WithLogging writes starts and end logs of service methods",
      "returns result type of T"
    ],
  } ,
  {
    order: 3,
    type: 'code',
    title: 'WithLogging',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    public async Task WithLogging(
        IDTO input, 
        Type type,
        Func<Task> tryPart,
        [CallerMemberName] string method = "")
    {
        // TODO: await LogWriter.AddMethodStartLogAsync(input, type, input, callerName: method);
        await tryPart();
        // TODO:  await LogWriter.AddMethodEndLogAsync(input, type, input, callerName: method);
    }`,
    descriptions: [
      "WithLogging writes starts and end logs of service methods",
      "returns nothing"
    ],
  }   
]

const header = 'Patika.Framework.Application.Services.BaseService';
const BaseService = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}  

export default BaseService