import React from 'react'
import DocPaper from '../../../../DocPaper' 

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IApplicationService',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Application.Contracts.Interfaces
    {
        public interface IApplicationService
        {
            Task SetApplicationUserAsync(ApplicationUser user);
            ApplicationUser ApplicationUser { get; set; }
        }
    }`,
    descriptions: [
      "The base interface for Application Services"
    ],
  } 
]
const header = 'Patika.Framework.Application.Contracts.Interfaces';
const InterfacesAppContracts = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
} 

export default InterfacesAppContracts