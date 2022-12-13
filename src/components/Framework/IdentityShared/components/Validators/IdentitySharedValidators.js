import React from 'react'
import ServicePaper from '../../../../ServicePaper';

const contents = [
    {
        order: 1,
        header: 'ApplicationRegistrationInputValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'IApplicationRegistrationInputValidator',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Identity.Shared.Interfaces.Validators
{
    public interface IApplicationRegistrationInputValidator : IPatikaValidator<ApplicationRegistrationInput>
    {
    }
}         `,
            descriptions: [
            ],
        },
        serviceContent: {
            type: 'code',
            subtitle: 'ApplicationRegistrationInputValidator',
            language: 'csharp',
            
            item: ` 
public class ApplicationRegistrationInputValidator : PatikaAbstractValidator<ApplicationRegistrationInput>, IApplicationRegistrationInputValidator
{
    IRoleInputValidator RoleInputValidator { get; set; }
    public ApplicationRegistrationInputValidator(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        RoleInputValidator = GetService<IRoleInputValidator>();

        RuleFor(x => x.Name)
            .NotEmpty().WithErrorCode("NameRequired");

        RuleFor(x => x.Secret)
            .NotEmpty().WithErrorCode("SecretRequired");

        RuleFor(x => x.Roles)
            .NotEmpty().WithErrorCode("RolesRequired");
    }

    public async Task ValidateAndThrowAsync(ApplicationRegistrationInput input)
    {
        var result = await ValidateAsync(input);

        if (!result.IsValid)
        {
            var nameSpace = $"{typeof(ApplicationRegistrationInput).Namespace}";

            var errorCode = result.Errors.First().ErrorCode;
            throw errorCode switch
            {
                "NameRequired" => new FieldRequiredException(nameof(ApplicationRegistrationInput.Name), nameSpace),
                "SecretRequired" => new FieldRequiredException(nameof(ApplicationRegistrationInput.Secret), nameSpace),
                "RolesRequired" => new FieldRequiredException(nameof(ApplicationRegistrationInput.Roles), nameSpace),
                _ => new BaseApplicationException(errorCode),
            };
        }

        await ValidateRolesAsync(input);
    }

    private async Task ValidateRolesAsync(ApplicationRegistrationInput input)
    {
        foreach (var role in input.Roles)
        {
            await RoleInputValidator.ValidateAndThrowAsync(role);
        }
    }
}   `,
            descriptions: [ 
                'Rules for Name: Required',
                'Rules for Secret: Required',
                'Rules for Roles: Required', 
                'All Roles must be valid : checked by RoleInputValidator'
            ],
        }
    },
    {
        order: 2,
        header: 'LoginInputValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'ILoginInputValidator ',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Identity.Shared.Interfaces.Validators
{
    public interface ILoginInputValidator : IPatikaValidator<LoginInput>
    {
    }
}   `,
            descriptions: [

            ],
        },
        serviceContent: {
            type: 'code',
            subtitle: 'LoginInputValidator ',
            language: 'csharp',
            
            item: `   
public class LoginInputValidator : PatikaAbstractValidator<LoginInput>, ILoginInputValidator
{
    public LoginInputValidator(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        RuleFor(x => x.UserName)
            .NotEmpty().WithErrorCode("UserNameRequired");

        RuleFor(x => x.Password)
            .NotEmpty().WithErrorCode("PasswordRequired");
    }

    public async Task ValidateAndThrowAsync(LoginInput input)
    {
        var result = await ValidateAsync(input);

        if (!result.IsValid)
        {
            var errorCode = result.Errors.First().ErrorCode;
            throw errorCode switch
            {
                "UserNameRequired" => new UserNameRequiredException(),
                "PasswordRequired" => new PasswordRequiredException(),
                _ => new BaseApplicationException(errorCode),
            };
        }

    }

}`,
            descriptions: [
                'Rules for Username : Required ',
                'Rules for UserName : Required', 
            ],
        }
    },
    {
        order: 3,
        header: 'RefreshTokenInputDTOValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'IRefreshTokenInputDTOValidator ',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Identity.Shared.Interfaces.Validators
{
    public interface IRefreshTokenInputDTOValidator : IPatikaValidator<RefreshTokenInputDTO>
    {
    }
} `,
            descriptions: [

            ],
        },
        serviceContent: {
            type: 'code',
            subtitle: 'RefreshTokenInputDTOValidator ',
            language: 'csharp',
            
            item: `   
public class RefreshTokenInputDTOValidator : PatikaAbstractValidator<RefreshTokenInputDTO>, IRefreshTokenInputDTOValidator
{
    public RefreshTokenInputDTOValidator(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        RuleFor(x => x.AccessToken)
            .NotEmpty().WithErrorCode("AccessTokenRequired");

        RuleFor(x => x.RefreshToken)
            .NotEmpty().WithErrorCode("RefreshTokenRequired");
    }

    public async Task ValidateAndThrowAsync(RefreshTokenInputDTO input)
    {
        var result = await ValidateAsync(input);
        if (!result.IsValid)
        {
            var errorCode = result.Errors.First().ErrorCode;
            throw errorCode switch
            {
                "AccessTokenRequired" => new AccessTokenRequiredException(),
                "RefreshTokenRequired" => new RefreshTokenRequiredException(),
                _ => new BaseApplicationException(errorCode),
            };
        }
    }
}`,
            descriptions: [
                'Rules for AccessToken : Required ',
                'Rules for RefreshToken : Required', 
            ],
        }
    },    
    {
        order: 4,
        header: 'RegistrationInputValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'RegistrationInputValidator ',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Identity.Shared.Interfaces.Validators
{
    public interface IRegistrationInputValidator : IPatikaValidator<RegistrationInput>
    {
    }
}`,
            descriptions: [

            ],
        },
        serviceContent: {
            type: 'code',
            subtitle: 'IRegistrationInputValidator ',
            language: 'csharp',
            
            item: `  
public class RegistrationInputValidator : PatikaAbstractValidator<RegistrationInput>, IRegistrationInputValidator
{
    IRoleInputValidator RoleInputValidator { get; set; }
    public RegistrationInputValidator(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        RoleInputValidator = GetService<IRoleInputValidator>();

        RuleFor(x => x.UserName).Cascade(CascadeMode.Stop)
            .NotEmpty().WithErrorCode("UserNameRequired")
            .MinimumLength(Configuration.AccountConfig.UserNameMinLength).WithErrorCode("UserNameMinLength")
            .Matches(RegexPatterns.OnlyTurkishLettersPattern).WithErrorCode("OnlyTurkishLetters");
        // TODO: TODO: other rules for RegistrationInput.UserName

        RuleFor(x => x.Email).Cascade(CascadeMode.Stop)
            .EmailAddress(EmailValidationMode.AspNetCoreCompatible).WithErrorCode("InvalidEmail")
            .Matches(RegexPatterns.EmailContainsOnlyOneAtSingPattern).WithErrorCode("EmailContainsOnlyOneAtSingPattern")
            .Matches(RegexPatterns.EmailNotContainsPattern).WithErrorCode("EmailNotContainsPattern")
            .Matches(RegexPatterns.EmailNotContainsExceptThisCharactersPattern).WithErrorCode("EmailNotContainsExceptThisCharactersPattern");

        RuleFor(x => x.Password).Cascade(CascadeMode.Stop)
            .NotEmpty().WithErrorCode("PasswordRequired")
            .MinimumLength(Configuration.AccountConfig.PasswordMinLength).WithErrorCode("PasswordMinLength");
        // TODO: TODO: other rules for RegistrationInput.Password

        RuleFor(x => x.ConfirmPassword)
            .Equal(x => x.Password).WithErrorCode("ConfirmPasswordMustMatchWithPassword");

        RuleFor(x => x.Roles)
            .NotEmpty().WithErrorCode("RolesRequired");
    }

    public async Task ValidateAndThrowAsync(RegistrationInput input)
    {
        var result = await ValidateAsync(input);

        if (!result.IsValid)
        {
            var errorCode = result.Errors.First().ErrorCode;
            var nameSpace = $"{typeof(RegistrationInput).Namespace}";

            throw errorCode switch
            {
                "UserNameRequired" => new UserNameRequiredException(),
                "UserNameMinLength" => new UserNameMinLengthException(Configuration.AccountConfig.UserNameMinLength),
                "OnlyTurkishLetters" => new OnlyTurkishLettersException(),

                "InvalidEmail" => new InvalidEmailAddressException(),
                "EmailContainsOnlyOneAtSingPattern" => new InvalidEmailAddressException(),
                "EmailNotContainsPattern" => new InvalidEmailAddressException(),
                "EmailNotContainsExceptThisCharactersPattern" => new InvalidEmailAddressException(),

                "PasswordRequired" => new PasswordRequiredException(),
                "PasswordMinLength" => new PasswordMinLengthException(Configuration.AccountConfig.PasswordMinLength),

                "ConfirmPasswordMustMatchWithPassword" => new ConfirmPasswordMustMatchWithPasswordException(),

                "RolesRequired" => new FieldRequiredException(nameof(RegistrationInput.Roles), nameSpace),
                _ => new BaseApplicationException(errorCode),
            };
        }

        await ValidateRolesAsync(input);
    }

    private async Task ValidateRolesAsync(RegistrationInput input)
    {
        foreach (var role in input.Roles)
        {
            await RoleInputValidator.ValidateAndThrowAsync(role);
        }
    }
}`,
            descriptions: [
                'Rules for Username : Required, MinLength (on config), Regex for TurkishLetter (TODO: regex must came ove config), ',
                'Rules for Email : Must be an email (contains @ character), some regex ',
                'Rules for Password :  Required, MinLength (on config)',
                'Rules for ConfirmPassword :  Equal to Password',
                'Rules for Roles :  Required',
                'All Roles must be valid : checked by RoleInputValidator'
            ],
        }
    },  
    {
        order: 5,
        header: 'ResetPasswordInputValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'IResetPasswordInputValidator ',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Identity.Shared.Interfaces.Validators
{
    public interface IResetPasswordInputValidator : IPatikaValidator<ResetPasswordInput>
    {
    }
}`,
            descriptions: [

            ],
        },
        serviceContent: {
            type: 'code',
            subtitle: 'ResetPasswordInputValidator ',
            language: 'csharp',
            
            item: `   
public class ResetPasswordInputValidator : PatikaAbstractValidator<ResetPasswordInput>, IResetPasswordInputValidator
{
    public ResetPasswordInputValidator(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        RuleFor(x => x.UserName)
            .NotEmpty().WithErrorCode("UserNameRequired");

        RuleFor(x => x.NewPassword)
            .NotEmpty().WithErrorCode("NewPasswordRequired");

        RuleFor(x => x.ActivationCode)
            .NotEmpty().WithErrorCode("ActivationCodeRequired");
    }

    public async Task ValidateAndThrowAsync(ResetPasswordInput input)
    {
        var result = await ValidateAsync(input);

        if (!result.IsValid)
        {
            var errorCode = result.Errors.First().ErrorCode;
            throw errorCode switch
            {
                "UserNameRequired" => new UserNameRequiredException(),
                "NewPasswordRequired" => new NewPasswordRequiredException(),
                "ActivationCodeRequired" => new ActivationCodeRequiredException(),
                _ => new BaseApplicationException(errorCode),
            };
        }

    }

}`,
            descriptions: [
                'Rules for UserName : Required ',
                'Rules for NewPassword : Required', 
                'Rules for ActivationCode : Required', 
            ],
        }
    },  
    {
        order: 6,
        header: 'RoleInputValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'RoleInputValidator ',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Identity.Shared.Interfaces.Validators
{
    public interface IResetPasswordInputValidator : IPatikaValidator<ResetPasswordInput>
    {
    }
}`,
            descriptions: [

            ],
        },
        serviceContent: {
            type: 'code',
            subtitle: 'IRoleInputValidator ',
            language: 'csharp',
            
            item: `   
public class RoleInputValidator : PatikaAbstractValidator<RoleInput>, IRoleInputValidator
{
    public RoleInputValidator(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        RuleFor(x => x.Role)
            .NotEmpty().WithErrorCode("RoleRequired"); 
    }

    public async Task ValidateAndThrowAsync(RoleInput input)
    {
        var result = await ValidateAsync(input);

        if (!result.IsValid)
        {
            var nameSpace = $"{typeof(RoleInput).Namespace}";

            var errorCode = result.Errors.First().ErrorCode;
            throw errorCode switch
            {
                "NameRequired" => new FieldRequiredException(nameof(RoleInput.Role), nameSpace),                  
                _ => new BaseApplicationException(errorCode),
            };
        }
    }
}`,
            descriptions: [
                'Rules for Role : Required ', 
            ],
        }
    }
]
 
const IdentitySharedValidators = () => {
    
    console.log('contents:',contents )
    return (
        <>
            {contents.sort((a, b) => (a.order - b.order)).map((content) => {
                return (
                    <ServicePaper key={content.order} content={content} />
                )
            })}

        </>
    )
}

export default IdentitySharedValidators
