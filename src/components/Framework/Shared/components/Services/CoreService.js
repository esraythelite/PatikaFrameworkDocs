import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'CoreService',
        language: 'csharp',
        startingLineNumber: 10,
        item: `
        namespace Patika.Framework.Shared.Services
        {
            public abstract class CoreService 
            {
                public IServiceProvider ServiceProvider { get; }
                protected T GetService<T>() => ServiceProvider.GetService<T>() 
                    ?? throw new ServiceNotInjectedException($"{typeof(T).FullName}");
        
                public CoreService(IServiceProvider serviceProvider)
                {
                    ServiceProvider = serviceProvider; 
                }
            }
        }`,
        descriptions: [
            "Any implementation of any interface must be extended from CoreService",
            "ServiceProvider used for getting injected services",
        ],
    }
]
 
const header = 'Patika.Framework.Shared.Services.CoreService';
const CoreService = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  
 

export default CoreService