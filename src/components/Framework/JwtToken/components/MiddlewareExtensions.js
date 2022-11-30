import React from 'react' 
import DocPaper from '../../../DocPaper';
const contents = [
  {
    order: 1,
    type: 'code',
    title: 'MiddlewareExtensions',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.JwtToken.Extensions
    {
        public static class MiddlewareExtensions
        {
            public static IApplicationBuilder UseHashedToken(this IApplicationBuilder app)
            {
                return app.UseMiddleware<HandleHashedToken>();
            }
        }
    }`,
    descriptions: [
      "You can call app.UseHashedToken to use this middleware in Startup or Program.cs ",  
    ],
  } 
]

const header = 'Patika.Framework.Identity.JwtToken.Extensions';
const MiddlewareExtensions = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}  
export default MiddlewareExtensions