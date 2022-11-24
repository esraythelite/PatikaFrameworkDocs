import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../../DocPaper'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'BaseException',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Exceptions
    {
        public abstract class BaseException : Exception
        {
            public BaseException(string code) : base(code)
            {
                Code = code;
            }

            public BaseException(string code, string message) : base(message)
            {
                Code = code;
            }

            public string Code { get; set; } = String.Empty;

            /// <summary>
            /// Ignored fields on Json Result
            /// </summary>
            [System.Text.Json.Serialization.JsonIgnore]
            [Newtonsoft.Json.JsonIgnore]
            public override string? StackTrace { get; }

            [System.Text.Json.Serialization.JsonIgnore]
            [Newtonsoft.Json.JsonIgnore]
            public override IDictionary Data { get; }

            [System.Text.Json.Serialization.JsonIgnore]
            [Newtonsoft.Json.JsonIgnore]
            public override string? HelpLink { get; set; } 
        }
    }`,
    descriptions: [
      "This is our base exception class.",
      "Code is exception class full name (interface + name)",
      "Some props from Exception class are ignored in json response.",
      "In the first constroctor, message is equal to code",
      "In the second constructor, you can pass custom message."
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'BaseSystemException',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Exceptions
    {
        public abstract class BaseSystemException : BaseException
        {
            public BaseSystemException(string code) : base(code)
            {
            }
        }
    }`,
    descriptions: [
      "Inherited from BaseException",
      "* When use this exception? "
    ],
  }, 
  {
    order: 3,
    type: 'code',
    title: 'BaseApplicationException',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Exceptions
    {
        public class BaseApplicationException : BaseException
        {
            public BaseApplicationException(string code) : base(code)
            {
            }
            public BaseApplicationException(string code, string message) : base(code, message)
            {
            }
        }
    }`,
    descriptions: [     
      "Inherited from BaseException",
    ],
  }, 
  {
    order: 4,
    type: 'code',
    title: 'BaseFatalException',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Exceptions
    {
        public abstract class BaseFatalException : BaseException
        {
            public BaseFatalException(string code) : base(code)
            {
            }
            public BaseFatalException(string code, string message) : base(code, message)
            {
            }
        }
    }`,
    descriptions: [
      "Inherited from BaseException",
      "Use this exception or extensions inherit from this exception in case of system failures.",
      "*"
    ],
  }, 
  {
    order: 5,
    type: 'code',
    title: 'ApplicationException',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Exceptions
    {
        public class ApplicationException : BaseApplicationException
        {
            [JsonConstructor]
            public ApplicationException(string code, string message = "") : base(code, message)
            {
            }
            public ApplicationException(BaseException ex) : base(ex.Code, ex.Message)
            {
            }
            public ApplicationException(Exception ex) : base(ex.Message)
            {
            }

            public static implicit operator ApplicationException(BaseFatalException exp) => new(exp);
        }
    }`,
    descriptions: [
      "Inherited from ApplicationException",
      "*"
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'GeneralException',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Exceptions
    {
        public class GeneralException : BaseFatalException
        {
            public GeneralException(Exception ex) : base($"_general_:{ex.GetHashCode()}", ex.Message)
            {
    
            }
        }
    }`,
    descriptions: [
      "GeneralException is throws when you did catch all kind of excepitons",
      "When you encounter an exception of this type, you are expected to add and use the appropriate exception class."
    ],
  },
  {
    order: 7,
    type: 'code',
    title: 'StringToGuidFailedException',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Exceptions.Convertions
    {
        public class StringToGuidFailedException : BaseApplicationException
        {
            public StringToGuidFailedException( ) : base($"{typeof(StringToGuidFailedException).FullName}")
            {
            }
        }
    }`,
    descriptions: [
      "string.ToGuid extension throws this exception if fails."
    ],
  },
  {
    order: 8,
    type: 'code',
    title: 'FieldRequiredException',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Exceptions
    {
        public class FieldRequiredException : BaseApplicationException
        {
            public FieldRequiredException(string field, string nameSpace) : base($"{nameSpace}.{field}RequiredException")
            {
            }
        }
    }`,
    descriptions: [
      "This is custom exception to catch any required field.", 
      "ie: the exception code for Patika.Framework.Shared.DTO.Identity.BasicLoginInputDTO.UserName will be 'Patika.Framework.Shared.DTO.Identity.BasicLoginInputDTO.UserNameRequired'  "
    ],
  },
  {
    order: 8,
    type: 'code',
    title: 'UserIsUnauthorizedException',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Exceptions.Identity
    {
        public class UserIsUnauthorizedException : BaseApplicationException
        {
            public UserIsUnauthorizedException() : base($"{typeof(UserIsUnauthorizedException).FullName}")
            {
    
            }
        }
    }`,
    descriptions: [
      "You must throw this exception user authorization failed"
    ],
  },
  {
    order: 8,
    type: 'code',
    title: 'TokenInvalidException',
    language: 'csharp',
    startingLineNumber: 7,
    item: `
    namespace Patika.Framework.Shared.Exceptions.Identity
    {
        public class TokenInvalidException : BaseApplicationException
        {
            public TokenInvalidException() : base($"{typeof(TokenInvalidException).FullName}")
            {
               
            }
        }
    }`,
    descriptions: [
      "You must throw this exception user token is invalid or not found"
    ],
  }
]
const header = 'Patika.Framework.Shared.Exceptions';
const Exceptions = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  
export default Exceptions