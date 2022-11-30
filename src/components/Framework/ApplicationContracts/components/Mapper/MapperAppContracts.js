import React from 'react'
import DocPaper from '../../../../DocPaper' 

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'MappingProfile',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Application.Contracts.Mapper
    {
        public abstract class MappingProfile
        {
            MapperConfiguration Configuration { get; set; }
            protected MapperConfigurationExpression MapperConfiguration { get; set; }
            public IMapper Mapper { get; private set; }
    
            public MappingProfile()
            {
                MapperConfiguration = new MapperConfigurationExpression();
                Configure();
                MapperConfiguration.AddCollectionMappers();
                Configuration = new MapperConfiguration(MapperConfiguration);
                Mapper = Configuration.CreateMapper();
            }
    
            protected abstract void Configure();
    
            protected IMappingExpression<TSource, TDestination> CreateMap<TSource, TDestination>() => MapperConfiguration.CreateMap<TSource, TDestination>();
            protected void CreateMapTwoSide<X, Y>()
            {
                CreateMap<X, Y>();
                CreateMap<Y, X>();
            }
    
        }
    }`,
    descriptions: [
      "Helps to map dto to entities vice versa"
    ],
  } 
]
const header = 'Patika.Framework.Application.Contracts.Mapper';
const MapperAppContracts = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
} 


export default MapperAppContracts