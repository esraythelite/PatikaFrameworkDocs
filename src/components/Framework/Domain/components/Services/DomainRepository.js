import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Repository',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    namespace Patika.Framework.Domain.Services
    {
        public abstract class Repository<T, TDbContext> 
            : GenericRepository<T, TDbContext, Guid>, IRepository<T> where T : class, 
            IEntity<Guid>, new() where TDbContext : DbContext
        {
            protected Repository(DbContextOptions<TDbContext> options) : base(options)
            {
            }
        }
    }`,
    descriptions: [
      ""
    ],
  }, 
]

const header = 'Patika.Framework.Domain.Services.Repository';
const DomainRepository = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}   
 
export default DomainRepository