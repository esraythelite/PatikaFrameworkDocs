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
        title: 'InMemoryCacheService',
        language: 'csharp',
        startingLineNumber: 3,
        item: `
        namespace Patika.Framework.Shared.Services
        {
            public class InMemoryCacheService<T> : IStorage<T> where T : class
            {
                private readonly IMemoryCache MemoryCache;
                public InMemoryCacheService(IMemoryCache memoryCache)
                {
                    MemoryCache = memoryCache;
                }`,
        descriptions: [
            "Inherited from IStorage",
            "Stores item which must be a class",
            "Injects IMemoryCache as MemoryCache on constructor", 
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'RemoveAsync',
        language: 'csharp',
        startingLineNumber: 44,
        item: `
                public async Task RemoveAsync(string key)
                {
                    MemoryCache.Remove(key);
                    await Task.CompletedTask;
                }`,
        descriptions: [
            "Removes cached item by key",
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'SetAsync',
        language: 'csharp',
        startingLineNumber: 64,
        item: `
                public async Task SetAsync(string key, T value)
                {
                    MemoryCache.Set(key, value);
                    await Task.CompletedTask;
                }`,
        descriptions: [
            "Adds item by key ",
        ],
    },
    {
        order: 4,
        type: 'code',
        title: 'TryGetAsync',
        language: 'csharp',
        startingLineNumber: 96,
        item: `
                public async Task<T?> TryGetAsync(string key)
                {
                    MemoryCache.TryGetValue(key, out T token);
                    return await Task.FromResult(token);
                }
            }
        }`,
        descriptions: [
            "Tries to get item by key",
            "Returns nullable item"
        ],
    }
]

const header = 'Patika.Framework.Shared.Services.InMemoryCacheService';
const InMemoryCacheService = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}   

export default InMemoryCacheService