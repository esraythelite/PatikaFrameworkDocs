import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ScopeEnum',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Identity.OktaAuthProvider.Enums
    {
        [Flags]
        public enum ScopeEnum
        {
            Email = 1,
            Profile = 2,
            OpenId = 4
        }
    }
    `,
    descriptions: [
      "Flagged enums for Okta scopes"
    ],
  }  
]

const header = 'Patika.Framework.Identity.OktaAuthProvider.Enums';
const OktaAuthProviderEnums = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 
export default OktaAuthProviderEnums