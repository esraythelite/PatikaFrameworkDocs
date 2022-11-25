import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ScopeEnum',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.AppleAuthProvider.Enums
    {
        [Flags]
        public enum ScopeEnum
        {
            Email = 1,
            Name = 2,
            OpenId = 4
        }
    }
    `,
    descriptions: [
      "Flagged enums for Apple scopes"
    ],
  }  
]

const header = 'Patika.Framework.Identity.AppleAuthProvider.Enums';
const AppleAuthProviderEnums = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 
export default AppleAuthProviderEnums