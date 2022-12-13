import React from 'react'
import ServicePaper from '../../../../ServicePaper';

const contents = [
    {
        order: 1,
        header: 'CallbackValidator',
        interfaceContent: {
            type: 'code',
            subtitle: 'ICallbackValidator',
            language: 'csharp',
            
            item: `
namespace Patika.Framework.Identity.Interface
{
    public interface ICallbackValidator :   IPatikaValidator<string>
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
public class CallbackValidator : PatikaAbstractValidator<string>, ICallbackValidator
{
    public CallbackValidator(IServiceProvider serviceProvider) : base(serviceProvider)
    {
        RuleFor(callback => callback).NotEmpty().WithErrorCode("CallBackRequired");
    }

    public async Task ValidateAndThrowAsync(string callback)
    {
        var result = await ValidateAsync(callback);

        if (!result.IsValid)
        {
            var errorCode = result.Errors.First().ErrorCode;

            throw errorCode switch
            {
                "CallBackRequired" => new ExternalAuthCallbackIsRequiredException(),
                _ => new BaseApplicationException(errorCode),
            };
        }
    }
}`,
            descriptions: [ 
                'Rules for callback: Required', 
            ],
        }
    } 
]
 
const IdentityValidators = () => {     
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

export default IdentityValidators
