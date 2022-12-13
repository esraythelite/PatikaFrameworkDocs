import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ClientSecretGenerator',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    public static class ClientSecretGenerator
    {
        public static string GenerateClientSecret(this Configuration configuration)
        {
            var now = DateTime.UtcNow;
            var ecdsa = ECDsa.Create();
            ecdsa?.ImportPkcs8PrivateKey(Convert.FromBase64String(configuration.PrivateKey), out _);

            var handler = new JsonWebTokenHandler();

            return handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = configuration.TeamId,
                Audience = Consts.Consts.Audience,
                Claims = new Dictionary<string, object> { { "sub", configuration.ClientId } },
                Expires = now.AddMinutes(245), // expiry can be a maximum of 6 months - generate one per request or re-use until expiration
                IssuedAt = now,
                NotBefore = now,
                SigningCredentials = new SigningCredentials
                (
                    new ECDsaSecurityKey(ecdsa)
                    {
                        KeyId = configuration.KeyId
                    },
                    SecurityAlgorithms.EcdsaSha256
                )
            });
        }
    } `,
    descriptions: [
      "Configuration model for adding Apple Authentication"
    ],
  }, 
]

const header = 'Patika.Framework.Identity.AppleAuthProvider.Extensions';
const ClientSecretGenerator = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default ClientSecretGenerator