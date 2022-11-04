# Auth with Apple Account

## Steps for providing auth with Apple account  
### @ Patika.Framework.Shared
- ScopeEnum 
>  ![Apple Scopes](/images/AppleScopes.png)
- Configuration Model 
>  ![Apple Config](/images/AppleConfig.png)
   
### @ Patika.Framework.Identity.AppleAuthProvider
- Project view
> ![Apple Auth Provider](/images/AppleAuthProviderLook.png) 
- Consts 
  -  Default Scopes :   
               
                public static readonly List<string> DefaultScopes = new()
                {
                    "email",
                    "name",
                    "openId"
                }; 
  -  Client Secret Generator :
>  ![Apple Auth Client Secret Generator](/images/AppleAuthClientSecretGenerator.png)
  -  GetScopes :
>  ![Get Scopes](/images/AppleAuthGetScopes.png)
  -  Adding Apple Authentication :
>  ![Adding Apple Authentication](/images/AppleAuthAddAppleAuthentication.png )
  
### @ Patika.Framework.Identity
- Config : at Patika.Framework.Shared.Authentication
> ![Authentication Config](/images/AuthenticationConfig.png) 
- Adding Auth Server Authentications
> ![Adding Auth Server Authentications](/images/AddAuthServerAuthentications.png) 
- Adding Client Server Authentications
> ![Adding Client Server Authentications](/images/AddClientServerAuthentications.png) 
