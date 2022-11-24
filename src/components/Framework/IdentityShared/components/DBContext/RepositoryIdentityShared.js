import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'UserRefreshTokenRepository',
    language: 'csharp',
    startingLineNumber: 6,
    item: `
    namespace Patika.Framework.Identity.Shared.IdentityServerDbContext.Repository
    {
        public class UserRefreshTokenRepository : Repository<UserRefreshToken, IdentityServerDbContext>, IRepository<UserRefreshToken>, IUserRefreshTokenRepository
        {
            public UserRefreshTokenRepository(DbContextOptions<IdentityServerDbContext> config) : base(config) { }
    
            public async Task<UserRefreshToken?> GetRefreshTokenAsync(string userId, string refreshToken)
            {
                using var ctx = GetContext();
                return await ctx.UserRefreshTokens.Where(x => x.UserId == userId && x.RefreshToken == refreshToken).FirstOrDefaultAsync();
            }
    
            protected override IdentityServerDbContext GetContext() => new(DbOptions);
    
            protected override IQueryable<UserRefreshToken> GetDbSetWithIncludes(DbContext ctx) => ctx.Set<UserRefreshToken>();
        }
    }`,
    descriptions: [
      "implementation of IUserRefreshTokenRepository"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'UserTenantRepository',
    language: 'csharp',
    startingLineNumber: 6,
    item: `
    namespace Patika.Framework.Identity.Shared.IdentityServerDbContext.Repository
    {
        public class UserTenantRepository : Repository<UserTenant, IdentityServerDbContext>, IRepository<UserTenant>, IUserTenantRepository
        {
            public UserTenantRepository(DbContextOptions<IdentityServerDbContext> config) : base(config) { }         
    
            protected override IdentityServerDbContext GetContext() => new(DbOptions);
    
            protected override IQueryable<UserTenant> GetDbSetWithIncludes(DbContext ctx) => ctx.Set<UserTenant>();
        }
    }`,
    descriptions: [
      "implementation of IUserTenantRepository"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'WrongPasswordAttemptRepository',
    language: 'csharp',
    startingLineNumber: 6,
    item: `
    namespace Patika.Framework.Identity.Shared.IdentityServerDbContext.Repository
    {
        public class WrongPasswordAttemptRepository 
        : Repository<WrongPasswordAttempt, IdentityServerDbContext>, IWrongPasswordAttemptRepository, IRepository<WrongPasswordAttempt>
        {
            public WrongPasswordAttemptRepository(DbContextOptions<IdentityServerDbContext> config) : base(config) { }
    
            public async Task<bool> IsUserBlockedAsync(string userId)
            {
                var todayStart = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
                var tommorow = todayStart.AddDays(1);
                using var ctx = GetContext();
                var attempCount = await ctx.WhereWrongPasswordAttempts.Where(m =>
                m.UserId == userId &&
                m.AttemptTime >= todayStart &&
                m.AttemptTime < tommorow
                ).CountAsync();
    
                return attempCount >= 3;
            }
    
            protected override IdentityServerDbContext GetContext() => new(DbOptions);
    
            protected override IQueryable<WrongPasswordAttempt> GetDbSetWithIncludes(DbContext ctx) => ctx.Set<WrongPasswordAttempt>();
        }
    }`,
    descriptions: [
      "implementation of IWrongPasswordAttemptRepository",
      "IsUserBlockedAsync is a custom query to check user is blocked or not", 
    ],
  }
]

const RepositoryIdentityShared = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Framework.Identity.Shared.IdentityServerDbContext.Repository</Typography>
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
export default RepositoryIdentityShared