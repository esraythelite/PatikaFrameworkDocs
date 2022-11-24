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


const header = 'Patika.Framework.Shared.Mapper';
const Mapper = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  
 
 
export default Mapper