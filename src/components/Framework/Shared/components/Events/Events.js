import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
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

const Events = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Events</Typography>
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
 

export default Events