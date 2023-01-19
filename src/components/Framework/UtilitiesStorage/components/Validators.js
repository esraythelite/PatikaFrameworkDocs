import React from 'react'
import DocPaper from '../../../DocPaper';

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'FormFileUploadInputDTOValidator',
        language: 'csharp',
        startingLineNumber: 7,
        item: `
        namespace Patika.Framework.Utilities.Storage.Services.Validators
        {
            public class FormFileUploadInputDTOValidator : PatikaAbstractValidator<FormFileUploadInputDTO>, IFormFileUploadInputDTOValidator
            {
                private const string StorageNameRequired = nameof(StorageNameRequired);
                private const string FileRequired = nameof(FileRequired);
                public FormFileUploadInputDTOValidator(IServiceProvider serviceProvider) : base(serviceProvider)
                {
                    RuleFor(x => x.StorageName).NotEmpty().WithErrorCode(StorageNameRequired);
                    RuleFor(x => x.File).NotNull().WithErrorCode(FileRequired);
                }
        
                public async Task ValidateAndThrowAsync(FormFileUploadInputDTO input)
                {
                    var result = await ValidateAsync(input);
        
                    if (!result.IsValid)
                    {
                        var errorCode = result.Errors.First().ErrorCode; 
        
                        throw errorCode switch
                        {
                            StorageNameRequired => new FileRequiredException(),
                            FileRequired => new StorageNameRequiredException(),
                            _ => new BaseApplicationException(errorCode),
                        };
                    }
                }
            }
        }`,
        descriptions: [
            "Validates FormFileUploadInputDTO before using input for uploading file"
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'Base64FileUploadInputDTOValidator',
        language: 'csharp',
        startingLineNumber: 6,
        item: `namespace Patika.Framework.Utilities.Storage.Services.Validators
        {
            public class Base64FileUploadInputDTOValidator : PatikaAbstractValidator<Base64FileUploadInputDTO>, IBase64FileUploadInputDTOValidator
            {
                private const string StorageNameRequired = nameof(StorageNameRequired);
                private const string FileRequired = nameof(FileRequired);
                private const string ContentTypeRequired = nameof(ContentTypeRequired);
                private const string FileNameWithExtensionRequired = nameof(FileNameWithExtensionRequired);
        
                public Base64FileUploadInputDTOValidator(IServiceProvider serviceProvider) : base(serviceProvider)
                {
                    RuleFor(x => x.StorageName).NotEmpty().WithErrorCode(StorageNameRequired);
                    RuleFor(x => x.FileAsBase64String).NotNull().WithErrorCode(FileRequired);
                    RuleFor(x => x.ContentType).NotNull().WithErrorCode(ContentTypeRequired);
                    RuleFor(x => x.FileNameWithExtension).NotNull().WithErrorCode(FileNameWithExtensionRequired);
                }
        
                public async Task ValidateAndThrowAsync(Base64FileUploadInputDTO input)
                {
                    var result = await ValidateAsync(input);
        
                    if (!result.IsValid)
                    {
                        var errorCode = result.Errors.First().ErrorCode; 
        
                        throw errorCode switch
                        {
                            StorageNameRequired => new FileRequiredException(),
                            FileRequired => new StorageNameRequiredException(),
                            ContentTypeRequired => new FileContentTypeRequiredException(),
                            FileNameWithExtensionRequired => new FileNameWithExtensionRequiredException(),
                            _ => new BaseApplicationException(errorCode),
                        };
                    }
                }
            }
        }`,
        descriptions: [
            "Validates Base64FileUploadInputDTOValidator before using input for uploading file"
        ],
    },

]

const header = 'Patika.Framework.Utilities.Storage.Services.Validators';
const Validators = () => {
    return (
        <DocPaper header={header} contents={contents} />
    )
}


export default Validators
