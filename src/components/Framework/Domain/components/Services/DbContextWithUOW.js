import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'DbContextWithUnitOfWork',
    language: 'csharp',
    startingLineNumber: 10,
    item: `
    namespace Patika.Framework.Domain.Services
    {
        public abstract class DbContextWithUnitOfWork<TDbContext>
            : DbContext, IUnitOfWorkHost, IUnitOfWorkHostEvents, IUnitOfWorkHostInterface, IUnitOfWorkHostWithInterface
            where TDbContext : DbContext
        {
            public DbContextWithUnitOfWork([NotNull] DbContextOptions options) : base(options)
            {
            }
    
            protected IDbContextTransaction? Transaction { get; private set; } = null;
    
            public object DbContext => this;
    
            public event EventHandler? Committed;
            public event EventHandler? RollBacked;`,
    descriptions: [
      "Props and constructor"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'BeginTransactionAsync',
    language: 'csharp',
    startingLineNumber: 67,
    item: `
        public async Task BeginTransactionAsync(CancellationToken cancellationToken = default)
        {
            if (Transaction == null)
                Transaction = await Database.BeginTransactionAsync(cancellationToken);
        }`,
    descriptions: [
      "Async begin transaction method"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'BeginTransaction',
    language: 'csharp',
    startingLineNumber: 73,
    item: `
        public void BeginTransaction()
        {
            if (Transaction == null)
                Transaction = Database.BeginTransaction();
        }`,
    descriptions: [
      "Sync begin transaction method"
    ],
  }, 
  {
    order: 4,
    type: 'code',
    title: 'CommitAsync',
    language: 'csharp',
    startingLineNumber: 27,
    item: `
        public async Task CommitAsync(CancellationToken cancellationToken = default)
        {
            if (Transaction == null)
                return;
            await Transaction.CommitAsync(cancellationToken);
            Committed?.Invoke(this, EventArgs.Empty);
            await Transaction.DisposeAsync();
            Transaction = null;
        }`,
    descriptions: [
      "Async commit method"
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'Commit',
    language: 'csharp',
    startingLineNumber: 37,
    item: ` 
        public void Commit()
        {
            if (Transaction == null)
                return;
            Transaction.Commit();
            Committed?.Invoke(this, EventArgs.Empty);
            Transaction.Dispose();
            Transaction = null;
        }`,
    descriptions: [
      "Sync commit method"
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'RollbackAsync',
    language: 'csharp',
    startingLineNumber: 47,
    item: `
        public async Task RollbackAsync(CancellationToken cancellationToken = default)
        {
            if (Transaction == null)
                return;
            await Transaction.RollbackAsync(cancellationToken);
            RollBacked?.Invoke(this, EventArgs.Empty);
            await Transaction.DisposeAsync();
            Transaction = null;
        }`,
    descriptions: [
      "Async rollback method"
    ],
  },
  {
    order: 7,
    type: 'code',
    title: 'Rollback',
    language: 'csharp',
    startingLineNumber: 57,
    item: `
        public void Rollback()
        {
            if (Transaction == null)
                return;
            Transaction.Rollback();
            RollBacked?.Invoke(this, EventArgs.Empty);
            Transaction.Dispose();
            Transaction = null;
        }`,
    descriptions: [
      "Sync rollback method"
    ],
  },
]

const header = 'Patika.Framework.Domain.Services.DbContextWithUnitOfWork';
const DbContextWithUOW = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
export default DbContextWithUOW