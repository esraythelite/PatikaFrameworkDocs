import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Consts',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Identity.AppleAuthProvider.Consts
    {
        public static class Consts
        {
            public static readonly List<string> DefaultScopes = new()
            {
                "email",
                "name",
                "openid",
            };
        }

        public const string Audience = "https://appleid.apple.com";
    }`,
    descriptions: [
      "DefaultScopes: This scopes are automatically added to Apple Authentication",
      "Audience: used ing client secret generation"
    ],
  }  
]

const header = 'Patika.Framework.Identity.AppleAuthProvider.Consts';
const AppleAuthProviderConsts = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 
export default AppleAuthProviderConsts