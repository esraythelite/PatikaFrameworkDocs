import React from 'react'
import DocPaper from '../../../../DocPaper' 

const contents = [
    {
        order: 0,
        type: 'code',
        title: 'DbConnectionNames',
        language: 'csharp',
        
        item: `
        public static class DbConnectionNames
        {
            public const string Main = "MAIN_DB";
            public const string Auth = "AUTH_DB";
            public const string Log = "LOG_DB";
        }`,
        descriptions: [
            "Used for seperating Database Configuration",
            "Filling by Configuration provider like appsettings.",
            "MAIN_DB is for Main Database of microservice",
            "AUTH_DB is for Authserver Database",
            "LOG_DB is for Log Database" 
        ],
    },
    {
        order: 1,
        type: 'code',
        title: 'RegexPatterns',
        language: 'csharp',
        
        item: `
        public static class RegexPatterns
        {
            public const string TurkishLetters = "[abcçdefgğhıijklmnoöprsştuüvyzABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ]";
            public static string OnlyTurkishLettersPattern => string.Concat(@"^", TurkishLetters, "+$");
            public const string EmailContainsOnlyOneAtSingPattern =  @"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$";
            public const string EmailNotContainsPattern =  @"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$";
            public const string EmailNotContainsExceptThisCharactersPattern = @"^[a-zA-Z0-9\\_\\.\\@\\-]+$";
        }`,
        descriptions: [
            "Some globally used regex patterns",
            "Used in validations", 
        ],
    }
]

const header = 'Patika.Framework.Shared.Consts';
const Consts = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  

export default Consts