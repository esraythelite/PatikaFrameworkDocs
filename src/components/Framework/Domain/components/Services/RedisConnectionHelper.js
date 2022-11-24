import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'RedisConnectorHelper',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    namespace Patika.Framework.Domain.Services
    {
        public class RedisConnectorHelper
        {
            static bool EventListenerCofigured = false;
            private static ConnectionMultiplexer LazyConnection { get; set; } = null;
            public static IDatabase Db => Connection.GetDatabase();
            public static ConnectionMultiplexer Connection
            {
                get
                {
                    SetupListener();
                    return LazyConnection;
                }
            }
    
            private static void SetupListener()
            {
                if (!EventListenerCofigured)
                {
                    ConfigurationEvents.ConfigurationChanged += ConfigurationEvents_ConfigurationChanged;
                    EventListenerCofigured = true;
                }
                if (LazyConnection == null)
                {
                    try
                    {
                        LazyConnection = ConnectionMultiplexer.Connect(ConfigurationEvents.GetConfiguration().RedisHost);
                    }
                    catch
                    {
                        LazyConnection = null;
                    }
                }
            }
    
            private static void ConfigurationEvents_ConfigurationChanged(Configuration config)
            {
                LazyConnection = ConnectionMultiplexer.Connect(config.RedisHost);
            }
    
        }
    }`,
    descriptions: [
      "Helps you to connect Redis easily.", 
    ],
  }
]

const RedisConnectionHelper = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Domain.Services.RedisConnectionHelper</Typography>
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
export default RedisConnectionHelper