import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'DbConnectionNames',
        language: 'csharp',
        startingLineNumber: 7,
        item: `namespace Patika.Framework.Shared.Consts
{
    public static class DbConnectionNames
    {
        public const string Main = "MAIN_DB";
        public const string Auth = "AUTH_DB";
        public const string Log = "LOG_DB";
    }
}`,
        descriptions: [
            "Used for seperating Database Configuration",
            "Filling by Configuration provider like appsettings.",
            "MAIN_DB is for Main Database of microservice",
            "AUTH_DB is for Authserver Database",
            "LOG_DB is for Log Database" 
        ],
    }
]

const Consts = () => {
    return (
        <Stack spacing={2} direction='column'>
            <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Consts</Typography>
            {contents.sort((a, b) => (a.order - b.order)).map((content) => {
                return (
                    content.type === 'code' ? <>
                        <Highlighter key={content.order} title={content.title} descriptions={content.descriptions} code={content.item} language={content.language} startingLineNumber = {content.startingLineNumber} />
                    </>
                        :
                        <>  <ImageItem key={content.order} item={content.item}></ImageItem></>
                )
            })}
        </Stack>
    )
}

export default Consts