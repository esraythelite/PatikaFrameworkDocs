import React from 'react'
import DocPaper from '../../../../DocPaper'

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

const header = 'Patika.Framework.Domain.Services.RedisConnectionHelper';
const RedisConnectionHelper = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
export default RedisConnectionHelper