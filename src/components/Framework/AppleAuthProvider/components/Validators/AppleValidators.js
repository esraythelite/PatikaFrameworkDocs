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
namespace Patika.Framework.Identity.AppleAuthProvider.Interfaces
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
        RuleFor(x => x.KeyId).NotEmpty().WithErrorCode("KeyIdRequired");
        RuleFor(x => x.ClientId).NotEmpty().WithErrorCode("ClientIdRequired"); 
        RuleFor(x => x.TeamId).NotEmpty().WithErrorCode("TeamIdRequired"); 
        RuleFor(x => x.CallbackPath).NotEmpty().WithErrorCode("CallbackPathRequired"); 
        RuleFor(x => x.PrivateKey).NotEmpty().WithErrorCode("PrivateKeyhRequired"); 
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
                "KeyIdRequired" => new FieldRequiredException(nameof(input.KeyId), nameSpace),
                "ClientIdRequired" => new FieldRequiredException(nameof(input.ClientId), nameSpace),
                "TeamIdRequired" => new FieldRequiredException(nameof(input.TeamId), nameSpace),
                "CallbackPathRequired" => new FieldRequiredException(nameof(input.CallbackPath), nameSpace),
                "PrivateKeyhRequired" => new FieldRequiredException(nameof(input.PrivateKey), nameSpace), 
                _ => new BaseApplicationException(errorCode),
            };
        }
    }
}`,
            descriptions: [ 
                'Rules for KeyId: Required', 
                'Rules for ClientId: Required', 
                'Rules for TeamId: Required', 
                'Rules for CallbackPath: Required',  
                'Rules for PrivateKey: Required',  
            ],
        }
    } 
]
 
const AppleValidators = () => {     
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

export default AppleValidators
