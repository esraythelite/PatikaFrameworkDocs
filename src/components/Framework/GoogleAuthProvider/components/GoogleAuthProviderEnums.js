import React from 'react' 
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ScopeEnum',
    language: 'csharp',
    item: `
    namespace Patika.Framework.Identity.GoogleAuthProvider.Enums
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
      "Flagged enums for Google scopes"
    ],
  }  
]

const header = 'Patika.Framework.Identity.GoogleAuthProvider.Enums';
const GoogleAuthProviderEnums = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 
export default GoogleAuthProviderEnums