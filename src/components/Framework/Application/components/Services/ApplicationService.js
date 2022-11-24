import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../../DocPaper' 

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ApplicationService',
    language: 'csharp',
    startingLineNumber: 12,
    item: `
    namespace Patika.Framework.Application.Services
    {
        public abstract class ApplicationService : BaseService, IApplicationService
        {
            MappingProfile MappingProfile { get; set; }
            protected IMapper Mapper => MappingProfile.Mapper;
            protected HttpClientService HttpClientService { get; set; }
            public ApplicationUser ApplicationUser { get; set; }
    
            public ApplicationService(Configuration configuration) 
                : this(configuration, new GeneralMappingProfile(), new NullLogWriter())
            {
            }
    
            public ApplicationService(ILogWriter logWriter, Configuration configuration) 
                : this(configuration, new GeneralMappingProfile(), logWriter)
            { 
            }
    
            public ApplicationService(
                Configuration configuration,
                MappingProfile mappingProfile,
                ILogWriter logWriter) : base(logWriter, configuration)
            {
                MappingProfile = mappingProfile;
                HttpClientService = new HttpClientService(configuration.GatewayUrl);
            }`,
    descriptions: [
        "Constructors and props"
    ],
  }, 
  {
    order: 2,
    type: 'code',
    title: 'AddCodeMileStoneLogAsync',
    language: 'csharp',
    startingLineNumber: 40,
    item: `
            protected async Task AddCodeMileStoneLogAsync(
                IDTO dto, string message, 
                object? input = null, 
                object? output = null, 
                [CallerMemberName] string callerName = "")
            {
                await LogWriter.AddCodeMileStoneLogAsync(dto, message, GetType(), input, output, callerName: callerName);
            }`,
    descriptions: [
        "Adds CodeMileStone Log"
    ],
  }, 
  {
    order: 3,
    type: 'code',
    title: 'MapTo',
    language: 'csharp',
    startingLineNumber: 49,
    item: `    
            public T MapTo<T, S>(S from) => Mapper.Map<S, T>(from);
            public T MapTo<T>(object from) => Mapper.Map<T>(from);      `,
    descriptions: [
        "Mapper methods"
    ],
  }, 
  {
    order: 4,
    type: 'code',
    title: 'GetTokenAsync',
    language: 'csharp',
    startingLineNumber: 52,
    item: ` 
            public async Task<TokenResultDTO> GetTokenAsync(string token)
            {
                try
                {
                    await HttpClientService.SetTokenAsync(token);
                    var res = await HttpClientService.HttpGetAs<TokenResultDTO>("identity/token");
                    return res ?? throw new Exception("GetTokenFailedException");
                }
                catch (Exception)
                {
                    throw;
                }
            }    `,
    descriptions: [
        "Gets cached user token from identity server "
    ],
  }, 
  {
    order: 5,
    type: 'code',
    title: 'GetApplicationUser',
    language: 'csharp',
    startingLineNumber: 66,
    item: `
            public async Task<ApplicationUserDTO> GetApplicationUser(string token)
            {
                try
                {
                    await HttpClientService.SetTokenAsync(token);
                    var res = await HttpClientService.HttpGetAs<ApplicationUserDTO>("identity/application-user");
                    return res ?? throw new Exception("GetApplicationUserFailedException");
                }
                catch (Exception)
                {
                    throw new UserNotFoundException();
                }
            }  `,
    descriptions: [
        "Gets current user from identity server "
    ],
  }, 
  {
    order: 6,
    type: 'code',
    title: 'SetApplicationUserAsync',
    language: 'csharp',
    startingLineNumber: 80,
    item: ` 
            public Task SetApplicationUserAsync(ApplicationUser user)
            {
                ApplicationUser = user;
                return Task.CompletedTask;
            }`,
    descriptions: [
        "Sets ApplicationUser of application service "
    ],
  }
]

const header = 'Patika.Framework.Application.Services.ApplicationService';
const ApplicationService = () => {
  return (
    <DocPaper  header={header} contents={contents} />     
  )
}  


export default ApplicationService