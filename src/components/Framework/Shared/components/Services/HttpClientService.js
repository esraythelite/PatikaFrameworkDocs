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
        title: 'HttpClientService',
        language: 'csharp',
        startingLineNumber: 8,
        item: `
        namespace Patika.Framework.Shared.Services
        {
            public class HttpClientService
            {
                static DateTime LastTokenAcequireTime = DateTime.MinValue;
                static string Token = "";
                private string BaseAPIUrl { get; }
                protected HttpClient HttpClient { get; }
                ClientAuthenticationParams AuthenticationParams { get; } = new();
                public AuthenticationHeaderValue? Authorization
                {
                    get => HttpClient?.DefaultRequestHeaders?.Authorization;
                    set => HttpClient.DefaultRequestHeaders.Authorization = value;
                }
                public HttpRequestHeaders RequestHeaders => HttpClient.DefaultRequestHeaders;
                public HttpClientService(string baseAPIUrl, ClientAuthenticationParams? authenticationParams = null)
                {
                    if (!baseAPIUrl.EndsWith("/"))
                        baseAPIUrl += "/";
                    AuthenticationParams = authenticationParams ?? new ClientAuthenticationParams();
                    BaseAPIUrl = baseAPIUrl;
                    HttpClient = GetHttpClient();
                }
                private HttpClient GetHttpClient()
                {
                    var client = new HttpClient
                    {
                        BaseAddress = new Uri(BaseAPIUrl)
                    };
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    return client;
                }`,
        descriptions: [
            "This service help us to send request microservices by using HttpClient.",
            "We can use it for external api requests too.",
            "ClientAuthenticationParams is for Microservice to microservice authentication.", 
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'SetTokenAsync',
        language: 'csharp',
        startingLineNumber: 44,
        item: `        
                public Task SetTokenAsync(string token)
                {
                    try
                    {
                        if (string.IsNullOrEmpty(token))
                        {
                            throw new UserIsUnauthorizedException();
                        }
                        RemoveToken();
                        RequestHeaders.Add("Authorization", $"Bearer {token.Replace("Bearer", "").Trim()}");
                        return Task.CompletedTask;
                    }
                    catch
                    {
                        throw;
                    }
                }

                public void RemoveToken() => RequestHeaders.Remove("Authorization");`,
        descriptions: [
            "Sets token before sending requests",
            "Throws UserIsUnauthorizedException if token is not defined",
            "First removes if token exists, then adds new Authorization header for token."
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'AcquireTokenAsync',
        language: 'csharp',
        startingLineNumber: 64,
        item: `        
                public async Task AcquireTokenAsync(ClientAuthenticationParams? authenticationParams = null)
                {
                    if (LastTokenAcequireTime < DateTime.Now)
                    {
                        authenticationParams ??= AuthenticationParams;
                        if (!authenticationParams.AuthServer.EndsWith("/"))
                            authenticationParams.AuthServer += "/";
                        try
                        {
                            var response = await HttpClient.PostAsJsonAsync(GetUrl("identity/connect/token"), new BasicLoginInputDTO
                            {
                                Password = authenticationParams.ClientSecret,
                                UserName = authenticationParams.ClientId
                            });

                            var payload = await response.Content.ReadFromJsonAsync<TokenResultDTO>();

                            if (string.IsNullOrEmpty(payload?.AccessToken))
                            {
                                throw new InvalidOperationException("An error occurred while retrieving an access token.");
                            }
                            Token = payload.AccessToken;
                            LastTokenAcequireTime = DateTime.Now.AddHours(12);
                        }
                        catch (Exception)
                        {
                            throw;
                        }
                    }
                    await SetTokenAsync(Token);
                }`,
        descriptions: [
            "Get and set token if LastTokenAcequireTime is smaller current date time",
            "Gets token over http from identity server by re-signing."
        ],
    },
    {
        order: 4,
        type: 'code',
        title: 'HttpGetAsJson',
        language: 'csharp',
        startingLineNumber: 96,
        item: ` 
                public async Task<string> HttpGetAsJson(string apiPath)
                {
                    var response = await HttpClient.GetAsync(GetUrl(apiPath));
                    return await response.Content.ReadAsStringAsync();
                }`,
        descriptions: [
            "Http Get method with Json response"
        ],
    },
    {
        order: 5,
        type: 'code',
        title: 'HttpGetAs',
        language: 'csharp',
        startingLineNumber: 102,
        item: `        
                public async virtual Task<T?> HttpGetAs<T>(string apiPath)
                {
                    var res = await HttpClient.GetAsync(GetUrl(apiPath));
                    if (res.StatusCode == HttpStatusCode.OK)
                    {
                        var str = await res.Content.ReadAsStringAsync();
                        return JsonConvert.DeserializeObject<T>(str);
                    }
                    throw new Exception($"HTTP get return error code {res.StatusCode}");
                }`,
        descriptions: [
            "Http Get method with object response"
        ],
    },
    {
        order: 6,
        type: 'code',
        title: 'HttpPostJson',
        language: 'csharp',
        startingLineNumber: 113,
        item: `      
                public async virtual Task<T?> HttpPostJson<T>(string apiPath, object value)
                {
                    var response = await HttpClient.PostAsJsonAsync(GetUrl(apiPath), value);
                    if (response.StatusCode == HttpStatusCode.Unauthorized)
                    {
                        throw new Exception(await response.Content.ReadAsStringAsync());
                    }
                    return await ReadAsAsync<T>(response.Content);
                }`,
        descriptions: [            
            "Http Post method with object response"
        ],
    },
    {
        order: 7,
        type: 'code',
        title: 'HttpPutJson',
        language: 'csharp',
        startingLineNumber: 123,
        item: ` 
                public async Task<T?> HttpPutJson<T>(string apiPath, object value)
                {
                    var request = new HttpRequestMessage
                    {
                        Content = JsonContent.Create(value),
                        Method = HttpMethod.Put,
                        RequestUri = new Uri(GetUrl(apiPath))
                    };
                    var response = await HttpClient.SendAsync(request);
                    if (response.StatusCode == HttpStatusCode.Unauthorized)
                    {
                        throw new Exception(await response.Content.ReadAsStringAsync());
                    }
                    return await ReadAsAsync<T>(response.Content);
                }`,
        descriptions: [
            "Http Put method with object response"
        ],
    },
    {
        order: 8,
        type: 'code',
        title: 'HttpDeleteJson',
        language: 'csharp',
        startingLineNumber: 139,
        item: `
                public async Task<T?> HttpDeleteJson<T>(string apiPath, object value)
                {
                    var request = new HttpRequestMessage
                    {
                        Content = JsonContent.Create(value),
                        Method = HttpMethod.Delete,
                        RequestUri = new Uri(GetUrl(apiPath))
                    };
                    var response = await HttpClient.SendAsync(request);
                    if (response.StatusCode == HttpStatusCode.Unauthorized)
                    {
                        throw new Exception(await response.Content.ReadAsStringAsync());
                    }
                    return await ReadAsAsync<T>(response.Content);
                }`,
        descriptions: [
            "Http Delete method with Json response"
        ],
    },
    {
        order: 9,
        type: 'code',
        title: 'HttpDeleteAsync',
        language: 'csharp',
        startingLineNumber: 155,
        item: `
                public async Task<HttpResponseMessage> HttpDeleteAsync(string apiPath)
                => await HttpClient.DeleteAsync(GetUrl(apiPath));`,
        descriptions: [
            "Http Delete method with HttpResponseMessage response"
        ],
    },
    {
        order: 10,
        type: 'code',
        title: 'HttpPostJson',
        language: 'csharp',
        startingLineNumber: 158,
        item: ` 
                public async Task<HttpResponseMessage> HttpPostJson(string apiPath, object value)
                => await HttpClient.PostAsJsonAsync(GetUrl(apiPath), value);`,
        descriptions: [
            "Http Post method with HttpResponseMessage response"
        ],
    },
    {
        order: 11,
        type: 'code',
        title: 'HttpPutJson',
        language: 'csharp',
        startingLineNumber: 161,
        item: ` 
                public async Task<HttpResponseMessage> HttpPutJson(string apiPath, object value)
                => await HttpClient.PutAsJsonAsync(GetUrl(apiPath), value);`,
        descriptions: [
            "Http Put method with HttpResponseMessage response"
        ],
    },
    {
        order: 12,
        type: 'code',
        title: 'HttpPostFormContentAsync',
        language: 'csharp',
        startingLineNumber: 164,
        item: `
                public async Task<T?> HttpPostFormContentAsync<T>(string apiPath, HttpContent value)
                {
                    var response = await HttpClient.PostAsync(GetUrl(apiPath), value);
                    return await ReadAsAsync<T>(response.Content);
                }`,
        descriptions: [
            "Http Post method with HttpContent input and  object response"
        ],
    },
    {
        order: 13,
        type: 'code',
        title: 'HttpPostFormWithXWWWFormContentAsync',
        language: 'csharp',
        startingLineNumber: 170,
        item: ` 
                public async Task<T?> HttpPostFormWithXWWWFormContentAsync<T>(string apiPath, HttpContent value)
                {
                    //value.Headers.ContentType = new MediaTypeHeaderValue
                    //HttpClient.DefaultRequestHeaders.Add("Content-Type", "application/x-www-form-urlencoded");
                    var response = await HttpClient.PostAsync(GetUrl(apiPath), value);
                    return await ReadAsAsync<T>(response.Content);
                }`,
        descriptions: [
            "Http Post method with HttpContent input and  object response"
        ],
    },
    {
        order: 14,
        type: 'code',
        title: 'ReadAsAsync',
        language: 'csharp',
        startingLineNumber: 178,
        item: `
                protected static async Task<T?> ReadAsAsync<T>(HttpContent content)
                {
                    var json = await content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<T>(json);
                }`,
        descriptions: [
            "Deserializes json response to object"
        ],
    },
    {
        order: 15,
        type: 'code',
        title: 'GetUrl',
        language: 'csharp',
        startingLineNumber: 184,
        item: `       
                 protected string GetUrl(string apiPath) => $"{BaseAPIUrl}{(apiPath.StartsWith("/") ? apiPath[1..] : apiPath)}";`,
        descriptions: [
            "Concats api path to BaseUrl and returns full url"
        ],
    }
]



const header = 'Patika.Framework.Shared.Services.HttpClientService';
const HttpClientService = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}  
 
export default HttpClientService