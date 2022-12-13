import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'AccessTokenRequiredException',
    language: 'csharp',
    
    item: `
  namespace Patika.Framework.Identity.Shared.Exceptions
  {
      public class AccessTokenRequiredException : BaseApplicationException
      {
          public AccessTokenRequiredException( ) : base($"{typeof(AccessTokenRequiredException).FullName}")
          {
          }
      }
  }`,
    descriptions: [
      "Throw this exception if user account not confirmed yet"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'AccountConfirmationRequiredException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class AccountConfirmationRequiredException : BaseApplicationException
        {
            public AccountConfirmationRequiredException( ) : base($"{typeof(AccountConfirmationRequiredException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception if user account not confirmed yet"
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'ActivationCodeRequiredException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class ActivationCodeRequiredException : BaseApplicationException
        {
            public ActivationCodeRequiredException( ) : base($"{typeof(ActivationCodeRequiredException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception if user account not confirmed yet"
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'ApplicationRegistrationFailedException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class ApplicationRegistrationFailedException : BaseApplicationException
        {
            public ApplicationRegistrationFailedException() : base($"{typeof(ApplicationRegistrationFailedException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when registration of application failed.",
      "Remember we supports machine to machine authorization.",
      "For this purpose, application must be registered"
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'CreateUserFailedException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class CreateUserFailedException : BaseApplicationException
        {
            public CreateUserFailedException() : base($"{typeof(CreateUserFailedException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception user creation failed on user registration."
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'CreateUserInstanceFailedException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class CreateUserInstanceFailedException : BaseApplicationException
        {
            public CreateUserInstanceFailedException() : base($"{typeof(CreateUserInstanceFailedException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception user instance creation failed on user registration."
    ],
  },
  {
    order: 7,
    type: 'code',
    title: 'ExternalAuthCallbackIsRequiredException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class ExternalAuthCallbackIsRequiredException : BaseApplicationException
        {
            public ExternalAuthCallbackIsRequiredException() : base($"{typeof(ExternalAuthCallbackIsRequiredException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception if callback is not defined in external authentication.",
      "External authentication is login with social accounts, okta etc."
    ],
  },
  {
    order: 8,
    type: 'code',
    title: 'ExternalLoginFailedException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class ExternalLoginFailedException : BaseApplicationException
        {
            public ExternalLoginFailedException() : base($"{typeof(ExternalLoginFailedException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception if external login failed.",
      "External authentication is login with social accounts, okta etc."
    ],
  },
  {
    order: 9,
    type: 'code',
    title: 'ExternalProviderRemoteErrorException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class ExternalProviderRemoteErrorException : BaseApplicationException
        {
            public ExternalProviderRemoteErrorException( string message) : base($"{typeof(ExternalProviderRemoteErrorException).FullName}", message)
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception if external provider response with errors",
      "External authentication is login with social accounts, okta etc."
    ],
  },
  {
    order: 10,
    type: 'code',
    title: 'GeneralAuthException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class GeneralAuthException : BaseApplicationException
        {
            public GeneralAuthException(  string message) : base($"{typeof(GeneralAuthException).FullName}", message)
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception in authentication if there is no special exception",
    ],
  },
  {
    order: 11,
    type: 'code',
    title: 'GetPrincipalFromExpireTokenFailed',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class c : BaseApplicationException
        {
            public GetPrincipalFromExpireTokenFailed() : base($"{typeof(GetPrincipalFromExpireTokenFailed).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when getting user principals from expired token",
    ],
  },
  {
    order: 12,
    type: 'code',
    title: 'GettingUserClaimsFailedException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class GettingUserClaimsFailedException : BaseApplicationException
        {
            public GettingUserClaimsFailedException() : base($"{typeof(GettingUserClaimsFailedException).FullName}")
            {
            }
        }
    }    `,
    descriptions: [
      "Throw this exception when getting user claims failed",
    ],
  },
  {
    order: 13,
    type: 'code',
    title: 'InvalidAccessTokenException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class InvalidAccessTokenException : BaseApplicationException
        {
            public InvalidAccessTokenException() : base($"{typeof(InvalidAccessTokenException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when user token is not valid",
    ],
  },
  {
    order: 14,
    type: 'code',
    title: 'InvalidRefreshTokenException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class InvalidRefreshTokenException : BaseApplicationException
        {
            public InvalidRefreshTokenException() : base($"{typeof(InvalidRefreshTokenException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when user refresh token is not valid",
    ],
  },
  {
    order: 15,
    type: 'code',
    title: 'NewPasswordRequiredException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class NewPasswordRequiredException : BaseApplicationException
        {
            public NewPasswordRequiredException() : base($"{typeof(NewPasswordRequiredException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when user refresh token is not valid",
    ],
  },
  {
    order: 16,
    type: 'code',
    title: 'PasswordFormatInvalidException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class PasswordFormatInvalidException : BaseApplicationException
        {
            public PasswordFormatInvalidException() : base($"{typeof(PasswordFormatInvalidException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when user password is not appriate with required format (regex etc.)",
    ],
  },
  {
    order: 17,
    type: 'code',
    title: 'PasswordSignInFailedException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class PasswordSignInFailedException : BaseApplicationException
        {
            public PasswordSignInFailedException() : base($"{typeof(PasswordSignInFailedException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when user login with password fails",
    ],
  },
  {
    order: 18,
    type: 'code',
    title: 'RefreshTokenRequiredException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class RefreshTokenRequiredException : BaseApplicationException
        {
            public RefreshTokenRequiredException() : base($"{typeof(RefreshTokenRequiredException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when user login with password fails",
    ],
  },
  {
    order: 19,
    type: 'code',
    title: 'SetUserNameFailedException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class SetUserNameFailedException : BaseApplicationException
        {
            public SetUserNameFailedException() : base($"{typeof(SetUserNameFailedException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when setting username fails",
    ],
  },
  {
    order: 20,
    type: 'code',
    title: 'UnauthorizedException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class UnauthorizedException : BaseApplicationException
        {    
            public UnauthorizedException() : base($"{typeof(UnauthorizedException).FullName}")
            {
    
            }
        }
    }`,
    descriptions: [
      "Throw this exception when user is not authorized",
    ],
  },
  {
    order: 21,
    type: 'code',
    title: 'UserCreationOnRegistrationFailed',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class UserCreationOnRegistrationFailed : BaseApplicationException
        {
            public UserCreationOnRegistrationFailed() : base($"{typeof(UserCreationOnRegistrationFailed).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when user creation on registration process fails",
    ],
  },
  {
    order: 22,
    type: 'code',
    title: 'UserIsLockedException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class UserIsLockedException : BaseApplicationException
        {
            public UserIsLockedException() : base($"{typeof(UserIsLockedException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception if user is locked",
    ],
  },
  {
    order: 23,
    type: 'code',
    title: 'UserManagerEmailNotSupportedException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class UserManagerEmailNotSupportedException : BaseApplicationException
        {
            public UserManagerEmailNotSupportedException() : base($"{typeof(UserManagerEmailNotSupportedException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception if userManager does not support Email",
    ],
  },
  {
    order: 24,
    type: 'code',
    title: 'UserNotFoundException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class UserNotFoundException : BaseApplicationException
        {
            public UserNotFoundException() : base($"{typeof(UserNotFoundException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when user is not found",
    ],
  },
  {
    order: 25,
    type: 'code',
    title: 'UserRoleDoesNotMatchException',
    language: 'csharp',
    
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class UserRoleDoesNotMatchException : BaseApplicationException
        {
            public UserRoleDoesNotMatchException() : base($"{typeof(UserRoleDoesNotMatchException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when user is not found",
    ],
  },
  {
    order: 26,
    type: 'code',
    title: 'WrongUsernameOrPasswordException',
    language: 'csharp', 
    item: `
    namespace Patika.Framework.Identity.Shared.Exceptions
    {
        public class WrongUsernameOrPasswordException : BaseApplicationException
        {
            public WrongUsernameOrPasswordException() : base($"{typeof(WrongUsernameOrPasswordException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "Throw this exception when userroles is not match with required role",
    ],
  }
]

const header = 'Patika.Framework.Identity.Shared.Exceptions';
const commonDetails = [
  "Exception base classes are written in Patika.Framework.Shared package.",
  "All exceptions of this package is inheried from BaseApplicationException.",
  "Exception.Code and Exception.Message is the same and equals to exception class full name.",
  "FullName is Interface + ClassName.",
  "This full name will be localized as user friendly exception message.",
]
const ExceptionsIdentityShared = () => {
  return (
    <DocPaper header={header} contents={contents} commonDetails={commonDetails} />
  )
}
export default ExceptionsIdentityShared