import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IMultiTenant',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.Shared.Interfaces
    {
        public interface IMultiTenant 
        {
            Guid TenantId { get; set; }  
        }
    }`,
    descriptions: [
      "This interface will add TenantId to entities inherited from it",
      "All entities have to be multitenant must be inherited from this interface"
    ],
  }
]

const header = 'Patika.Framework.Identity.Shared.Interfaces';
const InterfacesIdentityShared = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}    
export default InterfacesIdentityShared