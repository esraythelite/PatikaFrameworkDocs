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
namespace Patika.Framework.Identity.GoogleAuthProvider.Interfaces
{
    public interface IConfigurationValidator : IPatikaValidator<Configuration>
    {
    }
}`,
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
    public ConfigurationValidator(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        RuleFor(x => x.ClientId).NotEmpty().WithErrorCode("ClientIdRequired");
        RuleFor(x => x.ClientSecret).NotEmpty().WithErrorCode("ClientSecretRequired"); 
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
                "ClientIdRequired" => new FieldRequiredException(nameof(input.ClientId), nameSpace),
                "ClientSecretRequired" => new FieldRequiredException(nameof(input.ClientSecret), nameSpace), 
                _ => new BaseApplicationException(errorCode),
            };
        }
    }
}`,
            descriptions: [
                'Rules for ClientId: Required',
                'Rules for ClientSecret: Required',
            ],
        }
    }
]

const GoogleValidators = () => {
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

export default GoogleValidators
