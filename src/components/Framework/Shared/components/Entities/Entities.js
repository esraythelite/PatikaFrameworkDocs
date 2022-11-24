import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import DocPaper from '../../../../DocPaper'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 7,
    type: 'code',
    title: 'AccountConfig',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
    {
        public class AccountConfig
        {
            public int ActivationCodeExpireInSeconds { get; set; }
            public int ActivationCodeMaxTryCount { get; set; }
        }
    }`,
    descriptions: [
      "A configuration object that used for activation codes."
    ],
  },
  {
    order: 5,
    type: 'code',
    title: 'ApplicationUser',
    language: 'csharp',
    startingLineNumber: 5,
    item: `namespace Patika.Framework.Shared.Entities
{ 
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public bool IsProfileCompleted { get; set; }
        public string ActivationCode { get; set; } = string.Empty;
        public DateTime ActivationCodeExpireDate { get; set; }
        public int ActivationCodeTryCount { get; set; }
        public bool IsActivationCodeValidated { get; set; }  
        public DateTime? LastLogin { get; set; }
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get  ; set ; }

        public Guid GetGuid()
        {
            return Id.ToGuid();
        }
    }
}`,
    descriptions: [
      "Auth server User table entity",
      "Inherit from Microsoft.AspNetCore.Identity.IdentityUser"
    ],
  },
  {
    order: 8,
    type: 'code',
    title: 'AzureConfig',
    language: 'csharp',
    startingLineNumber: 4,
    item: `namespace Patika.Framework.Shared.Entities
    {
        public class AzureConfig  
        {
            public string ConnectionString { get; set; } = string.Empty;     
        }
    }`,
    descriptions: [
      "AzureConfig.ConnectionString is provides to connect Azure blob storage for uplading files.",
    ],
  },
  {
    order: 9,
    type: 'code',
    title: 'ClientAuthenticationParams',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
{
  public class ClientAuthenticationParams 
  {
    public string ClientId { get; set; } = string.Empty;
    public string ClientSecret { get; set; } = string.Empty;
    public string AuthServer { get; set; } = string.Empty;
    public ClientAuthenticationParams()
    {

    }
    public ClientAuthenticationParams(Configuration configuration)
    {
      ClientId = configuration.ClientId;
      ClientSecret = configuration.ClientSecret;
      AuthServer = configuration.AuthServerUrl;
    }

    public static implicit operator ClientAuthenticationParams(Configuration c) => new(c);            
  }
}`,
    descriptions: [
      "This objeect is used in HttpClientService, for authentication between microservices."
    ],
  },
  {
    order: 10,
    type: 'code',
    title: 'Condition',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
    {
        public class Condition
        {
            public string PropertyName { get; set; } = string.Empty;
            public ConditionOperatorEnum Operator { get; set; } = ConditionOperatorEnum.Equal;
            public List<string> Values { get; set; } = new List<string>();
        }
    }`,
    descriptions: [
      "You can use a List of Condition in repositories to filter queries.",
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'Configuration',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
{
    public class Configuration : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public string RedisHost { get; set; } = string.Empty;
        public string RabbitMQHostName { get; set; } = string.Empty;
        public string GatewayUrl { get; set; } = string.Empty;
        public string ClientId { get; set; } = string.Empty;
        public string ClientSecret { get; set; } = string.Empty;
        public string AuthServerUrl { get; set; } = string.Empty;
        public string ApplicationName { get; set; } = string.Empty;
        public bool AutoMigrate { get; set; } = false;
        public List<RDBConnectionString> RDBMSConnectionStrings { get; set; } = new List<RDBConnectionString>();
        public IDictionary<string, string> NoSqlConnectionString { get; set; } = new Dictionary<string, string>();
        public AzureConfig AzureConfiguration { get; set; } = new();
        public HangfireConfig HangfireConfig { get; set; } = new();
        public AccountConfig AccountConfig { get; set; } = new();

        public bool AcquireToken { get; set; } = false;
        
    }
}`,
    descriptions: [
      "Main configuration object of micro services.",
      "Filled on Startup from appsettings now.",
      "*We well implement several Configuration providers that will manage configurations like appsettings, database, consul etc."
    ],
  },
  {
    order: 1,
    type: 'code',
    title: 'Entity',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
{
    public abstract class Entity : IEntity<Guid>
    {
        public Guid Id { get; set; }
    }
}`,
    descriptions: [
      "The base entity class, inherited from IEntity<Guid>",
      "Id is typeof Guid.",
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'EntityWithCreated',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
{
    public abstract class EntityWithCreated<T> : IEntity<T>, IHasCreated where T : struct
    {
        public DateTime CreatedAt { get ; set; }
        public T Id { get; set; }

        public EntityWithCreated()
        {
            CreatedAt = DateTime.UtcNow;
        }
    }

    public abstract class EntityWithCreated : EntityWithCreated<Guid> { }
}`,
    descriptions: [
      "The base entity class with CreatedAt property, inherited from IEntity<T>",
      "Id is typeof T.",
      "CreatedAt is set to DateTime.UtcNow"
    ],
  },
  {
    order: 4,
    type: 'code',
    title: 'EntityWithCreatedAndUpdated',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
{
    public abstract class EntityWithCreatedAndUpdated<T> : IEntity<T>, IHasCreated, IHasUpdated where T : struct
    {
        public virtual T Id { get; set; }
        public DateTime CreatedAt { get ; set; }
        public DateTime? UpdatedAt { get;set; }

        public EntityWithCreatedAndUpdated()
        {
            CreatedAt = DateTime.UtcNow;
            UpdatedAt = DateTime.UtcNow;
        }
    }

    public abstract class EntityWithCreatedAndUpdated : EntityWithCreatedAndUpdated<Guid> { }
}`,
    descriptions: [
      "The base entity class with CreatedAt and UpdatedAt property, inherited from IEntity<T>",
      "Id is typeof T.",
      "CreatedAt and UpdatedAt is set to DateTime.UtcNow"
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'GenericEntity',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
{
    public abstract class GenericEntity<T> : IEntity<T>, IEquatable<T>, IHasCreated, IHasUpdated where T : struct
    {
        public virtual T Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public bool Equals(T other)
        {
            if (typeof(T).Equals(other.GetType()))
                return Convert.ChangeType(other, typeof(T)) == this;
            return false;
        }
    }
}`,
    descriptions: [
      "The base entity class with CreatedAt and UpdatedAt property, inherited from IEntity<T> and IEquatable<T>",
      "Id is typeof T.",
      "Equals is using for compare to entitites by type"
    ],
  },
  {
    order: 8,
    type: 'code',
    title: 'HangfireConfig',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
{
    public class HangfireConfig
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string DashboardPath { get; set; } = string.Empty;
        public string DashboardTitle { get; set; } = string.Empty;
    }
}`,
    descriptions: [
      "Hangfire Database and dashboard configuration object.",
      "ConnectionString is for Database connection.",
      "Other properties is for dashboard."
    ],
  },
  {
    order: 12,
    type: 'code',
    title: 'Log',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
{
    public class Log : Entity
    {
        public DateTime StartDateTime { get; set; } = DateTime.Now;
        public DateTime? EndDateTime {  get; set; }
        public LogStatusEnum Status { get; set; } = LogStatusEnum.Started;
        public string ApplicationName { get; set; } = string.Empty;
        public virtual ICollection<LogDetail> Details { get; set; } = new List<LogDetail>();
    }
}`,
    descriptions: [
      "Log entity. Master log record.",
      "Application name is special for each microservice.",
      "Other properties is for dashboard."
    ],
  },
  {
    order: 13,
    type: 'code',
    title: 'Log',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
{
    public class LogDetail : EntityWithCreated
    {
        public Guid LogId {  get; set; }
        public Guid UserId { get; set; }
        public Log Log { get; set; } = new();
        public string Module { get; set; } = string.Empty;
        public string Method { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public LogTypeEnum LogType { get; set; }
        public string InputAsJson { get; set; } = string.Empty;
        public string OutputAsJson {  get; set; } = string.Empty;

        public override string ToString()
        {
            return $"{Module}.{Method} - {Description} : Input:{InputAsJson} , Output:{OutputAsJson}";
        }
    }
}`,
    descriptions: [
      "Log detail entity. child log record.", 
    ],
  },
  {
    order: 10,
    type: 'code',
    title: 'Pagination',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
    {
        public class Pagination
        {
            public int Page { get; set; } = 1;
            public int Count { get; set; } = 0;
            public int TotalCount { get; set; } = 0;
        }
    }`,
    descriptions: [
      "This object provides query data paginated.", 
    ],
  },
  {
    order: 11,
    type: 'code',
    title: 'Sort',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
    {
        public class Sort
        {
            public string Name { get; set; } = string.Empty;
            public SortTypeEnum Type { get; set; }
        }
    }`,
    descriptions: [
      "This object provides query data paginated.", 
    ],
  },
  {
    order: 6,
    type: 'code',
    title: 'RDBConnectionString',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Entities
{
    public class RDBConnectionString 
    {
        public string Name { get; set; } = string.Empty;
        public string FullConnectionString { get; set; } = string.Empty; 
    }
}`,
    descriptions: [
      "", 
    ],
  }
]
const header = 'Patika.Framework.Shared.Entities';
const Entities = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
} 
 

export default Entities