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
    namespace Patika.Framework.Identity.AppleAuthProvider.Models
    {
        public class Configuration  
        {
            public string KeyId { get; set; } = string.Empty;
            public string ClientId { get; set; } = string.Empty;
            public string TeamId { get; set; } = string.Empty;
            public string CallbackPath { get; set; } = string.Empty;
            public string PrivateKey { get; set; } = string.Empty;
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
    }    `,
    descriptions: [
      "Configuration model for adding Apple Authentication"
    ],
  }
]

const header = 'Patika.Framework.Identity.AppleAuthProvider.Models';
const AppleAuthProviderModels = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default AppleAuthProviderModels