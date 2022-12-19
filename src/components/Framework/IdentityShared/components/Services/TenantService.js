import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'TenantService',
    language: 'csharp',
    startingLineNumber: 2,
    item: `
    namespace Patika.Framework.Identity.Shared.Services
    {
        public class TenantService : ITenantService
        {
            public Guid Tenant { get; private set; }
            public void SetTenant(Guid tenant)
            {
                Tenant = tenant;
            }
        }
    }`,
    descriptions: [
      "Gets and Sets current TenantId", 
      "SetTenant used set tenant on TenantServiceMiddleware.InvokeAsync method.",
      "This service will used in DbContext to filter data by tenantId"
    ],
  } 
]

const header = 'Patika.Framework.Identity.Shared.Services';
const BaseService = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default BaseService