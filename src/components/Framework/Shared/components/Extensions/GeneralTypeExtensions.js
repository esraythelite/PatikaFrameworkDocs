import React from 'react'
import DocPaper from '../../../../DocPaper'

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'NewSequentalGuid',
        language: 'csharp',
        startingLineNumber: 7,
        item: `
    namespace Patika.Framework.Shared.Extensions
    {
        public static class GeneralTypeExtensions
        {
            private static readonly RandomNumberGenerator RandomNumberGenerator = RandomNumberGenerator.Create();
            public static Guid NewSequentalGuid(this Guid obj)
            {
                var randomBytes = new byte[10];
                RandomNumberGenerator.GetBytes(randomBytes);
                long timestamp = DateTime.UtcNow.Ticks / 10000L;
    
                byte[] timestampBytes = BitConverter.GetBytes(timestamp);
                if (BitConverter.IsLittleEndian)
                {
                    Array.Reverse(timestampBytes);
                }
    
                byte[] guidBytes = new byte[16];
                Buffer.BlockCopy(randomBytes, 0, guidBytes, 0, 10);
                Buffer.BlockCopy(timestampBytes, 2, guidBytes, 10, 6);
    
                return new Guid(guidBytes);
            }`,
        descriptions: [
            "Creates new incremented Guid for entity id.",
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'ToJson & JsonTo',
        language: 'csharp',
        startingLineNumber: 31,
        item: `         
        public static string ToJson(this object obj) => JsonSerializer.Serialize(obj);
        public static T? JsonTo<T>(this string json) => JsonSerializer.Deserialize<T>(json);
    `,
        descriptions: [
            "ToJson:  serializes object to json string",
            "JsonTo:  deserialize json string to object",
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'JsonToOrNull',
        language: 'csharp',
        startingLineNumber: 34,
        item: `        
        public static T? JsonToOrNull<T>(this string json) where T : class
        {
            try
            {
                return JsonSerializer.Deserialize<T>(json);
            }
            catch
            {
                return null;
            }
        }`,
        descriptions: [
            "tries deserializing string to object and returns it, otherwise returns null",
        ],
    },
    {
        order: 4,
        type: 'code',
        title: 'ToListAsync',
        language: 'csharp',
        startingLineNumber: 45,
        item: `        
        public static Task<List<T>> ToListAsync<T>(this IAsyncEnumerable<T> source)
        {
            if (source is null)
            {
                throw new ArgumentNullException(nameof(source));
            }

            return ExecuteAsync();

            async Task<List<T>> ExecuteAsync()
            {
                var list = new List<T>();

                await foreach (var element in source)
                {
                    list.Add(element);
                }

                return list;
            }
        }`,
        descriptions: [
            "tries to convert to IAsyncEnumerable<T> to List<T>",
            "throws ArgumentNullException if source is undefined"
        ],
    },
    {
        order: 5,
        type: 'code',
        title: 'NewId',
        language: 'csharp',
        startingLineNumber: 68,
        item: ` 
            public static T? NewId<T>(T id)
            {
                if (typeof(T) != typeof(Guid) && id != null)
                    return id;
                if (typeof(T) == typeof(Guid) && id?.ToString() != Guid.Empty.ToString())
                    return id;
                if (typeof(T) == typeof(Guid))
                    return (T)Convert.ChangeType(new Guid().NewSequentalGuid(), typeof(T));
                return default;
            }`,
        descriptions: [
            "Generates New sequencial Guid Id",
            "Returns default value for other types"
        ],
    },
    {
        order: 6,
        type: 'code',
        title: 'ToGuid',
        language: 'csharp',
        startingLineNumber: 79,
        item: ` 
                public static Guid ToGuid(this string id)
                {
                    if (string.IsNullOrEmpty(id))
                        throw new StringToGuidFailedException();
                    return new Guid(id);
                }
            }
        }`,
        descriptions: [
            "Converts string to Guid",
            "if string is not defined, throws StringToGuidFailedException"
        ],
    }
]

const header = 'Patika.Framework.Shared.Extensions.GeneralTypeExtensions';
const GeneralTypeExtensions = () => {
  return (
    <DocPaper header={header} contents={contents} />     
  )
}   

export default GeneralTypeExtensions