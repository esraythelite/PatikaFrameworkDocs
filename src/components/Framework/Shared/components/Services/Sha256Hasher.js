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
        title: 'NullLogWriter',
        language: 'csharp',
        startingLineNumber: 3,
        item: `
        namespace Patika.Framework.Shared.Services
        {
            public sealed class Sha256Hasher : ISimpleHash
            {
                public string Hash(string input)
                {
                    using SHA256 sha256Hash = SHA256.Create();
                    var bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(input));
                    var builder = new StringBuilder();
                    for (int i = 0; i < bytes.Length; i++)
                    {
                        builder.Append(bytes[i].ToString("x2"));
                    }
                    return builder.ToString();
                }
            }
        }`,
        descriptions: [
            "Inherited from ISimpleHash",
            "Hashs string using SHA256", 
        ],
    }
]

const header = 'Patika.Framework.Shared.Services.Sha256Hasher';
const Sha256Hasher = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}    

export default Sha256Hasher