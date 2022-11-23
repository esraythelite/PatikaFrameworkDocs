import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ListToEnumFlags',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Extensions
    {
        public static class FlagEnumExtensions
        {
            public static T ListToEnumFlags<T>(this List<string> enumFlagsAsList ) where T : struct
            {
                if (!typeof(T).IsEnum)
                    throw new NotSupportedException(typeof(T).Name + " is not an Enum");
                T flags;
                enumFlagsAsList.RemoveAll(c => !Enum.TryParse(c, true, out flags));
                var commaSeparatedFlags = string.Join(",", enumFlagsAsList);
                Enum.TryParse(commaSeparatedFlags, true, out flags);
                return flags;
            }`,
    descriptions: [
      "Converts string list to enum flags"
    ],
  } ,
  {
    order: 1,
    type: 'code',
    title: 'StringToEnumFlags',
    language: 'csharp',
    startingLineNumber: 22,
    item: ` 
            public static T StringToEnumFlags<T>(this string enumFlagsAsString, char delimeter) where T : struct
            {
                List<string> enumFlagsAsList = enumFlagsAsString.Split(delimeter).ToList();
                return enumFlagsAsList.ListToEnumFlags<T>();
            }         
        }
    }`,
    descriptions: [
        "Converts string seperated with any delimeter to enum flags"
    ],
  }   
]

const FlagEnumExtensions = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Extensions.FlagEnumExtensions</Typography>
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
 

export default FlagEnumExtensions