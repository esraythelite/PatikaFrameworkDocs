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

const header = 'Patika.Framework.Identity.Shared.IdentityServerDbContext.Entities';
const EntitiesIdentityShared = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}    
export default EntitiesIdentityShared