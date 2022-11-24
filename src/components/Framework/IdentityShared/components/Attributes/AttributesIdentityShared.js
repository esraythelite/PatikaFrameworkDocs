import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
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

const AttributesIdentityShared = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Framework.Identity.Shared.Attributes</Typography> 
      {contents.sort((a, b) => (a.order - b.order)).map((content) => {
        return (
          content.type === 'code' ? <>
            <Highlighter key={content.order} title={content.title} descriptions={content.descriptions} code={content.item} language={content.language} startingLineNumber={content.startingLineNumber} />
          </>
            :
            <>  <ImageItem key={content.order} item={content.item}></ImageItem></>
        )
      })}
    </Stack>
  )
} 

export default AttributesIdentityShared