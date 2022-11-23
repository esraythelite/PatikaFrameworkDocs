import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'SharedMappingProfile',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Shared.Mapper
    {
        internal class SharedMappingProfile 
        {
            MapperConfiguration Configuration { get; set; }
            MapperConfigurationExpression MapperConfiguration { get; set; }
            public IMapper Mapper { get; private set; }
            public SharedMappingProfile()
            {
                MapperConfiguration = new MapperConfigurationExpression();
                Configure();
                MapperConfiguration.AddCollectionMappers();
                Configuration = new MapperConfiguration(MapperConfiguration);
                Mapper = Configuration.CreateMapper();
            }
    
            protected  void Configure()
            {
            }
        }
    }`,
    descriptions: [ 
      "We are using Automapper nuget package for entity <> dto mappings.",
      "Setups mapping Congfiguration",
      "Creates Mapper"
    ],
  } 
]

const Mapper = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Mapper</Typography>
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
 
export default Mapper