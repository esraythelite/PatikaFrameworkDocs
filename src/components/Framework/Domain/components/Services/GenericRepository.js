import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'GenericRepository',
    language: 'csharp',
    startingLineNumber: 10,
    item: `
    namespace Patika.Framework.Domain.Services
    {
        public abstract class GenericRepository<T, TDbContext, U>
            : IGenericRepository<T, U> where T : class,
            IEntity<U>, new() where TDbContext : DbContext where U : struct
        {
            private const string IsNotLogicalDeletedWhereClause = $"{nameof(ILogicalDelete.IsDeleted)} = false";
            protected DbContextOptions<TDbContext> DbOptions { get; }
            protected int DefaultMaxCountForSelect { get; private set; } = 200;
            private static IDatabase CacheDb => RedisConnectorHelper.Db;
            protected bool IsLogicalDelete { get; }
            protected bool IsCachable { get; }
            protected string CacheKey { get; } = string.Empty;
            protected TimeSpan? CacheTimeout { get; }
    
            public GenericRepository(DbContextOptions<TDbContext> options)
            {
                DbOptions = options;
                IsLogicalDelete = typeof(T).GetInterface($"{typeof(ILogicalDelete).FullName}", true) != null;
                IsCachable = typeof(T).GetInterface(typeof(ICachableEntity).Name, true) != null;
                if (IsCachable)
                {
                    CacheKey = ((ICachableEntity)new T()).GetCacheKey();
                    CacheTimeout = ((ICachableEntity)new T()).GetExpireTime();
                }
            }`,
    descriptions: [
      "Constructor and props"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'GetAllAsync',
    language: 'csharp',
    startingLineNumber: 37,
    item: `
        public virtual async Task<IEnumerable<T>> GetAllAsync(
            Pagination? pagination = default,
            List<Sort>? sorts = default,
            bool includeLogicalDeleted = false,
            CancellationToken cancellationToken = default)
        {
            if (!IsCachable)
            {
                using var ctx = GetContext();
                if (IsLogicalDelete && !includeLogicalDeleted)
                    return await ctx.Set<T>()
                        .WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause)
                        .SortBy(sorts).PaginateAsync(pagination, DefaultMaxCountForSelect);
                return await ctx.Set<T>()
                    .SortBy(sorts)
                    .PaginateAsync(pagination, DefaultMaxCountForSelect);
            }

            var cachedData = await GetCachedData(cancellationToken);

            if (cachedData.IsNullOrEmpty)
                return Enumerable.Empty<T>();

            var lst = JsonSerializer.Deserialize<IEnumerable<T>>(cachedData);

            if (IsLogicalDelete && !includeLogicalDeleted)
                lst = lst.AsQueryable()
                    .WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause);
            return await lst.AsQueryable()
                .SortBy(sorts)
                .PaginateAsync(pagination, DefaultMaxCountForSelect);
        }`,
    descriptions: [
      "Returns all data from table ",
      "Sorts data by sorts if sorts is defined",
      "Paginates data by pagination if pagination is defined",
      "Gets data from cache if entity is Cachable. (By using ICachable interface)",
      "Includes deleted if entity is inherited from ILogicalDelete and includeLogicalDeleted is equals to true"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'WhereAsync',
    language: 'csharp',
    startingLineNumber: 70,
    item: `
        public virtual async Task<IEnumerable<T>> WhereAsync(
          Expression<Func<T, bool>>? selector = null,
          bool includeAll = false,
          Pagination? pagination = null,
          List<Sort>? sorts = null,
          bool includeLogicalDeleted = false,
          CancellationToken cancellationToken = default)
      {
          if (!IsCachable)
          {
              using var ctx = GetContext();
              return await GetWithIncludeFlag(includeAll, ctx, includeLogicalDeleted)
                  .Where(selector)
                  .AsQueryable()
                  .SortBy(sorts)
                  .PaginateAsync(pagination, DefaultMaxCountForSelect);
          }

          var lst = JsonSerializer.Deserialize<IEnumerable<T>>(await GetCachedData(cancellationToken));

          if (IsLogicalDelete && !includeLogicalDeleted)
              lst = lst.AsQueryable()
                  .WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause)
                  .Where(selector.Compile());
          return await lst.Where(selector.Compile()).AsQueryable()
              .SortBy(sorts)
              .PaginateAsync(pagination, DefaultMaxCountForSelect);
      }`,
    descriptions: [
      "Same as GetAllAsync but you can filter query by selector expression"
    ],
  }, 
  {
    order: 4,
    type: 'code',
    title: 'GetByIdAsync',
    language: 'csharp',
    startingLineNumber: 99,
    item: `
    public virtual async Task<T?> GetByIdAsync(
      U id, bool includeAll = false,
      bool includeLogicalDeleted = false,
      CancellationToken cancellationToken = default)
      => await SingleOrDefaultAsync(x => x.Id.Equals(id), includeAll, includeLogicalDeleted, cancellationToken);`,
    descriptions: [
      "Returns entity by Id",
      "Returns entity with sub entities if includeAll is true", 
      "Includes deleted if entity is inherited from ILogicalDelete and includeLogicalDeleted is equals to true",
      "It will fails if table contains more than 1 entities with same Id. (SingleOrDefaultAsync)"
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'FirstOrDefaultAsync',
    language: 'csharp',
    startingLineNumber: 104,
    item: `
    public virtual async Task<T?> FirstOrDefaultAsync(
      Expression<Func<T, bool>>? selector = null,
      bool includeAll = false,
      bool includeLogicalDeleted = false,
      CancellationToken cancellationToken = default)
    {
        if (!IsCachable)
        {
            using var ctx = GetContext();
            return await GetWithIncludeFlag(includeAll, ctx, includeLogicalDeleted)
                .FirstOrDefaultAsync(selector, cancellationToken);
        }
        var lst = JsonSerializer.Deserialize<IEnumerable<T>>(await GetCachedData(cancellationToken));
        if (IsLogicalDelete && !includeLogicalDeleted)
            lst = lst.AsQueryable().WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause);
        return selector == null
            ? lst.FirstOrDefault()
            : lst.FirstOrDefault(selector.Compile());
    }`,
    descriptions: [
      "Returns entity by expression",
      "Returns entity with sub entities if includeAll is true", 
      "Includes deleted if entity is inherited from ILogicalDelete and includeLogicalDeleted is equals to true",
      "It will not fails if table contains more than 1 entities with same expression. Returns the first one"
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'LastOrDefaultAsync',
    language: 'csharp',
    startingLineNumber: 124,
    item: `
    public virtual async Task<T?> LastOrDefaultAsync(
        Expression<Func<T, bool>>? selector = null,
        bool includeAll = false,
        bool includeLogicalDeleted = false,
        CancellationToken cancellationToken = default)
    {
        if (!IsCachable)
        {
            using var ctx = GetContext();
            return await GetWithIncludeFlag(includeAll, ctx, includeLogicalDeleted)
                .LastOrDefaultAsync(selector, cancellationToken);
        }
        var lst = JsonSerializer.Deserialize<IEnumerable<T>>(await GetCachedData(cancellationToken));
        if (IsLogicalDelete && !includeLogicalDeleted)
            lst = lst.AsQueryable().WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause);
        return selector == null
            ? lst.LastOrDefault()
            : lst.LastOrDefault(selector.Compile());
    }`,
    descriptions: [
      "Returns entity by Id",
      "Returns entity with sub entities if includeAll is true", 
      "Includes deleted if entity is inherited from ILogicalDelete and includeLogicalDeleted is equals to true",
      "It will not fails if table contains more than 1 entities with same expression. Returns the last one"
   
    ],
  },
  {
    order: 7,
    type: 'code',
    title: 'SingleOrDefaultAsync',
    language: 'csharp',
    startingLineNumber: 144,
    item: `
    public virtual async Task<T?> SingleOrDefaultAsync(
      Expression<Func<T, bool>>? selector = null,
      bool includeAll = false,
      bool includeLogicalDeleted = false,
      CancellationToken cancellationToken = default)
    {
        if (!IsCachable)
        {
            using var ctx = GetContext();
            return await GetWithIncludeFlag(includeAll, ctx, includeLogicalDeleted)
                .SingleOrDefaultAsync(selector, cancellationToken);
        }
        var lst = JsonSerializer.Deserialize<IEnumerable<T>>(await GetCachedData(cancellationToken));
        if (IsLogicalDelete && !includeLogicalDeleted)
            lst = lst.AsQueryable().WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause);
        return selector == null
            ? lst.SingleOrDefault()
            : lst.SingleOrDefault(selector.Compile());
    }`,
    descriptions: [
      "Returns entity by expression",
      "Returns entity with sub entities if includeAll is true", 
      "Includes deleted if entity is inherited from ILogicalDelete and includeLogicalDeleted is equals to true",
      "It will fails if table contains more than 1 entities with same expression."    
    ],
  },
  {
    order: 8,
    type: 'code',
    title: 'SingleAsync',
    language: 'csharp',
    startingLineNumber: 164,
    item: `
    public virtual async Task<T> SingleAsync(
      Expression<Func<T, bool>>? selector = null,
      bool includeAll = false,
      bool includeLogicalDeleted = false,
      CancellationToken cancellationToken = default)
    {
        if (!IsCachable)
        {
            using var ctx = GetContext();
            return await GetWithIncludeFlag(includeAll, ctx, includeLogicalDeleted)
                .SingleAsync(selector, cancellationToken);
        }
        var lst = JsonSerializer.Deserialize<IEnumerable<T>>(await GetCachedData(cancellationToken));
        if (IsLogicalDelete && !includeLogicalDeleted)
            lst = lst.AsQueryable().WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause);
        return selector == null
            ? lst.Single()
            : lst.Single(selector.Compile());
    }`,
    descriptions: [
      "Returns entity by expression",
      "Returns entity with sub entities if includeAll is true", 
      "Includes deleted if entity is inherited from ILogicalDelete and includeLogicalDeleted is equals to true",
      "It will fails if table contains more than 1 entities with same expression." ,
      "It will fails if no data found."
    ],
  },
  {
    order: 9,
    type: 'code',
    title: 'CountAsync',
    language: 'csharp',
    startingLineNumber: 184,
    item: `
    public virtual async Task<int> CountAsync(
      Expression<Func<T, bool>>? selector = null,
      bool includeLogicalDeleted = false,
      CancellationToken cancellationToken = default)
    {
        if (!IsCachable)
        {
            using var ctx = GetContext();
            if (IsLogicalDelete && !includeLogicalDeleted)
                return await ctx.Set<T>().WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause).CountAsync();
            return selector == null
                ? await ctx.Set<T>().CountAsync(cancellationToken)
                : await ctx.Set<T>().CountAsync(selector, cancellationToken);
        }

        var lst = JsonSerializer.Deserialize<IEnumerable<T>>(await GetCachedData(cancellationToken));
        if (IsLogicalDelete && !includeLogicalDeleted)
            lst = lst.AsQueryable().WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause);
        return selector == null
            ? await lst.AsQueryable().CountAsync(cancellationToken)
            : await lst.AsQueryable().CountAsync(selector, cancellationToken);
    }`,
    descriptions: [
      "Returns items count by expression", 
      "Includes deleted records if entity is inherited from ILogicalDelete and includeLogicalDeleted is equals to true",
    ],
  },
  {
    order: 10,
    type: 'code',
    title: 'AnyAsync',
    language: 'csharp',
    startingLineNumber: 207,
    item: `
    public virtual async Task<bool> AnyAsync(
      Expression<Func<T, bool>>? selector = null,
      bool includeLogicalDeleted = false,
      CancellationToken cancellationToken = default)
    {
        if (!IsCachable)
        {
            using var ctx = GetContext();
            if (IsLogicalDelete && !includeLogicalDeleted)
                return await ctx.Set<T>()
                    .WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause)
                    .AnyAsync(selector, cancellationToken);
            return selector == null
                ? await ctx.Set<T>().AnyAsync(cancellationToken)
                : await ctx.Set<T>().AnyAsync(selector, cancellationToken);
        }

        var lst = JsonSerializer.Deserialize<IEnumerable<T>>(await GetCachedData(cancellationToken));
        if (IsLogicalDelete && !includeLogicalDeleted)
            lst = lst.AsQueryable().WhereIf(IsLogicalDelete, IsNotLogicalDeletedWhereClause);
        return selector == null
            ? await lst.AsQueryable().AnyAsync(cancellationToken)
            : await lst.AsQueryable().AnyAsync(selector, cancellationToken);
    }`,
    descriptions: [
      "Check if any exist by expression", 
      "Includes deleted records if entity is inherited from ILogicalDelete and includeLogicalDeleted is equals to true",
    
    ],
  },
  {
    order: 11,
    type: 'code',
    title: 'InsertOneAsync',
    language: 'csharp',
    startingLineNumber: 232,
    item: `
    public virtual async Task<T> InsertOneAsync(
      T entity,
      IUnitOfWorkHostInterface? unitOfWorkHost = null,
      CancellationToken cancellationToken = default)
    {
        var ctx = GetContextWithUOW(unitOfWorkHost);

        entity.Id = GeneralTypeExtensions.NewId(entity.Id);
        SetUpdatedAndCreated(entity);

        await ctx.Set<T>().AddAsync(entity, cancellationToken);
        await ctx.SaveChangesAsync(cancellationToken);

        if (unitOfWorkHost != null)
        {
            unitOfWorkHost.Committed += async (s, e) =>
            {
                await UpdateCache();
            };
        }
        else
        {
            await UpdateCache(ctx, cancellationToken);
            await DisposeLocalContextAsync(ctx);
        }
        return entity;
    }`,
    descriptions: [
      "Inserts one entity to db",
      "This action will be rollbacked, if unitOfWorkHost is defined and any transaction of this unitOfWorkHost fails. Otherwise transaction will be committed.",
    ],
  },
  {
    order: 12,
    type: 'code',
    title: 'InsertManyAsync',
    language: 'csharp',
    startingLineNumber: 260,
    item: `
    public virtual async Task<IEnumerable<T>> InsertManyAsync(
      IEnumerable<T> entities,
      IUnitOfWorkHostInterface? unitOfWorkHost = null,
      CancellationToken cancellationToken = default)
    {
        var ctx = GetContextWithUOW(unitOfWorkHost);

        var createDate = DateTime.UtcNow;
        foreach (var entity in entities)
        {
            entity.Id = GeneralTypeExtensions.NewId(entity.Id);
            SetUpdatedAndCreated(entity);
        }

        await ctx.Set<T>().AddRangeAsync(entities, cancellationToken);
        await ctx.SaveChangesAsync(cancellationToken);

        if (unitOfWorkHost != null)
        {
            unitOfWorkHost.Committed += async (s, e) =>
            {
                await UpdateCache();
            };
        }
        else
        {
            await UpdateCache(ctx, cancellationToken);
            await DisposeLocalContextAsync(ctx);
        }
        return entities;
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order:13,
    type: 'code',
    title: 'UpdateOneAsync',
    language: 'csharp',
    startingLineNumber: 292,
    item: `public virtual async Task UpdateOneAsync(
      T entity,
      IUnitOfWorkHostInterface? unitOfWorkHost = null,
      Expression<Func<T, object>>? includes = null,
      CancellationToken cancellationToken = default)
    {
        var ctx = GetContextWithUOW(unitOfWorkHost);

        var existingEntity = includes != null
            ? await ctx.Set<T>().Where(x => x.Id.Equals(entity.Id)).Include(includes).SingleOrDefaultAsync()
            : await ctx.Set<T>().Where(x => x.Id.Equals(entity.Id)).SingleOrDefaultAsync();

        var existingEntityProperties = existingEntity.GetType().GetProperties();

        foreach (var property in existingEntityProperties)
        {
            property.SetValue(existingEntity, entity.GetType().GetProperty(property.Name).GetValue(entity));
        }

        SetUpdated(existingEntity);

        ctx.Set<T>().Attach(existingEntity);
        ctx.Set<T>().Update(existingEntity);

        await ctx.SaveChangesAsync(cancellationToken);

        if (unitOfWorkHost != null)
        {
            unitOfWorkHost.Committed += async (s, e) =>
            {
                await UpdateCache();
            };
        }
        else
        {
            await UpdateCache(ctx, cancellationToken);
            await DisposeLocalContextAsync(ctx);
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 14,
    type: 'code',
    title: 'UpdateManyAsync',
    language: 'csharp',
    startingLineNumber: 332,
    item: `
    public virtual async Task UpdateManyAsync(
      IEnumerable<T> entities,
      IUnitOfWorkHostInterface? unitOfWorkHost = null,
      Expression<Func<T, object>>? includes = null,
      CancellationToken cancellationToken = default)
    {
        var ctx = GetContextWithUOW(unitOfWorkHost);

        var updateDate = DateTime.UtcNow;
        foreach (var entity in entities)
        {
            var existingEntity = includes != null
                ? await ctx.Set<T>().Where(x => x.Id.Equals(entity.Id)).Include(includes).SingleOrDefaultAsync()
                : await ctx.Set<T>().Where(x => x.Id.Equals(entity.Id)).SingleOrDefaultAsync();

            var existingEntityProperties = existingEntity.GetType().GetProperties();

            foreach (var property in existingEntityProperties)
            {
                property.SetValue(existingEntity, entity.GetType().GetProperty(property.Name).GetValue(entity));
            }

            SetUpdated(entity);

            ctx.Set<T>().AttachRange(existingEntity);
            ctx.Set<T>().UpdateRange(existingEntity);
            await ctx.SaveChangesAsync(cancellationToken);
        }

        if (unitOfWorkHost != null)
        {
            unitOfWorkHost.Committed += async (s, e) =>
            {
                await UpdateCache();
            };
        }
        else
        {
            await UpdateCache(ctx, cancellationToken);
            await DisposeLocalContextAsync(ctx);
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 15,
    type: 'code',
    title: 'DeleteOneAsync',
    language: 'csharp',
    startingLineNumber: 375,
    item: `
    public virtual async Task DeleteOneAsync(
      T item,
      IUnitOfWorkHostInterface? unitOfWorkHost = null,
      CancellationToken cancellationToken = default)
    {
        var ctx = GetContextWithUOW(unitOfWorkHost);

        if (IsLogicalDelete)
        {
            (item as ILogicalDelete).IsDeleted = true;
            ctx.Set<T>().Attach(item);
            ctx.Set<T>().Update(item);
        }
        else
        {
            ctx.Set<T>().Remove(item);
        }
        await ctx.SaveChangesAsync(cancellationToken);

        if (unitOfWorkHost != null)
        {
            unitOfWorkHost.Committed += async (s, e) =>
            {
                await UpdateCache();
            };
        }
        else
        {
            await UpdateCache(ctx, cancellationToken);
            await DisposeLocalContextAsync(ctx);
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 16,
    type: 'code',
    title: 'DeleteManyAsync',
    language: 'csharp',
    startingLineNumber: 408,
    item: `
    public virtual async Task DeleteManyAsync(
      IEnumerable<T> entities,
      IUnitOfWorkHostInterface? unitOfWorkHost = null,
      CancellationToken cancellationToken = default)
    {
        var ctx = GetContextWithUOW(unitOfWorkHost);

        if (IsLogicalDelete)
        {
            foreach (var item in entities)
            {
                (item as ILogicalDelete).IsDeleted = true;
                ctx.Set<T>().Attach(item);
                ctx.Set<T>().Update(item);
            }
        }
        else
        {
            ctx.Set<T>().RemoveRange(entities);
        }

        await ctx.SaveChangesAsync(cancellationToken);

        if (unitOfWorkHost != null)
        {
            unitOfWorkHost.Committed += async (s, e) =>
            {
                await UpdateCache();
            };
        }
        else
        {
            await UpdateCache(ctx, cancellationToken);
            await DisposeLocalContextAsync(ctx);
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 17,
    type: 'code',
    title: 'SetMaxSelectCount',
    language: 'csharp',
    startingLineNumber: 445,
    item: `
    public void SetMaxSelectCount(int count)
    {
        if (count <= 0)
        {
            throw new ArgumentOutOfRangeException("Must be bigger than zero");
        }
        DefaultMaxCountForSelect = count;
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 18,
    type: 'code',
    title: 'SetUpdatedAndCreated',
    language: 'csharp',
    startingLineNumber: 454,
    item: `  
    private void SetUpdatedAndCreated(T entity)
    {
        var now = DateTime.UtcNow;
        if (entity is IHasCreated hasCreated)
        {
            hasCreated.CreatedAt = now;
        }
        if (entity is IHasUpdated hasUpdated)
        {
            hasUpdated.UpdatedAt = now;
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 19,
    type: 'code',
    title: 'SetUpdated',
    language: 'csharp',
    startingLineNumber: 467,
    item: `
    private void SetUpdated(T entity)
    {
        if (entity is IHasUpdated hasUpdated)
        {
            hasUpdated.UpdatedAt = DateTime.UtcNow;
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 20,
    type: 'code',
    title: 'UpdateCache',
    language: 'csharp',
    startingLineNumber: 475,
    item: `
    private async Task UpdateCache(
      TDbContext? dbContext = null,
      CancellationToken cancellationToken = default)
      => await FillCache(dbContext, cancellationToken);`,
    descriptions: [
      ""
    ],
  },
  {
    order: 21,
    type: 'code',
    title: 'GetCachedData',
    language: 'csharp',
    startingLineNumber: 480,
    item: `
    private async Task<RedisValue> GetCachedData(CancellationToken cancellationToken)
    {
        var json = await CacheDb.StringGetAsync(CacheKey);
        if (string.IsNullOrEmpty(json))
        {
            await FillCache(cancellationToken: cancellationToken);
            json = await CacheDb.StringGetAsync(CacheKey);
        }

        return json;
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 22,
    type: 'code',
    title: 'FillCache',
    language: 'csharp',
    startingLineNumber: 492,
    item: `
    private async Task FillCache(TDbContext? dbContext = null, CancellationToken cancellationToken = default)
    {
        if (!IsCachable) return;
        var ctx = dbContext ?? GetContext();
        var serializedData = JsonSerializer.Serialize(await ctx.Set<T>().ToListAsync(cancellationToken));
        await CacheDb.StringSetAsync(CacheKey, serializedData, CacheTimeout);
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 23,
    type: 'code',
    title: 'ResetCacheAsync',
    language: 'csharp',
    startingLineNumber: 500,
    item: `  
    public async Task ResetCacheAsync()
    {
        await FillCache();
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 24,
    type: 'code',
    title: 'GetDbSetWithIncludes',
    language: 'csharp',
    startingLineNumber: 505,
    item: `
    protected abstract IQueryable<T> GetDbSetWithIncludes(DbContext ctx);`,
    descriptions: [
      ""
    ],
  },
  {
    order: 25,
    type: 'code',
    title: 'GetContext',
    language: 'csharp',
    startingLineNumber: 507,
    item: `
    protected abstract TDbContext GetContext();`,
    descriptions: [
      ""
    ],
  },
  {
    order: 26,
    type: 'code',
    title: 'DisposeLocalContextAsync',
    language: 'csharp',
    startingLineNumber: 509,
    item: `
    private static async Task DisposeLocalContextAsync(TDbContext ctx)
    {
        if (ctx != null)
        {
            try { await ctx.DisposeAsync(); } catch { }
        }
    }`,
    descriptions: [
      ""
    ],
  },
  {
    order: 27,
    type: 'code',
    title: 'GetContextWithUOW',
    language: 'csharp',
    startingLineNumber: 517,
    item: `
    private TDbContext GetContextWithUOW(IUnitOfWorkHostInterface? uow)
            => uow == null || uow.DbContext == null ? GetContext() : uow.DbContext as TDbContext;`,
    descriptions: [
      ""
    ],
  },
  {
    order: 28,
    type: 'code',
    title: 'GetWithIncludeFlag',
    language: 'csharp',
    startingLineNumber: 520,
    item: `
    private IQueryable<T> GetWithIncludeFlag(bool includeAll, TDbContext ctx, bool includeLogicalDeleted = false)
    {
        if (IsLogicalDelete)
        {
            var res = includeAll
                ? GetDbSetWithIncludes(ctx).WhereIf(includeLogicalDeleted, $"{nameof(ILogicalDelete.IsDeleted)}=true")
                : ctx.Set<T>().WhereIf(includeLogicalDeleted, $"{nameof(ILogicalDelete.IsDeleted)}=true");
            return res;
        }
        else
            return includeAll ? GetDbSetWithIncludes(ctx) : ctx.Set<T>();
    }`,
    descriptions: [
      ""
    ],
  }
]

const header = 'Patika.Framework.Domain.Services.GenericRepository';
const GenericRepository = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}    

export default GenericRepository