import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

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

const Uow = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Domain.Interfaces.UnitOfWork</Typography>
      <Typography variant='body1' sx={{ mb: 2 }}>
        <Paper sx={{ mb: 2, p:2 }}>
          UnitOfWork is used for cascading transactions. <br />
          If all transactions are applied as successfully then UnitOfWork will committed. <br />
          Otherwise all applied transactions will be roll backed with exception message..<br />
          The interfaces below are using in repositories to handle cascading transactions.<br />
          You do not need to use all of them. <br />
          Just use IUnitOfWorkHostInterface in application service to control cascading transactions.<br />
        </Paper>
      </Typography>
      {contents.sort((a, b) => (a.order - b.order)).map((content) => {
        return (
          content.type === 'code' ? <>
            <Highlighter key={content.order} title={content.title} descriptions={content.descriptions} code={content.item} language={content.language} startingLineNumber={content.startingLineNumber} />
          </>
            :
            <>  <ImageItem key={content.order} item={content.item}></ImageItem></>
        )
      })}
    </Stack>
  )
}
export default Uow