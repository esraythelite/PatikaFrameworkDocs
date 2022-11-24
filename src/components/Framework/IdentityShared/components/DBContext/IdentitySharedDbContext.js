import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IdentityServerDbContext',
    language: 'csharp',
    startingLineNumber: 6,
    item: `
    namespace Patika.Framework.Identity.Shared.IdentityServerDbContext
    {
        public class IdentityServerDbContext : IdentityDbContext<ApplicationUser>
        {
            public DbSet<WrongPasswordAttempt> WhereWrongPasswordAttempts => Set<WrongPasswordAttempt>();
            public DbSet<UserRefreshToken> UserRefreshTokens => Set<UserRefreshToken>();
            public DbSet<UserTenant> UserTenants => Set<UserTenant>();
    
            public IdentityServerDbContext(DbContextOptions<IdentityServerDbContext> options) : base(options)
            {
            }
            protected override void OnModelCreating(ModelBuilder builder)
            {
                base.OnModelCreating(builder);
            }
        }
    }`,
    descriptions: [
      "Identity Server Db Contexts",
      "WhereWrongPasswordAttempts, UserRefreshTokens and UserTenants are custom additional tables",      
    ],
  }
]

const IdentitySharedDbContext = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Framework.Identity.Shared.IdentityServerDbContext</Typography>
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
export default IdentitySharedDbContext