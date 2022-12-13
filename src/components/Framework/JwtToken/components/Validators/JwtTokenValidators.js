import React from 'react'
import ServicePaper from '../../../../ServicePaper';

const contents = [
    {
        order: 1,
        header: 'ConfigurationValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'IConfigurationValidator',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Identity.JwtToken.Interfaces
{
    public interface IConfigurationValidator : IPatikaValidator<Configuration>
    {
    }
}     `,
            descriptions: [
            ],
        },
        serviceContent: {
            type: 'code',
            subtitle: 'ConfigurationValidator',
            language: 'csharp',
            
            item: `
public class ConfigurationValidator : PatikaAbstractValidator<Configuration>, IConfigurationValidator
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

} `,
            descriptions: [ 
                'Rules for RedisConnection: Required',
                'Jwt must be valid : checked by JwtValidator'
            ],
        }
    },
    {
        order: 2,
        header: 'JwtValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'IJwtValidator ',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Identity.JwtToken.Interfaces
{
    public interface IJwtValidator : IPatikaValidator<Jwt>
    {
    }
}`,
            descriptions: [

            ],
        },
        serviceContent: {
            type: 'code',
            subtitle: 'JwtValidator ',
            language: 'csharp',
            
            item: `
public class JwtValidator : PatikaAbstractValidator<Jwt>, IJwtValidator
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
}`,
            descriptions: [
                'Rules for ValidIssuer : Required when ValidateIssuer is true',
                'Rules for ValidAudience : Required when ValidateAudience is true', 
                'Rules for ValidAudience : Secret', 
            ],
        }
    }
]
 
const JwtTokenValidators = () => {     
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

export default JwtTokenValidators
