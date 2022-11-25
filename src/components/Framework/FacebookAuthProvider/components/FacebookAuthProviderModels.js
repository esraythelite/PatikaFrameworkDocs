import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Configuration',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    namespace Patika.Framework.Identity.FacebookAuthProvider.Models
    {
        public class Configuration
        {
            public string ClientId { get; set; } = string.Empty;
            public string AppSecret { get; set; } = string.Empty;
            public ScopeEnum Scopes { get; set; } 
            public string ScopesString
            {
                get
                {
                    return Scopes.ToString();
                }
                set
                {
                    var flags = value.StringToEnumFlags<ScopeEnum>(',');
                    Scopes |= flags;
                }
            } 
        }
    } `,
    descriptions: [
      "Configuration model for adding Facebook Authentication"
    ],
  }
]

const header = 'Patika.Framework.Identity.FacebookAuthProvider.Models';
const FacebookAuthProviderModels = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default FacebookAuthProviderModels