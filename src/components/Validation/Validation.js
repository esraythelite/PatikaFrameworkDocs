import { Box, Card, CardHeader, CardContent, Typography, CardActions, Link } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../DocPaper';

const Validation = () => {
    const fluentValidationLink= 'https://docs.fluentvalidation.net/en/latest/';
    const header = 'Validation'
    const contents = [
        {
            order: 1,
            type: 'text',
            title: 'What is Validation',
            subtitle: 'Checking inputs are valid or not before running process',
            descriptions: [
                'If input is invalid, than we throw a specific exception.',
                'If input is valid, then continue to process.',
            ],
        },
        {
            order: 2,
            type: 'text',
            title: 'FluentValidation',
            subtitle: 'A powerfull nuget package',
            descriptions: [
                'This package helping us to check input is valid or not depending on rule set.',
            ],
        },
        {
            order: 3,
            type: 'code',
            title: 'Our Base',
            language: 'csharp',
            subtitle: 'PatikaValidator',
            startingLineNumber: 0,             
            item: ` 
namespace Patika.Framework.Shared.Interfaces.Validators
{
    public interface IPatikaValidator<T>
    {
        Task ValidateAndThrowAsync(T input);
    }
}

####################################

public class PatikaAbstractValidator<T> : AbstractValidator<T>
{
    public Configuration Configuration { get; set; }
    public IServiceProvider ServiceProvider { get; }
    protected K GetService<K>() => ServiceProvider.GetService<K>() ?? throw new ServiceNotInjectedException($"{typeof(K).FullName}");
    public PatikaAbstractValidator(IServiceProvider serviceProvider)
    {
        ServiceProvider = serviceProvider;
        Configuration = GetService<Configuration>();
    }
}   `,
            descriptions: [
                'All validators must be inherited from IPatikaValidator',
                'PatikaAbstractValidator inherited from AbstractValidator (FluentValidation)  ',
                'PatikaAbstractValidator.Configuration : This configuration is Patika.Framework.Shared.Entities.Configuration. It used for some validation config.',
                'PatikaAbstractValidator.GetService : This is used in nesting object validation to get Validator(s) of child objects',
            ],
        },
        {
            order: 4,
            type: 'code',
            title: 'Example : Validate Configuration',
            language: 'csharp',
            subtitle: 'Patika.Framework.Identity.JwtToken.Models.Configuration',
            startingLineNumber: 0, 
            item: `
####################################
namespace Patika.Framework.Identity.JwtToken.Interfaces
{
    public interface IConfigurationValidator : IPatikaValidator<Configuration>
    {
    }
}

####################################
namespace Patika.Framework.Identity.JwtToken.Interfaces
{
    internal interface IJwtValidator : IPatikaValidator<Jwt>
    {
    }
}

####################################
namespace Patika.Framework.Identity.JwtToken.Services
{
    internal class ConfigurationValidator : PatikaAbstractValidator<Configuration>, IConfigurationValidator
    {
        private IJwtValidator JwtValidator { get; }
        public ConfigurationValidator(IServiceProvider serviceProvider) : base(serviceProvider)
        {
            JwtValidator = GetService<IJwtValidator>();

            RuleFor(x => x.RedisConnection).NotEmpty().WithErrorCode("RedisConnectionRequired"); 
        }

        public async Task ValidateAndThrowAsync(Configuration input)
        {
            var result = await ValidateAsync(input);

            if (!result.IsValid)
            {
                var errorCode = result.Errors.First().ErrorCode;
                var nameSpace = $"{typeof(Configuration).Namespace}";

                throw errorCode switch
                {
                    "RedisConnectionRequired" => new FieldRequiredException(nameof(input.RedisConnection), nameSpace), 
                    _ => new BaseApplicationException(errorCode),
                };
            }

            await JwtValidator.ValidateAndThrowAsync(input.Jwt);
        }

    }
}

####################################
namespace Patika.Framework.Identity.JwtToken.Services
{
    internal class JwtValidator : PatikaAbstractValidator<Jwt>, IJwtValidator
    {
        public JwtValidator(IServiceProvider serviceProvider) : base(serviceProvider)
        {
            When(jwt => jwt.ValidateIssuer, () =>
            {
                RuleFor(jwt => jwt.ValidIssuer).NotEmpty().WithErrorCode("ValidIssuerRequired");
            });

            When(jwt => jwt.ValidateAudience, () =>
            {
                RuleFor(jwt => jwt.ValidAudience).NotEmpty().WithErrorCode("ValidAudienceRequired");
            });

            RuleFor(jwt => jwt.Secret).NotEmpty().WithErrorCode("SecretRequired");
        }

        public async Task ValidateAndThrowAsync(Jwt input)
        {
            var result = await ValidateAsync(input);

            if (!result.IsValid)
            {
                var errorCode = result.Errors.First().ErrorCode;
                var nameSpace = $"{typeof(Jwt).Namespace}";

                throw errorCode switch
                {
                    "ValidIssuerRequired" => new ValidIssuerRequiredWhenValidateIssuerIsTrueException(),
                    "ValidAudienceRequired" => new ValidAudienceRequiredWhenValidateAudienceIsTrueException(),
                    "SecretRequired" => new FieldRequiredException(nameof(input.Secret), nameSpace),
                    _ => new BaseApplicationException(errorCode),
                };
            }
        }
    }
}

####################################
IConfigurationValidator  ConfigurationValidator {get;}

public SomeConstructor(IServiceProvider serviceProvider) : base(serviceProvider)
{       
    ConfigurationValidator = GetService<IConfigurationValidator>();
}

public async Task SomeActionAsync(Configuration config)
{
    await ConfigurationValidator.ValidateAndThrowAsync(config); 
    //... some codes
}
`,
            descriptions: [
                'IConfigurationValidator inherited from IPatikaValidator.',
                'IJwtValidator  inherited from IPatikaValidator.',
                'ConfigurationValidator inherited from PatikaAbstractValidator<Configuration> and IConfigurationValidator.',
                'JwtValidator  inherited from PatikaAbstractValidator<Jwt> and IJwtValidator.',
                'RuleSet in JwtValidator: ValidIssuerRequired, ValidAudienceRequired, SecretRequired. ',
                'RuleSet in ConfigurationValidator: RedisConnectionRequired.',
                'ValidateAndThrowAsync validate dto using FluentValidation, finds and throw exception by error code if input (config) is invalid',
                'throw BaseApplicationException with error code if no exception found by error code',
                'ConfigurationValidator does check it\s child validations too: Jwt. (Line 47)',
                `Example usage (from line: 94): see how ConfigurationValidator injected and validation checked.`,
                'GetService will throw exception if you didn\'t inject IConfigurationValidator. ',
            ],
        }
    ]
    return (
        <>
            <Typography variant='h4' sx={{ mb: 2 }} align='center'>{header}</Typography> 
            <Typography variant='h6' align='center'>You can see FluentValidation lastest documents <Link target={'_blank'} href={fluentValidationLink}  >here</Link></Typography>
            <DocPaper contents={contents} />            
        </>
    )
}


export default Validation
