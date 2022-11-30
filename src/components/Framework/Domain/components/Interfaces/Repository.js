import React from 'react'
import DocPaper from '../../../../DocPaper' 

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IGenericCUDRepository',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    namespace Patika.Framework.Domain.Interfaces.Repository
    {
        public interface IGenericCUDRepository<T, U> where T : IEntity<U> where U : struct
        {
            Task<T> InsertOneAsync(T entity, IUnitOfWorkHostInterface? unitOfWorkHost = null, CancellationToken cancellationToken = default);
            Task<IEnumerable<T>> InsertManyAsync(IEnumerable<T> entities, IUnitOfWorkHostInterface? unitOfWorkHost = null, CancellationToken cancellationToken = default);
            Task UpdateOneAsync(T entity, IUnitOfWorkHostInterface? unitOfWorkHost = null, Expression<Func<T, object>>? includes = null, CancellationToken cancellationToken = default);
            Task UpdateManyAsync(IEnumerable<T> entities, IUnitOfWorkHostInterface? unitOfWorkHost = null, Expression<Func<T, object>>? includes = null, CancellationToken cancellationToken = default);
            Task DeleteOneAsync(T entity, IUnitOfWorkHostInterface? unitOfWorkHost = null, CancellationToken cancellationToken = default);
            Task DeleteManyAsync(IEnumerable<T> entities, IUnitOfWorkHostInterface? unitOfWorkHost = null, CancellationToken cancellationToken = default);
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'IGenericQueryRepository',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    namespace Patika.Framework.Domain.Interfaces.Repository
    {
        public interface IGenericQueryRepository<T, U> where T : IEntity<U> where U : struct
        {
            Task<IEnumerable<T>> GetAllAsync(Pagination? pagination = default, List<Sort>? sorts = default, bool includeLogicalDeleted = false, CancellationToken cancellationToken = default);
            Task<IEnumerable<T>> WhereAsync(Expression<Func<T, bool>>? selector, bool includeAll = false, Pagination? pagination = default, List<Sort>? sorts = default, bool includeLogicalDeleted = false, CancellationToken cancellationToken = default);
            Task<T?> GetByIdAsync(U id, bool includeAll = false, bool includeLogicalDeleted = false, CancellationToken cancellationToken = default);
            Task<T?> FirstOrDefaultAsync(Expression<Func<T, bool>>? selector = null, bool includeAll = false, bool includeLogicalDeleted = false, CancellationToken cancellationToken = default);
            Task<T?> LastOrDefaultAsync(Expression<Func<T, bool>>? selector = null, bool includeAll = false, bool includeLogicalDeleted = false, CancellationToken cancellationToken = default);
            Task<T?> SingleOrDefaultAsync(Expression<Func<T, bool>>? selector = null, bool includeAll = false, bool includeLogicalDeleted = false, CancellationToken cancellationToken = default);
            Task<T> SingleAsync(Expression<Func<T, bool>>? selector = null, bool includeAll = false, bool includeLogicalDeleted = false, CancellationToken cancellationToken = default);
            Task<int> CountAsync(Expression<Func<T, bool>>? selector = null, bool includeLogicalDeleted = false, CancellationToken cancellationToken = default);
            Task<bool> AnyAsync(Expression<Func<T, bool>>? selector = null, bool includeLogicalDeleted = false, CancellationToken cancellationToken = default);
            void SetMaxSelectCount(int count);
            Task ResetCacheAsync();
        `,
    descriptions: [
      ""
    ],
  },

  {
    order: 3,
    type: 'code',
    title: 'ICUDRepository',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Domain.Interfaces.Repository
    {
        public interface ICUDRepository<T> : IGenericCUDRepository<T, Guid> where T : IEntity<Guid>
        {
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'IQueryRepository',
    language: 'csharp',
    startingLineNumber:2,
    item: `
    namespace Patika.Framework.Domain.Interfaces.Repository
    {
        public interface IQueryRepository<T> : IGenericQueryRepository<T, Guid> where T : IEntity<Guid>
        {
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'IGenericRepository',
    language: 'csharp',
    startingLineNumber: 2,
    item: `
    namespace Patika.Framework.Domain.Interfaces.Repository
    {
        public interface IGenericRepository<T, U> : IGenericQueryRepository<T, U>, IGenericCUDRepository<T, U> where T : IEntity<U> where U : struct
        {

        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'IRepository',
    language: 'csharp',
    startingLineNumber: 2,
    item: `
    namespace Patika.Framework.Domain.Interfaces.Repository
    {
        public interface IRepository<T> : IGenericRepository<T, Guid> where T : IEntity<Guid>
        { 
        }
    }`,
    descriptions: [
      "General purpose repository interface."
    ],
  },
  {
    order: 7,
    type: 'code',
    title: 'ILogRepository',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Domain.Interfaces.Repository
    {
        public interface ILogRepository : IGenericRepository<Log, Guid>
        {
            Task<LogDetail> AddDetail(Guid logId, LogDetail logDetail);
        }
    }`,
    descriptions: [
      "Deals with Log Entity Cud and Query requests and Adds log details"
    ],
  }
]
const header = 'Patika.Framework.Domain.Interfaces.Repository';
const Repository = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
} 
export default Repository