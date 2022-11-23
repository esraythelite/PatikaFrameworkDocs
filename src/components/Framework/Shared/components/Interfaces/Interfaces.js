import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IEntity',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Shared.Interfaces
    {
        public interface IEntity<TIDType> where TIDType : struct
        {
            TIDType Id { get; set; }
        }
    }`,
    descriptions: [
      "Base Entity interface with generic Id type",
      "TIDType can be Guid, string, long, int etc.",
      "We prefer Guid :) "
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'IHasCreated',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Shared.Interfaces
    {
        public interface IHasCreated
        {
            public DateTime CreatedAt { get; set; }
        }
    }`,
    descriptions: [
      "If your entity inherited from IHasCreated, it will have CreatedAt field."
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'IHasUpdated',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Shared.Interfaces
    {
        public interface IHasUpdated
        {
            public DateTime? UpdatedAt { get; set; }
        }
    }`,
    descriptions: [
      "If your entity inherited from IHasUpdated, it will have nullable UpdatedAt field."
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'ILogicalDelete',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Shared.Interfaces
    {
        public interface ILogicalDelete
        {
            bool IsDeleted { get; set; }
        }
    }`,
    descriptions: [
      "If your entity inherited from ILogicalDelete, it will have IsDeleted field.",
      "If an entity is inherited from ILogicalDelete, IsDeleted flag will be set true on delete action. This is soft delete.",
      "If an entity is not inherited from ILogicalDelete, it will removed from database on delete action. This is hard delete."
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'ICachableEntity',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Shared.Interfaces
    {
        public interface ICachableEntity
        {
            string GetCacheKey() => GetType().FullName ?? "";
            TimeSpan? GetExpireTime() => new (TimeSpan.TicksPerDay * 365);
        }
    }`,
    descriptions: [
      "If your entity inherited from ICachableEntity, it will be cached",
      "On any cahanges on collection of the entity, cache will updated",
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'IMigrationStep',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Shared.Interfaces
    {
        public interface IMigrationStep
        {
            Task EnsureMigrationAsync();
        }
    }`,
    descriptions: [
      "Use this interface if your database need auto migration on startup"
    ],
  },
  {
    order: 7,
    type: 'code',
    title: 'IDTO',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Shared.Interfaces
    {
        public interface IDTO
        {
            public string LogId { get; set; }
        }
    }`,
    descriptions: [
      "All dto objects must be inherited from this interface."
    ],
  },
  {
    order: 8,
    type: 'code',
    title: 'ISimpleHash',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Shared.Interfaces
    {
        public interface ISimpleHash
        {
            string Hash(string input);
        }
    }`,
    descriptions: [
      "Provides Hash method signature."
    ],
  },
  {
    order: 9,
    type: 'code',
    title: 'IStorage',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Shared.Interfaces
    {
        public interface IStorage<T> where T : class
        {
            Task SetAsync(string key, T value);
            Task<T?> TryGetAsync(string key);
            Task RemoveAsync(string key);
        }
    }`,
    descriptions: [
      "Provides basic storage methods"
    ],
  }
]

const Interfaces = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Interfaces</Typography>
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


export default Interfaces