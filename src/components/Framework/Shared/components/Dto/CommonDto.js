import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'DTO',
        language: 'csharp',
        startingLineNumber: 9,
        item: `namespace Patika.Framework.Shared.DTO
{
    public class DTO : IDTO
    {      
        public string LogId { get; set; } = String.Empty;
    }
}`,
        descriptions: [
            "Base DTO class",
            "Inherited from IDTO interface",
            "All DTO class must be inherited from DTO",
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'GeneralResponseDTO',
        language: 'csharp',
        startingLineNumber: 7,
        item: `namespace Patika.Framework.Shared.DTO
{
    public class GeneralResponseDTO<T> where T : class
    {
        public virtual LogStatusEnum ResultCode { get; set; } = LogStatusEnum.Success;
        public virtual Exceptions.ApplicationException? Exception { get; set; }
        public virtual bool Done { get => ResultCode == LogStatusEnum.Success; }
        public virtual string? Message { get; set; }
        public virtual Guid JobId { get; set; }
        public static GeneralResponseDTO<T> SuccessResponse(string message = "")
            => SuccessResponse(null, message, null);
        public static GeneralResponseDTO<T> SuccessResponse(T? result, string message = "", Guid? jobId = null)
            => new()
            {
                Message = message,
                Result = result,
                ResultCode = LogStatusEnum.Success,
                JobId = jobId ?? Guid.Empty
            };
        public static GeneralResponseDTO<T> ErrorResponse(string error = "", Guid? jobId = null)
            => new()
            {
                ResultCode = LogStatusEnum.Exception,
                Message = error,
                JobId = jobId ?? Guid.Empty
            };

        public virtual T? Result { get; set; }

        public static implicit operator GeneralResponseDTO<T>(T data) => SuccessResponse(data);

        public static implicit operator GeneralResponseDTO<T>(BaseFatalException fatalEx)
        {
            return new GeneralResponseDTO<T>
            {
                Message = fatalEx.Message,
                Result = null,
                ResultCode = LogStatusEnum.InternalError,
                Exception = new Exceptions.ApplicationException(fatalEx)
            };
        }

        public static implicit operator GeneralResponseDTO<T>(BaseApplicationException applicationException)
        {
            return new GeneralResponseDTO<T>
            {
                Message = applicationException.Message,
                Result = null,
                ResultCode = LogStatusEnum.Exception,
                Exception = new Exceptions.ApplicationException(applicationException)
            };
        }

        public static implicit operator GeneralResponseDTO<T>(BaseSystemException systemException)
        {
            return new GeneralResponseDTO<T>
            {
                Message = systemException.Message,
                Result = null,
                ResultCode = LogStatusEnum.InternalError,
                Exception = new Exceptions.ApplicationException(systemException)
            };
        }

        public static implicit operator GeneralResponseDTO<T>(Exception exception)
        {
            if (exception is BaseApplicationException)
                return exception as BaseApplicationException;
            else if (exception is BaseFatalException)
                return exception as BaseFatalException;
            else if (exception is BaseSystemException)
                return exception as BaseSystemException;
            else
                return new GeneralResponseDTO<T>
                {
                    Message = exception.Message,
                    Result = null,
                    ResultCode = LogStatusEnum.Exception,
                    Exception = new GeneralException(exception)
                };
        }

        protected string WellKnownErrorTranslation(string msg)
        {
            if (msg.StartsWith(@"A connection attempt failed 
because the connected party did not properly respond after a period of time, 
or established connection failed because connected host has failed to respond."))
                return "Servise şu anda erişilemiyor";
            else if (msg.Contains("Unexpected character encountered while parsing value:"))
                return "Response is not valid";
            return msg;
        }

        public static implicit operator GeneralResponseDTO<T>(string error) => new Exception(error);
    }
    public class GeneralResponseDTO : GeneralResponseDTO<object> { }

}`,
        descriptions: [
            "Deals with api response and exceptions, returns static response schema.",
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'FinalResponseDTO',
        language: 'csharp',
        startingLineNumber: 8,
        item: `namespace Patika.Framework.Shared.DTO
{
    public class FinalResponseDTO<T> : GeneralResponseDTO<T> where T : class
    {
        [JsonIgnore]
        [System.Text.Json.Serialization.JsonIgnore]
        public override Exceptions.ApplicationException? Exception { get; set; }
        [JsonIgnore]
        [System.Text.Json.Serialization.JsonIgnore]
        public override LogStatusEnum ResultCode { get; set; } = LogStatusEnum.Success;
        [JsonProperty("success")]
        [JsonPropertyName("success")]
        public override bool Done { get => ResultCode == LogStatusEnum.Success; }
        public override string? Message { get; set; }
        [JsonProperty("logId")]
        [JsonPropertyName("logId")]
        public override Guid JobId { get; set; }
        [JsonProperty("data")]
        [JsonPropertyName("data")]
        public override T? Result { get; set; }
        public FinalResponseDTO(GeneralResponseDTO<T> general)
        {
            if (general == null)
                return;
            JobId = general.JobId;
            Exception = general.Exception;
            ResultCode = general.ResultCode;
            Result = general.Result;
            Message = WellKnownErrorTranslation(general.Message ?? "");
            JobId = general.JobId;
        }
    }
}`,
        descriptions: [
             "Inherited from general response.",
             "Hides some properties by JsonIgnore attributes", 
        ],
    } 
]

const header = 'Patika.Framework.Shared.DTO';
const CommonDto = () => {    
    return (
        <DocPaper header={header} contents={contents} />  
    )
}
 
export default CommonDto