import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'Constructor',
        language: 'csharp',
        startingLineNumber: 12,
        item: `namespace Patika.Framework.Shared.Controllers
{
    [ApiController]
    public abstract class GenericApiController : Controller
    {
        protected HttpClientService HttpClientService { get; set; }

        protected ILogWriter LogWriter { get; }
        protected Configuration Configuration { get; }

        public GenericApiController(ILogWriter logWriter, Configuration configuration)
        {
            LogWriter = logWriter;
            Configuration = configuration;
            HttpClientService = new HttpClientService(configuration.GatewayUrl);
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
        title: 'GetToken',
        language: 'csharp',
        startingLineNumber: 138,
        item: `protected string GetToken()
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
        order: 3,
        type: 'code',
        title: 'continue ..',
        language: 'csharp',
        startingLineNumber: 0,
        item: `...`,
        descriptions: [
        ],
    }
]

const Controllers = () => {
    return (
        <Stack spacing={2} direction='column'>
            <Typography variant='h4' sx={{ mb: 2 }}>Shared.Controllers</Typography>
            {contents.sort((a, b) => (a.order - b.order)).map((content) => {
                return (
                    content.type === 'code' ? <>
                        <Highlighter key={content.order} title={content.title} descriptions={content.descriptions} code={content.item} language={content.language} startingLineNumber={content.startingLineNumber} />
                    </>
                        :
                        <>  <ImageItem key={content.order} item={content.item}></ImageItem></>
                )
            })}
        </Stack>
    )
}

export default Controllers