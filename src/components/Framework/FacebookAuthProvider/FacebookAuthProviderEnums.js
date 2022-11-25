import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react' 
import DocPaper from '../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ScopeEnum',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.FacebookAuthProvider.Enums
    {
        [Flags]
        public enum ScopeEnum
        {
            Email = 1,
            Profile = 2
        }
    }
    `,
    descriptions: [
      "Flagged enums for Facebook scopes"
    ],
  }  
]

const header = 'Patika.Framework.Identity.FacebookAuthProvider.Enums';
const FacebookAuthProviderEnums = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 
export default FacebookAuthProviderEnums