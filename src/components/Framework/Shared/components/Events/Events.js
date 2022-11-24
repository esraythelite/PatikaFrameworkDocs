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
    title: 'ConfigurationEvents',
    language: 'csharp',
    startingLineNumber: 7,
    item: `namespace Patika.Framework.Shared.Events
    {
        public class ConfigurationEvents
        {
            public delegate void ConfigurationEventArgs(Configuration config);
    
            public static event ConfigurationEventArgs? ConfigurationChanged;
            private static Configuration LatestConfiguration { get; set; } = new();
    
            public static void NewConfiguration(Configuration configuration)
            {
                LatestConfiguration = configuration;
                ConfigurationChanged?.Invoke(configuration);
            }
    
            public static Configuration GetConfiguration() => LatestConfiguration;
        }
    }`,
    descriptions: [
      "Conditon operator is used in repositories to filter queries."
    ],
  } 
]

const header = 'Patika.Framework.Shared.Events';
const Events = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
} 

export default Events