import React from 'react'
import DocPaper from '../../../../DocPaper'

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

const header = 'Patika.Framework.Shared.Extensions.FlagEnumExtensions';
const FlagEnumExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  

export default FlagEnumExtensions