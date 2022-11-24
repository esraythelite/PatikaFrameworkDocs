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
        title: 'AddCodeMileStoneLogAsync',
        language: 'csharp',
        startingLineNumber: 6,
        item: `
        namespace Patika.Framework.Shared.Extensions
        {
            public static class LogWriterExtensions
            {
                public static string ApplicationName { get; set; } = string.Empty;
                public static async Task AddCodeMileStoneLogAsync(
                    this ILogWriter Logger, 
                    IDTO dto, string message, 
                    Type type, 
                    object? input = null, 
                    object? output = null, 
                    Guid? userId = null, 
                    [CallerMemberName] string callerName = "")
                {
                    if (string.IsNullOrEmpty(dto.LogId))
                    {
                        dto.LogId = $"{(await Logger.CreateLog(ApplicationName)).Id}";
                    }
                    await Logger.AddLogDetail(new Guid(dto.LogId), new LogDetail
                    {
                        Module = type.FullName ?? "",
                        Method = callerName,
                        Description = message,
                        InputAsJson = input?.ToJson() ?? "",
                        OutputAsJson = output?.ToJson() ?? "",
                        LogType = Enums.LogTypeEnum.CodeMilestone,
                        UserId = userId ?? Guid.Empty,
                    });
                }`,
        descriptions: [
            "Creates log if dto.LogId is undefined",
            "Adds log details in type of CodeMilestone"
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'AddExceptionLogAsync',
        language: 'csharp',
        startingLineNumber: 36,
        item: ` 
            public static async Task AddExceptionLogAsync(
                this ILogWriter Logger, 
                IDTO dto, 
                Exception ex, 
                Type type, 
                Guid? userid = null, 
                [CallerMemberName] string callerName = "")
            {
                var exAsResponse = (GeneralResponseDTO<object>)ex;
                if (string.IsNullOrEmpty(dto.LogId))
                {
                    dto.LogId = $"{(await Logger.CreateLog(ApplicationName)).Id}";
                }
                await Logger.AddLogDetail(new Guid(dto.LogId), new LogDetail
                {
                    Module = type.FullName ?? "",
                    Method = callerName,
                    Description = $"{exAsResponse.Exception?.Code ?? "[No Exception Code]"} - {exAsResponse.Exception?.Message ?? "[No message]"}",
                    InputAsJson = dto?.ToJson() ?? "",
                    OutputAsJson = "{}",
                    LogType = LogTypeEnum.Exception,
                    UserId = userid ?? Guid.Empty,
                });
            }
        }
    }`,
        descriptions: [
            "Creates log if dto.LogId is undefined",
            "Adds log details in type of Exception",
            "Writes exception details to LogDetail Description"
        ],
    }     
]


const header = 'Patika.Framework.Shared.Extensions.LogWriterExtensions';
const LogWriterExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}    
export default LogWriterExtensions