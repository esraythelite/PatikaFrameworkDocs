import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'Configuration',
    language: 'csharp',
    item: ` 
    namespace Patika.Framework.Identity.Models
    {
        public class Configuration
        {
            public AppleAuthProvider.Models.Configuration? AppleAuthConfiguration { get; set; }
            public FacebookAuthProvider.Models.Configuration? FacebookAuthConfiguration { get; set; }
            public GoogleAuthProvider.Models.Configuration? GoogleAuthConfiguration { get; set; }
            public JwtToken.Models.Configuration JwtAuthConfiguration { get; set; } = new();
            public OktaAuthProvider.Models.Configuration? OktaAuthConfiguration { get; set; }
        }
    } `,
    descriptions: [      
      "Model for adding jwt and external authentication providers",
      'All supported external auth providers will be add here, if configured!',
      "JwtAuthConfiguration is not nullable, required, must be configured!",  
      "AppleAuthConfiguration, FacebookAuthConfiguration, GoogleAuthConfiguration and OktaAuthConfiguration is using for Adding external authentication providers.",
      "Any external authentication provider will be added unless it's configuration object is defined.",
    ],
  }
]

const header = 'Patika.Framework.Identity.Models';
const IdentityModels = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}
export default IdentityModels