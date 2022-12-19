import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'TenantServiceMiddleware',
    subtitle: 'Construtor and props',
    language: 'csharp',
    startingLineNumber: 16,
    item: `
    namespace Patika.Framework.Identity.Shared.Middlewares
    {
        public class TenantServiceMiddleware : CoreService, IMiddleware
        {
            private ILogWriter LogWriter { get; }
            private ITenantService TenantService { get; }
            private Configuration Configuration { get; }
            private HttpClientService HttpClientService { get; }

            public TenantServiceMiddleware(IServiceProvider serviceProvider) : base(serviceProvider)
            {
                LogWriter = GetService<ILogWriter>();
                TenantService = GetService<ITenantService>();
                Configuration = GetService<Configuration>();
                HttpClientService = new HttpClientService(Configuration.GatewayUrl, serviceProvider);
            }`,
    descriptions: [ 
      "Inherited from CoreService for using the same common ServiceProvider",
      "Inherited from IMiddleware for using invoked in controller action",
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'InvokeAsync',
    subtitle: 'and private methods',
    language: 'csharp',
    startingLineNumber: 33,
    item: ` 
            public async Task InvokeAsync(HttpContext context, RequestDelegate next)
            {
                var dto = new Patika.Framework.Shared.DTO.DTO();
                var tenantId = await FindTenantOnRequest(context, dto);
                TenantService.SetTenant(tenantId);
                await next(context);
            }

            private async Task<Guid> FindTenantOnRequest(HttpContext context, Patika.Framework.Shared.DTO.DTO dto)
            {
                var tenantId = Guid.Empty;
                if (context.Request.Query.TryGetValue(Configuration.AccountConfig.TenantKey, out var values))
                {
                    string tenantQuery = values.FirstOrDefault()?.ToString() ?? string.Empty;
                    var tenant = await GetTenantAsync(tenantQuery.ToGuid(), dto);
                    tenantId = tenant is not null ? tenant.Id : Guid.Empty;
                }
                return tenantId;
            }

            private async Task<TenantDTO?> GetTenantAsync(Guid tenantId, Patika.Framework.Shared.DTO.DTO dto)
            {
                var res = await HttpClientService.HttpGetAs<GeneralResponseDTO<TenantDTO>>($"identity/tenants/{tenantId}");

                if (res is null)
                {
                    await LogWriter.AddCodeMileStoneLogAsync(dto, "No tenant found by id", GetType());
                    return null;
                }
                else
                {
                    if (!res.Done)
                    {
                        await LogWriter.AddCodeMileStoneLogAsync(dto, "GetTenantFailed", GetType(), output: res.Exception);
                        return null;
                    }
                    else return res.Result;
                }
            }
        }
    }`,
    descriptions: [
      "Finds current tenant on request query.",
      "GetTenantAsync request to identity server to get tenant by id.",
      "If no tenant found on query string or from identity service, sets empty guid as tenant.",
      "Otherwise, set TenantService tenant as tenantId", 
    ],
  } 
]

const header = 'Patika.Framework.Identity.Shared.Middlewares';
const IdentitySharedMiddlewares = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}     
export default IdentitySharedMiddlewares
