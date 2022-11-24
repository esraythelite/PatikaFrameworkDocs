import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'UserRefreshToken',
    language: 'csharp',
    startingLineNumber: 2,
    item: `
    namespace Patika.Framework.Identity.Shared.IdentityServerDbContext.Entities
    {    
        public class UserRefreshToken  : Entity
        {
            public string UserId { get; set; } = String.Empty;
            public string Token { get; set; } = String.Empty;
            public string HashedToken { get; set; } = String.Empty;
            public string RefreshToken { get; set; } = String.Empty;
            public string HashedRefreshToken { get; set; } = String.Empty;
            public DateTime RefreshTokenExpiryTime { get; set; }
        }
    }`,
    descriptions: [ 
      "It is an additional entity (table) to save user refresh tokens"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'UserTenant',
    language: 'csharp',
    startingLineNumber: 2,
    item: `
    namespace Patika.Framework.Identity.Shared.IdentityServerDbContext.Entities
    {
        public class UserTenant : Entity
        { 
            public Guid UserId { get; set; }     
            public Guid TenantId { get; set; }   
        }
    }`,
    descriptions: [ 
      "It is an additional entity (table) to save user refresh tenants for multi tenancy"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'WrongPasswordAttempt',
    language: 'csharp',
    startingLineNumber: 2,
    item: `
    namespace Patika.Framework.Identity.Shared.IdentityServerDbContext.Entities
    {
        public class WrongPasswordAttempt : Entity
        {
            public string UserId { get; set; } = String.Empty;
            public DateTime AttemptTime { get; set; }
        }
    }`,
    descriptions: [ 
      "It is an additional entity (table) to save wrong password attempts",
      "If login failed by WrongUsernameOrPasswordException exception, identity package inserts a WrongPasswordAttempt entity to database"
    ],
  }
]

const EntitiesIdentityShared = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Framework.Identity.Shared.IdentityServerDbContext.Entities</Typography>
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
export default EntitiesIdentityShared