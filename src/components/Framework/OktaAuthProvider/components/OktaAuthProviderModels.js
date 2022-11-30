import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Configuration',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    namespace Patika.Framework.Identity.OktaAuthProvider.Models
    {
        public class Configuration
        {
            public string ClientId { get; set; } = string.Empty;
            public string ClientSecret { get; set; } = string.Empty;
            public string Issuer { get; set; } = string.Empty;
            public ScopeEnum Scopes { get; set; }             
            public string ScopesString
            {
                get
                {
                    return Scopes.ToString();
                }
                set
                {
                    var flags = value.StringToEnumFlags<ScopeEnum>(',');
                    Scopes |= flags;
                }
            } 
        }
    } `,
    descriptions: [
      "Configuration model for adding Okta Authentication"
    ],
  }
]

const header = 'Patika.Framework.Identity.OktaAuthProvider.Models';
const OktaAuthProviderModels = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default OktaAuthProviderModels