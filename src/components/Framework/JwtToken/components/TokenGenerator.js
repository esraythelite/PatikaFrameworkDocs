import React from 'react' 
import DocPaper from '../../../DocPaper';
const contents = [
  {
    order: 1,
    type: 'code',
    title: 'TokenGenerator',
    language: 'csharp',
    startingLineNumber: 11,
    item: `
    namespace Patika.Framework.Identity.JwtToken.Services
    {
        public class TokenGenerator : CoreService, ITokenGenerator
        {
            private readonly ISimpleHash Hasher;
            private readonly Configuration Configuration;
            public TokenGenerator(IServiceProvider serviceProvider) : base(serviceProvider)
            {
                Configuration = GetService<Configuration>();
                Hasher = GetService<ISimpleHash>(); 
            }`,
    descriptions: [
      "Constructor and props",   
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'GenerateToken',
    language: 'csharp',
    startingLineNumber: 23,
    item: `
            public Token GenerateToken(IEnumerable<Claim>? claims)
            {
                var securityToken = GenerateSecurityToken(claims);
                var accessToken = new JwtSecurityTokenHandler().WriteToken(securityToken);
                (string? refreshToken, string? refreshTokenHashed) = GetRefreshTokens();
                string? accessTokenHashed = GetJwtTokenHashed(accessToken);

                return new Token
                {
                    AccessToken = accessToken,
                    AccessTokenHashed = accessTokenHashed,
                    RefreshToken = refreshToken,
                    RefreshTokenHashed = refreshTokenHashed,
                    ExpireTime = securityToken.ValidTo.ToLocalTime()
                };
            }  `,
    descriptions: [
      "Generates token (access and refresh tokens) ",  
      "Returns token model" 
    ],
  }, 
  {
    order: 3,
    type: 'code',
    title: 'RefreshToken',
    language: 'csharp',
    startingLineNumber: 40,
    item: ` 
            public Token RefreshToken(string accessToken)
            {
                if (Configuration.Jwt.HaveRefreshToken)
                {
                    var claims = GetPrincipalFromExpiredToken(accessToken)?.Claims;
                    var tokenModel = GenerateToken(claims);
                    return new Token
                    {
                        AccessToken = tokenModel.AccessToken,
                        AccessTokenHashed = tokenModel.AccessTokenHashed,
                        RefreshToken = tokenModel.RefreshToken,
                        RefreshTokenHashed = tokenModel.RefreshTokenHashed,
                        ExpireTime = tokenModel.ExpireTime
                    };
                }
                throw new JwtHaveRefreshTokenFalseException();
            }   `,
    descriptions: [
      "Refreshs user token by user's previous access token",   
    ],
  }  , 
  {
    order: 4,
    type: 'code',
    title: 'GetPrincipalFromExpiredToken',
    language: 'csharp',
    startingLineNumber: 58,
    item: `
            public ClaimsPrincipal? GetPrincipalFromExpiredToken(string token)
            {
                var tokenValidationParameters = new TokenValidationParameters
                {
                    ValidateAudience = Configuration.Jwt.ValidateAudience,
                    ValidAudience = Configuration.Jwt.ValidAudience,
                    ValidateIssuer = Configuration.Jwt.ValidateIssuer,
                    ValidIssuer = Configuration.Jwt.ValidIssuer,
                    ValidateIssuerSigningKey = Configuration.Jwt.ValidateIssuerSigningKey,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.Jwt.Secret)),
                    ValidateLifetime = Configuration.Jwt.ValidateLifetime,

                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken securityToken);
                if (securityToken is not JwtSecurityToken jwtSecurityToken || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                    throw new SecurityTokenException("Invalid token");

                return principal;
            } `,
    descriptions: [
      "Acquires user claims from expired token",   
    ],
  } ,
  {
    order: 5,
    type: 'code',
    title: 'GetJwtTokenHashed',
    language: 'csharp',
    startingLineNumber: 80,
    item: ` 
            private string GetJwtTokenHashed(string jwtToken)
            {
                var jwtTokenHashed = jwtToken;
                if (Configuration.Jwt.HashAccessToken)
                {
                    jwtTokenHashed = Hasher.Hash(jwtToken);
                }

                return jwtTokenHashed;
            } `,
    descriptions: [
      "Returns HasshedAccessToken value",   
    ],
  }    , 
  {
    order: 6,
    type: 'code',
    title: 'GetRefreshTokens',
    language: 'csharp',
    startingLineNumber: 91,
    item: `  
            private Tuple<string, string> GetRefreshTokens()
            {
                var refreshToken = string.Empty;
                var refreshTokenHashed = string.Empty;
                if (Configuration.Jwt.HaveRefreshToken)
                {
                    refreshToken = GenerateRefreshToken();
                    refreshTokenHashed = refreshToken;
                    if (Configuration.Jwt.HashRefreshToken)
                    {
                        refreshTokenHashed = Hasher.Hash(refreshToken);
                    }
                }
                return new Tuple<string, string>(refreshToken, refreshTokenHashed);
            }`,
    descriptions: [
      "Generates refreshToken, refreshTokenHashed tuple",   
    ],
  }   , 
  {
    order: 7,
    type: 'code',
    title: 'GenerateRefreshToken',
    language: 'csharp',
    startingLineNumber: 107,
    item: `    
            private string GenerateRefreshToken()
            {
                var randomNumber = new byte[64];
                using var rng = RandomNumberGenerator.Create();
                rng.GetBytes(randomNumber);
                var refreshToken = Convert.ToBase64String(randomNumber);

                return refreshToken;
            }`,
    descriptions: [
      "Generates refresh token using random generator",   
    ],
  }     , 
  {
    order: 8,
    type: 'code',
    title: 'GenerateSecurityToken',
    language: 'csharp',
    startingLineNumber: 117,
    item: `  
            private JwtSecurityToken GenerateSecurityToken(IEnumerable<Claim>? claims)
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.Jwt.Secret));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    Configuration.Jwt.ValidIssuer,
                    Configuration.Jwt.ValidAudience,
                    claims,
                    expires: DateTime.Now.AddMinutes(Configuration.Jwt.TokenValidityInMinutes),
                    signingCredentials: credentials);
                return token;
            } 
        
        }
    }`,
    descriptions: [
      "Generates JwtSecurityToken",   
    ],
  }  
]

const header = 'Patika.Framework.Identity.JwtToken.Services';
const TokenGenerator = () => {
  return (<>
    
    <DocPaper  header={header} contents={contents} />    
  </>
  )
}  

export default TokenGenerator