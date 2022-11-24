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

const header = 'Patika.Framework.Shared.Consts';
const Consts = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  

export default Consts