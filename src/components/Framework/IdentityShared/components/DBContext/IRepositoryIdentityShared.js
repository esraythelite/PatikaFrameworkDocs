import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IUserRefreshTokenRepository',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.Shared.IdentityServerDbContext.RepositoryInterfaces
    {
        public interface IUserRefreshTokenRepository : IRepository<UserRefreshToken>
        {
            Task<UserRefreshToken?> GetRefreshTokenAsync(string userId, string refreshToken);
        }
    }`,
    descriptions: [ 
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'IUserTenantRepository',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.Shared.IdentityServerDbContext.RepositoryInterfaces
    {
        public interface IUserTenantRepository : IRepository<UserTenant>
        {
    
        }
    }`,
    descriptions: [ 
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'IWrongPasswordAttemptRepository',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.Shared.IdentityServerDbContext.RepositoryInterfaces
    {
        public interface IWrongPasswordAttemptRepository : IRepository<WrongPasswordAttempt>
        {
            Task<bool> IsUserBlockedAsync(string userId);
          }
      }     `,
    descriptions: [
      "IsUserBlockedAsync is a custom query to check user is blocked or not", 
    ],
  }
]

const IRepositoryIdentityShared = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Framework.Identity.Shared.IdentityServerDbContext.RepositoryInterfaces</Typography>
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
export default IRepositoryIdentityShared