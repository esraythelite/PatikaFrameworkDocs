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
    namespace Patika.Framework.Identity.FacebookAuthProvider.Consts
    {
        public static class Consts
        {
            public static readonly List<string> DefaultScopes = new()
            {
                "email",
                "public_profile"
            };
        }
    }`,
    descriptions: [
      "DefaultScopes: This scopes are automatically added to Facebook Authentication"
    ],
  }  
]

const header = 'Patika.Framework.Identity.FacebookAuthProvider.Consts';
const FacebookAuthProviderConsts = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 
export default FacebookAuthProviderConsts