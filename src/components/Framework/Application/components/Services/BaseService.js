import React from 'react'
import DocPaper from '../../../../DocPaper' 

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'BaseService',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    namespace Patika.Framework.Application.Services
    {
        public abstract class BaseService : CoreService
        {
            public ILogWriter LogWriter { get; }
            public Configuration Configuration { get; }
    
            public BaseService(IServiceProvider serviceProvider) : base(serviceProvider)
            {
                LogWriter = GetService<ILogWriter>();
                Configuration = GetService<Configuration>();
            }`,
    descriptions: [
      "Constructor and props",
      "Inherited from CoreService for using the same common ServiceProvider"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'WithLogging',
    language: 'csharp',
    startingLineNumber: 18,
    item: `
    public async Task<T> WithLogging<T>(
        IDTO input, 
        Type type, 
        Func<Task<T>> tryPart, 
        [CallerMemberName] string method = "") where T : class
    {
        // TODO:  await LogWriter.AddMethodStartLogAsync(input, type, input, callerName: method);
        var res = await tryPart();
        // TODO:  await LogWriter.AddMethodEndLogAsync(input, type, input, output: res, callerName: method);
        return res;
    } `,
    descriptions: [
      "WithLogging writes starts and end logs of service methods",
      "returns result type of T"
    ],
  } ,
  {
    order: 3,
    type: 'code',
    title: 'WithLogging',
    language: 'csharp',
    startingLineNumber: 30,
    item: `
    public async Task WithLogging(
        IDTO input, 
        Type type,
        Func<Task> tryPart,
        [CallerMemberName] string method = "")
    {
        // TODO: await LogWriter.AddMethodStartLogAsync(input, type, input, callerName: method);
        await tryPart();
        // TODO:  await LogWriter.AddMethodEndLogAsync(input, type, input, callerName: method);
    }`,
    descriptions: [
      "WithLogging writes starts and end logs of service methods",
      "returns nothing"
    ],
  }   
]

const header = 'Patika.Framework.Application.Services.BaseService';
const BaseService = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}  

export default BaseService