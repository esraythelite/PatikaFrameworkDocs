import React from 'react' 
import DocPaper from '../../../DocPaper';
const contents = [
  {
    order: 1,
    type: 'code',
    title: 'JwtHaveRefreshTokenFalseException',
    language: 'csharp',
    
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
  } ,
  {
    order: 2,
    type: 'code',
    title: 'ValidAudienceRequiredWhenValidateAudienceIsTrueException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.JwtToken.Exceptions
    {
        public class ValidAudienceRequiredWhenValidateAudienceIsTrueException : BaseApplicationException
        {
            public ValidAudienceRequiredWhenValidateAudienceIsTrueException() 
            : base ($"{typeof(ValidAudienceRequiredWhenValidateAudienceIsTrueException).FullName}")
            {
            }
         
        }
    }`,
    descriptions: [
      "Throws on JwtValidator when action ValidIssuerRequired error code occured.", 
    ],
  } ,
  {
    order: 1,
    type: 'code',
    title: 'ValidIssuerRequiredWhenValidateIssuerIsTrueException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.JwtToken.Exceptions
    {
        public class ValidIssuerRequiredWhenValidateIssuerIsTrueException : BaseApplicationException
        {
            public ValidIssuerRequiredWhenValidateIssuerIsTrueException() : base ($"{typeof(ValidIssuerRequiredWhenValidateIssuerIsTrueException).FullName}")
            {
            }
         
        }
    }`,
    descriptions: [
      "Throws on JwtValidator when action ValidAudienceRequired error code occured.",
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