import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../../DocPaper'
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
  },
  {
    order: 10,
    type: 'code',
    title: 'ILogWriter',
    language: 'csharp',
    item: `
namespace Patika.Framework.Shared.Interfaces
{
    public interface ILogWriter
    {
        Task<Log> CreateLog(string applicationName, Guid? userId = null, LogStatusEnum intialStatus = LogStatusEnum.Started);
        Task AddLogDetail(Guid logId, LogDetail detail);
        Task FinishLog(Guid logId, LogStatusEnum finalStatus = LogStatusEnum.Success);
    }
}`,
    descriptions: [
      "Writes logs ",
      "You can inject logWriter as Db, file etc"
    ],
  }
]

const header = 'Patika.Framework.Shared.Interfaces';
const Interfaces = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}      

export default Interfaces