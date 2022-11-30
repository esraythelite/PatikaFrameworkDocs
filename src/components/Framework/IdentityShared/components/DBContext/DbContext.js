import React from 'react'
import DocPaper from '../../../../DocPaper'

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

const header = 'Patika.Framework.Identity.Shared.IdentityServerDbContext';
const DbContext = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
export default DbContext