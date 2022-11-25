import React from 'react' 
import DocPaper from '../../../DocPaper';
const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ITokenGenerator',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.JwtToken.Interfaces
    {
        public interface ITokenGenerator
        {
            Token GenerateToken(IEnumerable<Claim> claims);
            Token RefreshToken(string accessToken);
            ClaimsPrincipal? GetPrincipalFromExpiredToken(string token);
        }
    }`,
    descriptions: [
      "Token generator helps you to generate token.",  
      "You can generate hasshed token and refresh token by configuration",  
    ],
  } 
]

const header = 'Patika.Framework.Identity.JwtToken.Interfaces';
const JwtTokenInterfaces = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}  
export default JwtTokenInterfaces