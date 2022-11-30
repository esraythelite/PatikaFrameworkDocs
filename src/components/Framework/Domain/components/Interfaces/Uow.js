import React from 'react'
import DocPaper from '../../../../DocPaper' 

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IUnitOfWork',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
        namespace Patika.Framework.Domain.Interfaces.UnitOfWork
        {
            public interface IUnitOfWork<IDbContext>
            {
                IDbContext DbContext { get; set; }
            }
        }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'IUnitOfWorkHost',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
      namespace Patika.Framework.Domain.Interfaces.UnitOfWork
      {
          public interface IUnitOfWorkHost
          {
              Task BeginTransactionAsync(CancellationToken cancellationToken = default);
              void BeginTransaction();
              Task CommitAsync(CancellationToken cancellationToken = default);
              void Commit();
              Task RollbackAsync(CancellationToken cancellationToken = default);
              void Rollback();
          }
      }`,
    descriptions: [
      ""
    ],
  },

  {
    order: 3,
    type: 'code',
    title: 'IUnitOfWorkHostEvents',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Domain.Interfaces.UnitOfWork
    {
        public interface IUnitOfWorkHostEvents
        {
            event EventHandler Committed;
            event EventHandler RollBacked;
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'IUnitOfWorkHostInterface',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Domain.Interfaces.UnitOfWork
    {
        public interface IUnitOfWorkHostInterface : IUnitOfWorkHostEvents
        {
            object DbContext { get; }
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'IUnitOfWorkHostInterface',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Domain.Interfaces.UnitOfWork
    {
        public interface IUnitOfWorkHostWithInterface : IUnitOfWorkHostInterface, IUnitOfWorkHost
        {
        }
    }`,
    descriptions: [
      ""
    ],
  }
]
const header = 'Patika.Framework.Domain.Interfaces.UnitOfWork';
const commonDetails = [ 
    "UnitOfWork is used for cascading transactions.",
    "If all transactions are applied as successfully then UnitOfWork will committed. ",
    "Otherwise all applied transactions will be roll backed with exception message.",
    "The interfaces below are using in repositories to handle cascading transactions.",
    "You do not need to use all of them. ",
    "Just use IUnitOfWorkHostInterface in application service to control cascading transactions.",
]
const Uow = () => {
  return (
    <DocPaper header={header} contents={contents} commonDetails = {commonDetails} />     
  )
} 
export default Uow