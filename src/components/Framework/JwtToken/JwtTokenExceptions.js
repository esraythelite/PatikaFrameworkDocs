import React from 'react' 
import DocPaper from '../../DocPaper';
const contents = [
  {
    order: 1,
    type: 'code',
    title: 'JwtHaveRefreshTokenFalseException',
    language: 'csharp',
    startingLineNumber: 10,
    item: `
    namespace Patika.Framework.Identity.JwtToken.Exceptions
    {
        public class JwtHaveRefreshTokenFalseException : BaseApplicationException
        {
            public JwtHaveRefreshTokenFalseException() : base ($"{typeof(JwtHaveRefreshTokenFalseException).FullName}")
            {
            }
         
        }
    }`,
    descriptions: [
      "Throws on ResfreshToken action if Jwt configuration does not support resreshtoken.",
      "'Jwt.HaveRefreshToken' of Patika.Framework.Identity.JwtToken.Models.Configuration must be true for supporting token refreshing"
    ],
  } 
]

const header = 'Patika.Framework.Identity.JwtToken.Exceptions';
const JwtTokenExceptions = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}  
export default JwtTokenExceptions