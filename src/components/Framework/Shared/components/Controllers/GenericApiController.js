import React from 'react'
import DocPaper from '../../../../DocPaper' 

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'Constructor',
        language: 'csharp',
        startingLineNumber: 14,
        item: `namespace Patika.Framework.Shared.Controllers
{
    [ApiController]
    public abstract class GenericApiController : Controller
    {
        protected HttpClientService HttpClientService { get; set; }

        protected ILogWriter LogWriter { get; }
        protected Configuration Configuration { get; }

        public IServiceProvider ServiceProvider { get; }

        public GenericApiController(IServiceProvider serviceProvider)
        {
            ServiceProvider = serviceProvider;
            LogWriter = GetService<ILogWriter>();
            Configuration = GetService<Configuration>(); 
            HttpClientService = new HttpClientService(Configuration.GatewayUrl, serviceProvider);
        }`,
        descriptions: [
            "All controllers must be inherited from GenericApiController thats provides some common functionalities.",
            "HttpClientService is using for internal requests application micro services.",
            "LogWriter injected here for writing logs.",
            "The global Configuration injected here for getting GatewayUrl value for HttpClientService."
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'GetService',
        language: 'csharp',
        startingLineNumber: 33,
        item: `
        protected T GetService<T>() => ServiceProvider.GetService<T>() ?? throw new ServiceInjectionFailedexception($"{typeof(T).FullName}");
        `,
        descriptions: [
            "Gets injected service",
            "throws exception if service not found"
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'GetToken',
        language: 'csharp',
        startingLineNumber: 35,
        item: `
        protected string GetToken()
        {
            try
            {
                var token = HttpContext.Request.Headers["Authorization"].ToString();
                return token;
            }
            catch
            {
                throw new TokenInvalidException();
            }
        }`,
        descriptions: [
            "Gets token from request headers.",
            "You can get current user token with this method on any controllers inherited from GenericApiController."
        ],
    },
    {
        order: 4,
        type: 'code',
        title: 'User Info',
        language: 'csharp',
        startingLineNumber: 48,
        item: `
        protected string GetUserId() => User.FindFirstValue(ClaimTypes.Name);

        protected async Task<T?> GetUser<T>() where T : ApplicationUser
        {
            return await GetUser<T>(GetToken());
        }

        protected async Task<T?> GetUser<T>(string token) where T : ApplicationUser
        {
            try
            {
                if (string.IsNullOrEmpty(token))
                {
                    throw new TokenInvalidException();
                }
                await HttpClientService.SetTokenAsync(token);
                var res = await HttpClientService.HttpGetAs<T>("identity/application-user");
                return res;
            }
            catch
            {
                throw new TokenInvalidException();
            }
        }

        protected bool HasRole(string role)
        {
            var claim = HttpContext.User.Claims.
                FirstOrDefault(c => c.Type == ClaimTypes.Role && c.Value.Equals(role, StringComparison.OrdinalIgnoreCase));
            return claim != null;
        }`,
        descriptions: [
            "GetUserId returns current user Id",
            "GetUser() calls GetUser(token)",
            "GetUser(token) acquires user by token from Identity Server over http",
            "HasRole checks whether user is in role or not"
        ],
    },
    {
        order: 5,
        type: 'code',
        title: 'WithLogging OverAll', 
        // item: ``,
        descriptions: [
            "WithLoggins is an invocation method for controller actions",
            "They start log for current action, call the service action then deal with response",
            "They finish log and return success respone if no exception throwed",
            "They generates response with exception, log exception and return the response"
        ],
    },
    {
        order: 6,
        type: 'code',
        title: 'WithLogging',
        subtitle: 'GeneralResponseDTO',
        language: 'csharp',
        startingLineNumber: 80,
        item: `
        protected async Task<ActionResult<GeneralResponseDTO<T>>> WithLogging<T>(IDTO input,
            Func<Task<T>> tryPart, 
            Func<IDTO, Task>? catchPart = null, 
            Func<GeneralResponseDTO<T>, Task>? catchReturn = null, 
            [CallerMemberName] string callerName = "") where T : class
        {
            var logId = string.IsNullOrEmpty(input.LogId) || input.LogId == Guid.Empty.ToString() ?
                (await LogWriter.CreateLog(LogWriterExtensions.ApplicationName)).Id
                : new Guid(input.LogId);
            input.LogId = logId.ToString();

            try
            {
                var res = await tryPart();
                await LogWriter.FinishLog(logId);
                return GeneralResponseDTO<T>.SuccessResponse(res, jobId: logId);
            }
            catch (Exception ex)
            {
                await LogWriter.AddExceptionLogAsync(input, ex, GetType(), callerName: callerName);
                await LogWriter.FinishLog(logId, LogStatusEnum.Exception);
                if (catchPart != null)
                {
                    await catchPart(input);
                }
                var res = ex.ToExceptionGeneralResponse<T>(logId);
                if (catchReturn != null)
                {
                    await catchReturn(res.Value);
                }
                return res;
            }
        }`,
        descriptions: [ 
            "Response is type of GeneralResponseDTO"
        ],
    },
    {
        order: 7,
        type: 'code',
        title: 'WithLogging',
        subtitle: 'FileContentResult',
        language: 'csharp',
        startingLineNumber: 115,
        item: `
        protected async Task<FileContentResult?> WithLogging<T>(IDTO input,
            Func<Task<FileContentResult>> tryPart,
            Func<IDTO, Task>? catchPart = null,
            Func<GeneralResponseDTO<T>,
            Task>? catchReturn = null,
            [CallerMemberName] string callerName = "") where T : class
        {
            var logId = string.IsNullOrEmpty(input.LogId) || input.LogId == Guid.Empty.ToString() ?
                (await LogWriter.CreateLog(LogWriterExtensions.ApplicationName)).Id
                : new Guid(input.LogId);
            input.LogId = logId.ToString();

            try
            {
                var res = await tryPart();
                await LogWriter.FinishLog(logId);
                return res;
            }
            catch (Exception ex)
            {
                await LogWriter.AddExceptionLogAsync(input, ex, GetType(), callerName: callerName);
                await LogWriter.FinishLog(logId, LogStatusEnum.Exception);
                if (catchPart != null)
                {
                    await catchPart(input);
                }
                var res = ex.ToExceptionGeneralResponse<T>(logId);
                if (catchReturn != null)
                {
                    await catchReturn(res.Value);
                }
                return null;
            }
        }`,
        descriptions: [ 
            "special WihtLogging for File Exporting",
            "Response is type of FileContentResult"
        ],
    },
    {
        order:8,
        type: 'code',
        title: 'WithLoggingFinalResponse',
        subtitle: 'FinalResponseDTO',
        language: 'csharp',
        startingLineNumber: 150,
        item: `
        protected async Task<ActionResult<FinalResponseDTO<T>>> WithLoggingFinalResponse<T>(
            IDTO input, Func<Task<T>> tryPart, Func<IDTO, Task>? catchPart = null, 
            Func<GeneralResponseDTO<T>, Task>? catchReturn = null, 
            [CallerMemberName] string callerName = "") where T : class
        {
            bool isValid = Guid.TryParse(input.LogId, out _);
            if (!isValid)
                input.LogId = "";
            var logId = string.IsNullOrEmpty(input.LogId) || input.LogId == Guid.Empty.ToString() ?
                (await LogWriter.CreateLog(LogWriterExtensions.ApplicationName)).Id
                : new Guid(input.LogId);
            input.LogId = logId.ToString();

            try
            {
                var res = await tryPart();
                await LogWriter.FinishLog(logId);
                var x = new FinalResponseDTO<T>(res)
                {
                    JobId = logId
                };
                return new ActionResult<FinalResponseDTO<T>>(x);
            }
            catch (Exception ex)
            {
                await LogWriter.AddExceptionLogAsync(input, ex, GetType(), callerName: callerName);
                await LogWriter.FinishLog(logId, LogStatusEnum.Exception);
                if (catchPart != null)
                {
                    await catchPart(input);
                }
                var res = ex.ToExceptionGeneralResponse<T>(logId);
                if (catchReturn != null)
                {
                    await catchReturn(res.Value);
                }
                return new ActionResult<FinalResponseDTO<T>>(new FinalResponseDTO<T>(res.Value));
            }
        }
    }
}`,
        descriptions: [  
            "Response is type of FinalResponseDTO"
        ],
    }
]

const header = 'Patika.Framework.Shared.Controllers';
const GenericApiController = () => {
    return (
        <DocPaper header={header} contents={contents} />     
      )
}

export default GenericApiController