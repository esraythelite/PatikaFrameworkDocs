import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'IdentityService',
    language: 'csharp',
    startingLineNumber: 16,
    item: `
    using Configuration = Patika.Framework.Identity.Models.Configuration;

    namespace Patika.Framework.Identity.Service
    {
        public class IdentityService : CoreService, IIdentityService
        {
            UserManager<ApplicationUser> UserManager { get; }
            IUserStore<ApplicationUser> UserStore { get; }
            SignInManager<ApplicationUser> SignInManager { get; }
            IdentityDbContext<ApplicationUser> IdentityDbContext { get; }
            RoleManager<IdentityRole> RoleManager { get; }
            IUserEmailStore<ApplicationUser> EmailStore { get; set; }
            ITokenGenerator TokenGenerator { get; }
            IWrongPasswordAttemptRepository WrongPasswordAttemptRepository { get; }
            IUserRefreshTokenRepository UserRefreshTokenRepository { get; }
            IUserTenantRepository UserTenantRepository { get; }
            Configuration Configuration { get; }
            IRegistrationInputValidator RegistrationInputValidator { get; }
            IRefreshTokenInputDTOValidator RefreshTokenInputDTOValidator { get; }
            IApplicationRegistrationInputValidator ApplicationRegistrationInputValidator { get; }
            IResetPasswordInputValidator ResetPasswordInputValidator { get; }
    
            public IdentityService(IServiceProvider serviceProvider
                ) : base(serviceProvider)
            {
                UserManager = GetService<UserManager<ApplicationUser>>();
                UserStore = GetService<IUserStore<ApplicationUser>>();
                SignInManager = GetService<SignInManager<ApplicationUser>>();
                IdentityDbContext = GetService<IdentityDbContext<ApplicationUser>>();
                RoleManager = GetService<RoleManager<IdentityRole>>();
                EmailStore = GetEmailStore();
                TokenGenerator = GetService<ITokenGenerator>();
                WrongPasswordAttemptRepository = GetService<IWrongPasswordAttemptRepository>();
                UserRefreshTokenRepository = GetService<IUserRefreshTokenRepository>();
                UserTenantRepository = GetService<IUserTenantRepository>();
                Configuration = GetService<Configuration>();
                RegistrationInputValidator = GetService<IRegistrationInputValidator>();
                RefreshTokenInputDTOValidator = GetService<IRefreshTokenInputDTOValidator>();
                ApplicationRegistrationInputValidator = GetService<IApplicationRegistrationInputValidator>();
                ResetPasswordInputValidator = GetService<IResetPasswordInputValidator>();
            } `,
    descriptions: [
        "Constructor and props"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'LoginAsync',
    language: 'csharp',
    startingLineNumber: 57,
    item: `
          public async Task<Token> LoginAsync(LoginInput input)
          {
              var user = await FindByNameAsync(input.UserName);
              if (user is null)
              {
                  throw new UserNotFoundException();
              }
              if (await WrongPasswordAttemptRepository.IsUserBlockedAsync(user.Id))
                  throw new UserIsLockedException();

              if (await UserManager.CheckPasswordAsync(user, input.Password))
              {
                  return await CreateTokenAsync(user);
              }

              await WrongPasswordAttemptRepository.InsertOneAsync(new WrongPasswordAttempt
              {
                  AttemptTime = DateTime.Now,
                  UserId = user.Id
              });
              throw new WrongUsernameOrPasswordException();
          }`,
    descriptions: [
        "Login"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'SignOutAsync',
    language: 'csharp',
    startingLineNumber: 80,
    item: `
          public async Task SignOutAsync()
          {
              await SignInManager.SignOutAsync();
          }  `,
    descriptions: [
        "Logout (signout)"
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'RegisterAsync',
    language: 'csharp',
    startingLineNumber: 85,
    item: `
          public async Task<Token> RegisterAsync(RegistrationInput input)
          {
              await RegistrationInputValidator.ValidateAndThrowAsync(input);

              input.Email = input.Email.Trim();
              var user = CreateUserInstance();

              await UserStore.SetUserNameAsync(user, input.UserName, CancellationToken.None);
              await EmailStore.SetEmailAsync(user, input.Email, CancellationToken.None);

              var result = await UserManager.CreateAsync(user, input.Password);

              if (!result.Succeeded)
              {
                  throw new UserCreationOnRegistrationFailed();
              }

              var signInResult = await SignInManager.PasswordSignInAsync(user, input.Password, isPersistent: false, lockoutOnFailure: true);
              if (!signInResult.Succeeded)
              {
                  throw new PasswordSignInFailedException();
              }

              user = await UserManager.FindByEmailAsync(input.Email);
              if (user is null)
              {
                  throw new UserNotFoundException();
              }
              await AddToRoleAsync(user, input.Roles.Select(r => r.Role).ToArray());

              return await CreateTokenAsync(user);
          }  `,
    descriptions: [
        "Register"
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'RefreshTokenAsync',
    language: 'csharp',
    startingLineNumber: 118,
    item: `
          public async Task<Token> RefreshTokenAsync(RefreshTokenInputDTO input)
          {
              await RefreshTokenInputDTOValidator.ValidateAndThrowAsync(input);

              var claims = TokenGenerator.GetPrincipalFromExpiredToken(input.AccessToken);
              if (claims is null)
              {
                  throw new GetPrincipalFromExpireTokenFailed();
              }
              if (!claims.Claims.Any())
              {
                  throw new GetPrincipalFromExpireTokenFailed();
              }
              var userIdClaim = claims.Claims.FirstOrDefault(m => m.Type == ClaimTypes.Name);
              if (userIdClaim is null)
                  throw new GetPrincipalFromExpireTokenFailed();

              string userId = userIdClaim.Value;
              var user = FindByIdAsync(userId).Result;
              if (user is null)
                  throw new InvalidAccessTokenException();

              var refreshToken = await UserRefreshTokenRepository.GetRefreshTokenAsync(userId, input.RefreshToken);

              if (refreshToken == null || refreshToken.RefreshTokenExpiryTime <= DateTime.Now)
              {
                  throw new InvalidRefreshTokenException();
              }

              var token = TokenGenerator.RefreshToken(input.AccessToken);

              await UserRefreshTokenRepository.InsertOneAsync(new UserRefreshToken
              {
                  RefreshToken = token.RefreshToken,
                  Token = token.AccessToken,
                  RefreshTokenExpiryTime = DateTime.Now.AddDays(Configuration.JwtAuthConfiguration.Jwt.TokenValidityInHours),
                  UserId = userId
              });

              return token;
          }  `,
    descriptions: [
        "Refresh token"
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'FindByNameAsync',
    language: 'csharp',
    startingLineNumber: 160,
    item: `
          public async Task<ApplicationUser> FindByNameAsync(string userName)
          {
              ApplicationUser? applicationUser = await IdentityDbContext.Users.FirstOrDefaultAsync(m => m.UserName == userName);
              return applicationUser;
          } `,
    descriptions: [
        "Finds user by username"
    ],
  },
  {
    order: 7,
    type: 'code',
    title: 'FindByIdAsync',
    language: 'csharp',
    startingLineNumber: 166,
    item: `
          public async Task<ApplicationUser> FindByIdAsync(string userId)
          {
              return await UserManager.FindByIdAsync(userId);
          }  `,
    descriptions: [
        "Finds user by user id"
    ],
  },
  {
    order: 8,
    type: 'code',
    title: 'FindByEmailAsync',
    language: 'csharp',
    startingLineNumber: 171,
    item: `
          public async Task<ApplicationUser> FindByEmailAsync(string email)
          {
              return await UserManager.FindByEmailAsync(email);
          } `,
    descriptions: [
        "Finds user by email"
    ],
  },
  {
    order: 9,
    type: 'code',
    title: 'CreateApplicationAsync',
    language: 'csharp',
    startingLineNumber: 176,
    item: `
          public async Task CreateApplicationAsync(ApplicationRegistrationInput input)
          {
              await ApplicationRegistrationInputValidator.ValidateAndThrowAsync(input);

              if (await UserManager.FindByEmailAsync(input.Email) != null)
                  return;
              var userId = await RegisterApplicationAsync(input);
              ApplicationUser user = await UserManager.FindByIdAsync(userId);
              await AddToRoleAsync(user, input.Roles.Select(r => r.Role).ToArray());
          }  `,
    descriptions: [
        "Creates and registers application.",
        "Application means microservice here",
        "Purpose: providing machine to machine authentication"
    ],
  },
  {
    order: 10,
    type: 'code',
    title: 'AddRolesByUserNameAsync',
    language: 'csharp',
    startingLineNumber: 187,
    item: `
          public async Task AddRolesByUserNameAsync(string userName, params string[] roles)
          {
              ApplicationUser user = await UserManager.FindByNameAsync(userName);

              await AddToRoleAsync(user, roles);
          } `,
    descriptions: [
        "Adds roles to user after found user by name"
    ],
  },
  {
    order: 11,
    type: 'code',
    title: 'CreateRoleAsync',
    language: 'csharp',
    startingLineNumber: 194,
    item: `
          public async Task CreateRoleAsync(string role)
          {
              var roleExists = await RoleManager.RoleExistsAsync(role);
              if (!roleExists)
              {
                  var newRole = new IdentityRole(role);
                  await RoleManager.CreateAsync(newRole);
              }
          }  `,
    descriptions: [
        "Creates role"
    ],
  },
  {
    order: 12,
    type: 'code',
    title: 'GetRolesAsync',
    language: 'csharp',
    startingLineNumber: 204,
    item: `
          public async Task<IList<string>> GetRolesAsync(ApplicationUser user)
          {
              return await UserManager.GetRolesAsync(user);
          }  `,
    descriptions: [
        "Gets user roles"
    ],
  },
  {
    order: 13,
    type: 'code',
    title: 'ResetPassword',
    language: 'csharp',
    startingLineNumber: 209,
    item: `
          public async Task ResetPassword(ResetPasswordInput input)
          {
              await ResetPasswordInputValidator.ValidateAndThrowAsync(input);

              var user = await IdentityDbContext.Users.FirstOrDefaultAsync(m => m.UserName == input.UserName);
              if (user is null)
              {
                  throw new UserNotFoundException();
              }
              user = await UserManager.FindByIdAsync(user.Id);
              var token = await UserManager.GeneratePasswordResetTokenAsync(user);

              var res = await UserManager.ResetPasswordAsync(user, token, input.NewPassword);
              if (res == null || !res.Succeeded)
              {
                  var error = res?.Errors.First();
                  throw new PasswordFormatInvalidException();
              }
          }  `,
    descriptions: [
        "Resets pasword"
    ],
  },
  {
    order: 14,
    type: 'code',
    title: 'RegisterApplicationAsync',
    language: 'csharp',
    startingLineNumber: 229,
    item: `
          private async Task<string> RegisterApplicationAsync(ApplicationRegistrationInput input)
          {
              await ApplicationRegistrationInputValidator.ValidateAndThrowAsync(input);

              var user = CreateUserInstance();
              await UserStore.SetUserNameAsync(user, input.Name, CancellationToken.None);
              await EmailStore.SetEmailAsync(user, input.Email, CancellationToken.None);
              user.UserName = input.Name;
              var password = input.Secret;
              var result = await UserManager.CreateAsync(user, password);

              if (result.Succeeded)
                  return user.Id;
              throw new ApplicationRegistrationFailedException();
          } `,
    descriptions: [
        "Registers application (called from CreateApplicationAsync)"
    ],
  },
  {
    order: 15,
    type: 'code',
    title: 'CreateUserInstance',
    language: 'csharp',
    startingLineNumber: 245,
    item: ` 
          protected ApplicationUser CreateUserInstance()
          {
              try
              {
                  return Activator.CreateInstance<ApplicationUser>();
              }
              catch
              {
                  throw new CreateUserInstanceFailedException();
              }
          } `,
    descriptions: [
        "Creates user instance"
    ],
  },
  {
    order: 16,
    type: 'code',
    title: 'AddToRoleAsync',
    language: 'csharp',
    startingLineNumber: 257,
    item: `
        private async Task AddToRoleAsync(ApplicationUser user, params string[] roles)
        {
            foreach (var role in roles)
            {
                if (!await UserManager.IsInRoleAsync(user, role))
                    await UserManager.AddToRoleAsync(user, role);
            }
        }  `,
    descriptions: [
        "Adds roles to user"
    ],
  },
  {
    order: 17,
    type: 'code',
    title: 'GetEmailStore',
    language: 'csharp',
    startingLineNumber: 266,
    item: ` 
          private IUserEmailStore<ApplicationUser> GetEmailStore()
          {
              if (!UserManager.SupportsUserEmail)
              {
                  throw new UserManagerEmailNotSupportedException();
              }
              return (IUserEmailStore<ApplicationUser>)UserStore;
          } `,
    descriptions: [
        "called in constructor to inject IUserEmailStore"
    ],
  },
  {
    order: 18,
    type: 'code',
    title: 'GetClaimsAsync',
    language: 'csharp',
    startingLineNumber: 276,
    item: `
    public async Task<List<Claim>> GetClaimsAsync(ApplicationUser user)
    {
        try
        {
            var userRoles = await UserManager.GetRolesAsync(user);
            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Id),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Email, user.Email),
            };

            foreach (var userRole in userRoles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, userRole));
            }
            return authClaims;
        }
        catch (Exception ex)
        {
            throw new GettingUserClaimsFailedException();
        }
    }  `,
    descriptions: [
        "Gets user claims"
    ],
  },
  {
    order: 19,
    type: 'code',
    title: 'CreateTokenAsync',
    language: 'csharp',
    startingLineNumber: 299,
    item: ` 
          public async Task<Token> CreateTokenAsync(ApplicationUser user)
          {
              var claims = await GetClaimsAsync(user);
              var token = TokenGenerator.GenerateToken(claims);
              var userTenants = await UserTenantRepository.WhereAsync(t => t.UserId == user.GetGuid());
              token.Tenants = userTenants.Select(t => t.TenantId).ToList();
              return token;
          } `,
    descriptions: [
        "Generates token, acquires user tenants and returns token"
    ],
  }
]

const header = 'Patika.Framework.Identity.Service';
const IdentityService = () => {
  return (
    <DocPaper header={header} contents={contents} />
  )
}

export default IdentityService