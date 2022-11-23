import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ToList',
    language: 'csharp',
    startingLineNumber: 9,
    item: `
    namespace Patika.Framework.Shared.Extensions
    {
        public static class EnumHelper<T> where T : struct, Enum
        {
            public static IList<T> ToList()
            {
                var list = Enum.GetValues(typeof(T)).Cast<T>().ToList();
                return list;
            }`,
    descriptions: [
      "Converts enum fields to IList."
    ],
  } ,
  {
    order: 2,
    type: 'code',
    title: 'Parse',
    language: 'csharp',
    startingLineNumber: 19,
    item: `
    public static T Parse(string value)
    {
        return (T)Enum.Parse(typeof(T), value, true);
    }`,
    descriptions: [
      "Parse string value to T enum."
    ],
  } ,
  {
    order: 2,
    type: 'code',
    title: 'Names and Display Names',
    language: 'csharp',
    startingLineNumber: 19,
    item: `
    public static IList<string> GetDisplayValues(Enum value)
    {
        return GetNames(value).Select(obj => GetDisplayValue(Parse(obj))).ToList();
    }

    public static IList<string> GetNames(Enum value)
    {
        return value.GetType().GetFields(BindingFlags.Static | BindingFlags.Public).Select(fi => fi.Name).ToList();
    }

    public static string GetDisplayValue(T value)
    {
        FieldInfo? fieldInfo = value.GetType().GetField(value.ToString());

        if (fieldInfo?.GetCustomAttributes(typeof(DisplayAttribute), false) is not DisplayAttribute[] descriptionAttributes) return string.Empty;

        var firstAttribute = descriptionAttributes.First();
        
        if (firstAttribute is not null && firstAttribute.ResourceType != null && !string.IsNullOrEmpty(firstAttribute.Name))
            return LookupResource(firstAttribute.ResourceType, firstAttribute.Name);
        
        if (firstAttribute is not null && !string.IsNullOrEmpty(firstAttribute.Name))
            return firstAttribute.Name;
        
        return value.ToString();
    }

    private static string LookupResource(Type resourceManagerProvider, string resourceKey)
    {
        var resourceKeyProperty = 
            resourceManagerProvider.GetProperty(resourceKey,BindingFlags.Static | BindingFlags.Public, null, typeof(string),Array.Empty<Type>(), null);
        
        if (resourceKeyProperty != null)
        {
            var lookup = resourceKeyProperty?.GetMethod?.Invoke(null, null) as string;
            if (!string.IsNullOrEmpty(lookup))
            {
                return lookup;
            }
        }

        return resourceKey; // Fallback with the key name
    }`,
    descriptions: [
      "GetDisplayValues : returns list of enum display values",
      "GetNames :  returns list of enum names",
      "GetDisplayValue : returns enum display name"
    ],
  } 
]

const EnumHelper = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Extensions.EnumHelper</Typography>
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
 

export default EnumHelper