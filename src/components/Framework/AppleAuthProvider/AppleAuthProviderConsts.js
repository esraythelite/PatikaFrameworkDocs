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
    namespace Patika.Framework.Identity.AppleAuthProvider.Consts
    {
        public static class Consts
        {
            public static readonly List<string> DefaultScopes = new()
            {
                "email",
                "name",
                "openid",
            };
        }
    }`,
    descriptions: [
      "DefaultScopes: This scopes are automatically added to Apple Authentication"
    ],
  }  
]

const header = 'Patika.Framework.Identity.AppleAuthProvider.Consts';
const AppleAuthProviderConsts = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 
export default AppleAuthProviderConsts