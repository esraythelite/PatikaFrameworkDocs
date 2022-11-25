import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IIdentityService',
    language: 'csharp',
    startingLineNumber: 5,
    item: `
    namespace Patika.Framework.Identity.Interface
    {
        public interface IIdentityService
        {
            Task<Token> LoginAsync(LoginInput input);
            Task SignOutAsync();
            Task<Token> RegisterAsync(RegistrationInput input);
            Task<Token> RefreshTokenAsync(RefreshTokenInputDTO input);
            Task<ApplicationUser> FindByNameAsync(string userName);
            Task<ApplicationUser> FindByIdAsync(string userId);
            Task<ApplicationUser> FindByEmailAsync(string email);
            Task CreateApplicationAsync(ApplicationRegistrationInput input);
            Task AddRolesByUserNameAsync(string name, params string[] roles);
            Task CreateRoleAsync(string role);
            Task<IList<string>> GetRolesAsync(ApplicationUser user);
            Task ResetPassword(ResetPasswordInput input);
            Task<Token> CreateTokenAsync(ApplicationUser user);
        }
    }`,
    descriptions: [
      ""
       ],
  } ,
  {
    order: 2,
    type: 'code',
    title: 'IExternalIdentityService',
    language: 'csharp',
    startingLineNumber: 3,
    item: `
    namespace Patika.Framework.Identity.Interface
    {
        public interface IExternalIdentityService
        {
            ChallengeResult LoginWithGoogle(string callback);
            ChallengeResult LoginWithFacebook(string callback);
            ChallengeResult LoginWithApple(string callback);
            ChallengeResult LoginWithOkta(string callback);
    
            Task<Token> ProcessCallback(string remoteError, string callback, string role);
        }
    } `,
    descriptions: [
       ],
  }  
]

const header = 'Patika.Framework.Identity.Interface';
const IdentityInterfaces = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default IdentityInterfaces