import React from 'react'
import DocPaper from '../../../DocPaper'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Consts',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.Shared
    {
        public static class Consts
        {
            public const string ADMIN_MAILADDRESS = "admin@patika.com";
            public const string ADMINISTRATOR_ROLE = "Administrator";
            public const string ANONYMOUS_ROLE = "Anonymous";
            public const string APPLICATION_CLIENT_ROLE = "Application";
            public const string ADMIN_POLICY = "AdministratorPolicy";
        }
    }`,
    descriptions: [
      "Some consts that used in setup of identity server.", 
    ],
  }
]

const header = 'Patika.Framework.Identity.Shared';
const ConstsIdentityShared = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}    
export default ConstsIdentityShared