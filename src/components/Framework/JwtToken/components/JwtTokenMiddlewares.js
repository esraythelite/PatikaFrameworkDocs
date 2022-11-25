import React from 'react' 
import DocPaper from '../../../DocPaper';
const contents = [
  {
    order: 1,
    type: 'code',
    title: 'HandleHashedToken',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    namespace Patika.Framework.Identity.JwtToken.Middlewares
    {
        public class HandleHashedToken
        {
            private RequestDelegate _next;
            public HandleHashedToken(RequestDelegate next)
            {
                _next = next;
            }
            public async Task Invoke(HttpContext ctx)
            {
                var token = ctx.Request.Headers.Authorization.FirstOrDefault();
                if (token != null)
                {
                    var tokenWithoutBearer = token.Split(' ')[1];
                    var storage = await ctx.RequestServices.GetRequiredService<IStorage<Token>>().TryGetAsync(tokenWithoutBearer);
                    var accessToken = storage?.AccessToken;
                    ctx.Request.Headers["authorization"] = $"bearer {accessToken}";
                    if (storage?.AccessTokenHashed != string.Empty)
                    {
                        ctx.Request.Headers["authorization-hashed"] = $"{token}";
                    }
                }
                await _next.Invoke(ctx);
            }
        }
    }`,
    descriptions: [
      "Gets user token from Storage and sets required request headers",   
    ],
  } 
]

const header = 'Patika.Framework.Identity.JwtToken.Middlewares';
const JwtTokenMiddlewares = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}  
export default JwtTokenMiddlewares