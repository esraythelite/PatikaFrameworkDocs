import React from 'react'
import DocPaper from '../../../../DocPaper' 

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'LogWriter',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    namespace Patika.Framework.Domain.Services
    {
        public class LogWriter : CoreService, ILogWriter
        {
            ILogRepository LogRepository { get; }
    
            public LogWriter(IServiceProvider serviceProvider) : base(serviceProvider)
            {
                LogRepository = GetService<ILogRepository>();
            }`,
    descriptions: [
      "Constructor and props",
      "Writes logs to database over LogRepository"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'CreateLog',
    language: 'csharp',
    startingLineNumber: 27,
    item: `        
        public async Task<Log> CreateLog(string applicationName, Guid? userId = null, LogStatusEnum intialStatus = LogStatusEnum.Started)
        {
            var log = new Log
            {
                StartDateTime = DateTime.Now,
                Status = intialStatus,
                ApplicationName = applicationName
            };

            await LogRepository.InsertOneAsync(log);

            return log;
        }`,
    descriptions: [
      "Inserts log entity and returns it.",
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'AddLogDetail',
    language: 'csharp',
    startingLineNumber: 17,
    item: `
        public async Task AddLogDetail(Guid logId, LogDetail detail)
        {
            var log = await LogRepository.GetByIdAsync(logId);
            if (log is not null)
            {
                detail.LogId = log.Id;
                await LogRepository.AddDetail(log.Id, detail);
            }
        }`,
    descriptions: [
      "Inserts (adds) log detail to log."
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'FinishLog',
    language: 'csharp',
    startingLineNumber: 41,
    item: `
        public async Task FinishLog(Guid logId, LogStatusEnum finalStatus = LogStatusEnum.Success)
        {
            var log = await LogRepository.GetByIdAsync(logId);
            if (log is not null)
            {
                log.EndDateTime = DateTime.Now;
                log.Status = finalStatus;
                await LogRepository.UpdateOneAsync(log);
            }
        }

      }
    }`,
    descriptions: [
      "Update log with finalStatus",  
    ],
  }
]

const header = 'Patika.Framework.Domain.Services.LogWriter';
const LogWriter = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
export default LogWriter