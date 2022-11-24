import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../../DocPaper'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Tenant',
    language: 'csharp',
    startingLineNumber: 4,
    item: `
    namespace Patika.Framework.Identity.Shared.Attributes
    {
        public class Tenant : Attribute, IAuthorizationFilter
        {
            private readonly List<string> Tenants;
            public Tenant(string tenant)
            {
                Tenants = tenant.Split(',').Select(s => s.ToLowerInvariant()).ToList();
            }
            public void OnAuthorization(AuthorizationFilterContext context)
            {
                var tenant = context.HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
             
                if (!string.IsNullOrEmpty(tenant) && !Tenants.Contains(tenant.ToLowerInvariant()))
                {
                    context.Result = new UnauthorizedResult();
                }
            }
        }
    }`,
    descriptions: [
      ""
    ],
  } 
]

const header = 'Patika.Framework.Identity.Shared.Attributes';
const AttributesIdentityShared = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
 

export default AttributesIdentityShared