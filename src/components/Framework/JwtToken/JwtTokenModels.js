import React from 'react' 
import DocPaper from '../../DocPaper';
const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Token',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.JwtToken.Models
    {
        public class Token
        {
            public string AccessToken { get; set; } = string.Empty;
            public string AccessTokenHashed { get; set; } = string.Empty;
            public string RefreshToken { get; set; } = string.Empty;
            public string RefreshTokenHashed { get; set; } = string.Empty;
            public DateTime ExpireTime { get; set; }
            public List<Guid> Tenants { get; set; } = new();
        }
    }`,
    descriptions: [
      "",   
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'Jwt',
    language: 'csharp',
    startingLineNumber: 3,
    item: ` 
    namespace Patika.Framework.Identity.JwtToken.Models
    {
        public class Jwt  
        {
            public string ValidAudience { get; set; } = string.Empty;
            public string ValidIssuer { get; set; } = string.Empty;
            public string Secret { get; set; } = string.Empty;
            public int TokenValidityInHours { get; set; } = 12;
            public int TokenValidityInMinutes  => (int)new TimeSpan(TokenValidityInHours, 0, 0).TotalMinutes;
            public bool ValidateIssuerSigningKey { get; set; } = true;
            public bool ValidateIssuer { get; set; } = true;
            public bool ValidateAudience { get; set; } = true;
            public bool RequireExpirationTime { get; set; } = true;
            public bool ValidateLifetime { get; set; } = true;
            public bool RequireHttpsMetadata { get; set; } = false;
            public bool HaveRefreshToken { get; set; } = true;
            public bool HashAccessToken { get; set; } = false;
            public bool HashRefreshToken { get; set; } = false; 
        }
    }    `,
    descriptions: [
      "",   
    ],
  }, 
  {
    order: 3,
    type: 'code',
    title: 'Configuration',
    language: 'csharp',
    startingLineNumber: 3,
    item: `namespace Patika.Framework.Identity.JwtToken.Models
    {
        public class Configuration  
        {
            public string RedisConnection { get; set; } = "127.0.0.1:6379";
            public Jwt Jwt { get; set; } = new Jwt();     
        }
    }    `,
    descriptions: [
      "Configuration model for basic authentication with jwt",   
    ],
  }  
]

const header = 'Patika.Framework.Identity.JwtToken.Models';
const JwtTokenModels = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}  
export default JwtTokenModels