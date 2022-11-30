import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Consts',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.OktaAuthProvider.Consts
    {
        public static class Consts
        {    
            public static readonly List<string> DefaultScopes = new()
            {
                "email",
                "profile",
                "openid",
            };
        }
    }`,
    descriptions: [
      "DefaultScopes: This scopes are automatically added to Okta Authentication"
    ],
  }  
]

const header = 'Patika.Framework.Identity.OktaAuthProvider.Consts';
const OktaAuthProviderConsts = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 
export default OktaAuthProviderConsts