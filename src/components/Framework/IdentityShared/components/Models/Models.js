import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../../DocPaper'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ApplicationRegistrationInput',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.Shared.Models
    {
        public class ApplicationRegistrationInput
        {
            public string Name { get; set; } = string.Empty;
            public string Secret { get; set; } = string.Empty;
            public List<RoleInput> Roles { get; set; } = new();
            public string EmailExtension { get; set; } = "@patika.com";
            public string Email => $"{Name}@{EmailExtension.Replace("@", "")}";    
        }
    }`,
    descriptions: [
      "Use this in startup of IdentityServer project to add ApplicationUsers",
      "Name is userName, Secret is user password",
      "Roles is application roles",
      "Email extension must be customer email extension",
      "Email is generated from name and email"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'LoginInput',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.Shared.Models
    {
        public class LoginInput  
        {
            public string UserName { get; set; } = String.Empty;
            public string Password { get; set; } = String.Empty; 
        }
    }    `,
    descriptions: [
      "Firs map BasicLoginInputDto to LoginInput, then call Login method from Patika.Identity package"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'RegistrationInput',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.Shared.Models
    {
        public class RegistrationInput  
        {
            public string UserName { get; set; } =string.Empty;
            public string Email { get; set; } = string.Empty;
            public string Password { get; set; } = string.Empty;
            public string ConfirmPassword { get; set; } = string.Empty;
            public List<RoleInput> Roles { get; set; } = new(); 
        }
    }`,
    descriptions: [
      "Firs map BasicRegistrationInputDto to RegistrationInput, then call Registration method from Patika.Identity package"
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'RegistrationOutput',
    language: 'csharp',
    startingLineNumber: 0,
    item: `
    namespace Patika.Framework.Identity.Shared.Models
    {
        public class RegistrationOutput
        {
            public string Email { get; set; } = String.Empty;
            public bool IsActivationCodeSent { get; set; }
        }
    }`,
    descriptions: [
      "The response of Basic Registration"
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'ResetPasswordInput',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.Shared.Models
    {
        public class ResetPasswordInput 
        {
            public string UserName { get; set; } = string.Empty;
            public string ActivationCode { get; set; } = string.Empty;
            public string NewPassword { get; set; } = string.Empty;  
        }
    }`,
    descriptions: [
      "Firs map ResetPasswordInputDto to ResetPasswordInput, then call ResetPassword method from Patika.Identity package"
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'RoleInput',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.Shared.Models
    {
        public class RoleInput  
        {
            public string Role { get; set; } = string.Empty;           
        }
    }`,
    descriptions: [
      "On user or application registration, List of roles must be type of List of RoleInput"
    ],
  }
]

const header = 'Patika.Framework.Identity.Shared.Models';
const ModelsIdentityShared = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
export default ModelsIdentityShared