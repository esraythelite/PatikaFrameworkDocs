import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'LogRepository',
    language: 'csharp',
    startingLineNumber: 10,
    item: `
    namespace Patika.Framework.Domain.Services
    {
        public class LogRepository : GenericRepository<Log, LogDbContext.LogDbContext, Guid>, ILogRepository
        {
            public LogRepository(DbContextOptions<LogDbContext.LogDbContext> config) : base(config) { }
    
            public async Task<LogDetail> AddDetail(Guid logId, LogDetail logDetail)
            {
                logDetail.LogId = logId;
                logDetail.CreatedAt = DateTime.Now;
                using var ctx = GetContext();
                ctx.Set<LogDetail>().Add(logDetail);
                await ctx.SaveChangesAsync();
                return logDetail;
            }
    
            protected override LogDbContext.LogDbContext GetContext() => new(DbOptions);
    
            protected override IQueryable<Log> GetDbSetWithIncludes(DbContext ctx) => ctx.Set<Log>().Include(x => x.Details);
        }
    }`,
    descriptions: [
      "Constructor and props",
      "Inherited from ILogRepository and GenericRepository",
      "It has all capabilities of GenericRepository",
      "AddDetail is a custom method to save logDetails",
      "This repository can be considered as example of how to define and customize a repository."
    ],
  }
]

const header = 'Patika.Framework.Domain.Services.LogRepository';
const LogRepository = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}    
 
export default LogRepository