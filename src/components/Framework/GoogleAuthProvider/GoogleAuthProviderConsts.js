import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react' 
import DocPaper from '../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Consts',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.GoogleAuthProvider.Consts
    {
        public static class Consts
        {
            public static readonly string ProfileScope = "https://www.googleapis.com/auth/userinfo.profile";
    
            public static readonly List<string> DefaultScopes = new()
            {
                "email",
                 ProfileScope,
                "openid",
            };
        }
    }`,
    descriptions: [
      "DefaultScopes: This scopes are automatically added to Google Authentication"
    ],
  }  
]

const header = 'Patika.Framework.Identity.GoogleAuthProvider.Consts';
const GoogleAuthProviderConsts = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 
export default GoogleAuthProviderConsts