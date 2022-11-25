import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ExternalIdentityService',
    language: 'csharp',
    startingLineNumber: 17,
    item: `
    using Configuration = Patika.Framework.Identity.Models.Configuration;

    namespace Patika.Framework.Identity.Service
    {
        public class ExternalIdentityService : IdentityService, IExternalIdentityService
        {
            public ExternalIdentityService(
                UserManager<ApplicationUser> userManager,
                IUserStore<ApplicationUser> userStore,
                SignInManager<ApplicationUser> signInManager,
                IdentityDbContext<ApplicationUser> identityDbContext,
                RoleManager<IdentityRole> roleManager,
                ITokenGenerator tokenGenerator,
                IWrongPasswordAttemptRepository wrongPasswordAttemptRepository,
                IUserRefreshTokenRepository userRefreshTokenRepository, 
                IUserTenantRepository userTenantRepository,
                Configuration configuration
                ) : base(
                    userManager,
                    userStore,
                    signInManager,
                    identityDbContext,
                    roleManager,
                    tokenGenerator,
                    wrongPasswordAttemptRepository,
                    userRefreshTokenRepository,
                    userTenantRepository,
                    configuration)
            {
            }  `,
    descriptions: [
      "Constructor and props"
       ],
  },
  {
    order: 2,
    type: 'code',
    title: 'LoginWithGoogle',
    language: 'csharp',
    startingLineNumber: 48,
    item: `
          public ChallengeResult LoginWithGoogle(string callback)
          {
              var provider = GoogleDefaults.AuthenticationScheme;
              var url = $"/identity/authorize/callback?callback={callback}";
              return Login(callback, provider, url);
          }`,
    descriptions: [
       ],
  },
  {
    order: 3,
    type: 'code',
    title: 'LoginWithFacebook',
    language: 'csharp',
    startingLineNumber: 55,
    item: ` 
          public ChallengeResult LoginWithFacebook(string callback)
          {
              var provider = FacebookDefaults.AuthenticationScheme;
              var url = $"/identity/authorize/callback?callback={callback}";
              return Login(callback, provider, url);
          }  `,
    descriptions: [
       ],
  },
  {
    order: 4,
    type: 'code',
    title: 'LoginWithApple',
    language: 'csharp',
    startingLineNumber: 62,
    item: ` 
          public ChallengeResult LoginWithApple(string callback)
          {
              var provider = AppleAuthenticationDefaults.AuthenticationScheme;
              var url = $"/identity/authorize/callback?callback={callback}";
              return Login(callback, provider, url);
          }  `,
    descriptions: [
       ],
  },
  {
    order: 5,
    type: 'code',
    title: 'LoginWithOkta',
    language: 'csharp',
    startingLineNumber: 69,
    item: `
          public ChallengeResult LoginWithOkta(string callback)
          {
              var provider = OpenIdConnectDefaults.AuthenticationScheme;
              var url = $"/identity/authorize/callback?callback={callback}";
              return Login(callback, provider, url);
          }   `,
    descriptions: [
       ],
  },
  {
    order: 6,
    type: 'code',
    title: 'Login',
    language: 'csharp',
    startingLineNumber: 76,
    item: ` 
          private ChallengeResult Login(string callback, string provider, string url)
          {
              if (string.IsNullOrEmpty(callback))
              {
                  throw new ExternalAuthCallbackIsRequiredException();
              }
              var properties = SignInManager.ConfigureExternalAuthenticationProperties(provider, url);
              return new ChallengeResult(provider, properties);
          }  `,
    descriptions: [
       ],
  },
  {
    order: 7,
    type: 'code',
    title: 'ProcessCallback',
    language: 'csharp',
    startingLineNumber: 86,
    item: `
          public async Task<Token> ProcessCallback(string remoteError, string callback, string role)
          {
              if (!string.IsNullOrEmpty(remoteError))
              {
                  throw new ExternalProviderRemoteErrorException($"Error from external provider: {remoteError}");
              }
              if (string.IsNullOrEmpty(callback))
              {
                  throw new ExternalAuthCallbackIsRequiredException();
              }
              var info = await SignInManager.GetExternalLoginInfoAsync();
              if (info == null)
              {
                  throw new ExternalLoginFailedException();
              }
              var result = await SignInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false, bypassTwoFactor: true);
              var email = info.Principal.FindFirstValue(ClaimTypes.Email);
              if (result.Succeeded)
              {
                  var user = await UserManager.FindByEmailAsync(email);
                  if (await UserManager.IsInRoleAsync(user, role))
                  {
                      return await CreateTokenAsync(user);
                  }
                  else
                  {
                      await SignInManager.SignOutAsync();
                      throw new UserRoleDoesNotMatch();
                  }
              }
              if (result.IsLockedOut)
              {
                  throw new UserIsLockedException();
              }
              else
              {
                  var user = await UserManager.FindByEmailAsync(email);

                  if (user == null)
                  {
                      var res = await CreateUserAsync(role);
                      if (!res)
                          throw new CreateUserFailedException();
                      user = await UserManager.FindByEmailAsync(email);
                  }
                  else
                  {
                      await UserManager.AddLoginAsync(user, new UserLoginInfo(
                          info.LoginProvider, info.ProviderKey, info.ProviderDisplayName));
                  }
                  result = await SignInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false, bypassTwoFactor: true);
                  if (result.Succeeded)
                  {
                      return await CreateTokenAsync(user);
                  }
                  // TODO : what kind of exception?
                  throw new GeneralAuthException("Unknown error occured");
              }
          }`,
    descriptions: [
       ],
  },
  {
    order: 8,
    type: 'code',
    title: 'CreateUserAsync',
    language: 'csharp',
    startingLineNumber: 147,
    item: `
          private async Task<bool> CreateUserAsync(string role)
          {
              var info = await SignInManager.GetExternalLoginInfoAsync();
              var email = info.Principal.FindFirstValue(ClaimTypes.Email);
              var name = info.Principal.FindFirstValue(ClaimTypes.GivenName);
              var lastName = info.Principal.FindFirstValue(ClaimTypes.Surname);

              if (info == null)
              {
                  throw new ExternalLoginFailedException();
              }

              var user = CreateUserInstance();

              await UserStore.SetUserNameAsync(user, email, CancellationToken.None);
              await EmailStore.SetEmailAsync(user, email, CancellationToken.None);

              user.FirstName = name ?? string.Empty;
              user.LastName = lastName ?? string.Empty;
              user.Id = new Guid().NewSequentalGuid().ToString();

              var result = await UserManager.CreateAsync(user);

              if (result.Succeeded)
              {
                  result = await UserManager.AddLoginAsync(user, info);
                  if (result.Succeeded)
                  {
                      var userId = await UserManager.GetUserIdAsync(user);
                      var code = await UserManager.GenerateEmailConfirmationTokenAsync(user);
                      code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                      //TODO: ask to master
                      /* 
                      var callbackUrl = Url.Page(
                          "/Account/ConfirmEmail",
                          pageHandler: null,
                          values: new { area = "Identity", userId, code },
                          protocol: Request.Scheme) ?? "";

                            await EmailSender.SendEmailAsync(email, "Confirm your email",
                                $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");
                      */
                      // If account confirmation is required, we need to show the link if we don't have a real email sender
                      if (UserManager.Options.SignIn.RequireConfirmedAccount)
                      {
                          throw new AccountConfirmationRequiredException();
                      }

                      await UserManager.AddToRoleAsync(user, role);

                      await SignInManager.SignInAsync(user, isPersistent: false, info.LoginProvider);
                      //return LocalRedirect(returnUrl);
                  }
              }
              if (!result.Errors.Any())
              {
                  return true;
              }

              var str = "";
              foreach (var error in result.Errors)
              {
                  str += $"\r\n {error.Description}";
              }
              throw new GeneralAuthException(str);
          }
      }
    }`,
    descriptions: [
       ],
  }
]

const header = 'Patika.Framework.Identity.Service';
const ExternalIdentityService = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default ExternalIdentityService