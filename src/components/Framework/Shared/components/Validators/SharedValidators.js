import React from 'react'
import ServicePaper from '../../../../ServicePaper';

const contents = [
    {
        order: 1,
        header: 'BasicLoginInputDTOValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'IBasicLoginInputDTOValidator',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Shared.Interfaces.Validators
{
    public interface IBasicLoginInputDTOValidator : IPatikaValidator<BasicLoginInputDTO>
    {
    }
}            `,
            descriptions: [
            ],
        },
        serviceContent: {
            type: 'code',
            subtitle: 'BasicLoginInputDTOValidator',
            language: 'csharp',
            
            item: `  
public class BasicLoginInputDTOValidator : PatikaAbstractValidator<BasicLoginInputDTO>, IBasicLoginInputDTOValidator
{
    public BasicLoginInputDTOValidator(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        RuleFor(x => x.UserName)
            .NotEmpty().WithErrorCode("UserNameRequired");

        RuleFor(x => x.Password)
            .NotEmpty().WithErrorCode("PasswordRequired");
    }

    public async Task ValidateAndThrowAsync(BasicLoginInputDTO input)
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
}            `,
            descriptions: [
                'Rules: Username and Password can not be empty',
                'No need to check regex for username or password, they must checked in registration, not in login', 
            ],
        }
    },
    {
        order: 2,
        header: 'UserRegistrationInputDTOValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'IUserRegistrationInputDTOValidator',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Shared.Interfaces.Validators
{
    public interface IUserRegistrationInputDTOValidator : IPatikaValidator<UserRegistrationInputDTO>
    {
    }
}            `,
            descriptions: [

            ],
        },
        serviceContent: {
            type: 'code',
            subtitle: 'UserRegistrationInputDTOValidator',
            language: 'csharp',
            
            item: `    
public class UserRegistrationInputDTOValidator : PatikaAbstractValidator<UserRegistrationInputDTO>, IUserRegistrationInputDTOValidator
{
    public UserRegistrationInputDTOValidator(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        RuleFor(x => x.UserName).Cascade(CascadeMode.Stop)
            .NotEmpty().WithErrorCode("UserNameRequired")
            .MinimumLength(Configuration.AccountConfig.UserNameMinLength).WithErrorCode("UserNameMinLength")
            .Matches(RegexPatterns.OnlyTurkishLettersPattern).WithErrorCode("OnlyTurkishLetters");
        // TODO: TODO: other rules for UserRegistrationInputDTO.UserName

        RuleFor(x => x.Email).Cascade(CascadeMode.Stop)
            .EmailAddress(EmailValidationMode.AspNetCoreCompatible).WithErrorCode("InvalidEmail")
            .Matches(RegexPatterns.EmailContainsOnlyOneAtSingPattern).WithErrorCode("EmailContainsOnlyOneAtSingPattern")
            .Matches(RegexPatterns.EmailNotContainsPattern).WithErrorCode("EmailNotContainsPattern")
            .Matches(RegexPatterns.EmailNotContainsExceptThisCharactersPattern).WithErrorCode("EmailNotContainsExceptThisCharactersPattern");

        RuleFor(x => x.Password).Cascade(CascadeMode.Stop)
            .NotEmpty().WithErrorCode("PasswordRequired")
            .MinimumLength(Configuration.AccountConfig.PasswordMinLength).WithErrorCode("PasswordMinLength");
        // TODO: TODO: other rules for UserRegistrationInputDTO.Password

        RuleFor(x => x.ConfirmPassword)
            .Equal(x => x.Password).WithErrorCode("ConfirmPasswordMustMatchWithPassword");
    }

    public async Task ValidateAndThrowAsync(UserRegistrationInputDTO input)
    {
        var result = await ValidateAsync(input);
        if (!result.IsValid)
        {
            var errorCode = result.Errors.First().ErrorCode;
            throw errorCode switch
            {
                "UserNameRequired" => new UserNameRequiredException(),
                "UserNameMinLength" => new UserNameMinLengthException(Configuration.AccountConfig.UserNameMinLength),
                "OnlyTurkishLetters" => new OnlyTurkishLettersException(),

                "InvalidEmail"  => new InvalidEmailAddressException(),
                "EmailContainsOnlyOneAtSingPattern" => new InvalidEmailAddressException(),
                "EmailNotContainsPattern" => new InvalidEmailAddressException(),
                "EmailNotContainsExceptThisCharactersPattern" => new InvalidEmailAddressException(), 

                "PasswordRequired" => new PasswordRequiredException(),
                "PasswordMinLength" => new PasswordMinLengthException(Configuration.AccountConfig.PasswordMinLength),

                "ConfirmPasswordMustMatchWithPassword" => new ConfirmPasswordMustMatchWithPasswordException(),
                _ => new BaseApplicationException(errorCode),
            };
        }
    }
}   `,
            descriptions: [
                'Rules for Username : Required, MinLength (on config), Regex for TurkishLetter (TODO: regex must came ove config), ',
                'Rules for Email : Must be an email (contains @ character), some regex ',
                'Rules for Password :  Required, MinLength (on config)',
                'Rules for ConfirmPassword :  Equal to Password',
            ],
        }
    }
]
 
const SharedValidators = () => {
    
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

export default SharedValidators
