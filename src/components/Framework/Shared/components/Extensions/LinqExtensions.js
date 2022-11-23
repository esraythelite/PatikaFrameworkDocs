import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
    {
        order: 1,
        type: 'code',
        title: 'WhereIf',
        language: 'csharp',
        startingLineNumber: 5,
        item: `
        namespace Patika.Framework.Shared.Extensions
        {
            public static class LinqExtensions
            {
                public static IQueryable<T> WhereIf<T>(this IQueryable<T> query, bool condition, string whereClause)
                {
                    if (!condition || string.IsNullOrEmpty(whereClause))
                        return query;
        
                    return query.Where(whereClause);
                }`,
        descriptions: [
            "Applies where clause to queries",
        ],
    },
    {
        order: 2,
        type: 'code',
        title: 'SortBy',
        language: 'csharp',
        startingLineNumber: 16,
        item: `
                public static IQueryable<T> SortBy<T>(this IQueryable<T>? query, ICollection<Sort>? sorts)
                {
                    bool isFirstElement = true;

                    if (query is null)
                        return Enumerable.Empty<T>().AsQueryable();

                    if (sorts is null || !sorts.Any())
                        return query;

                    foreach (var sort in sorts)
                    {
                        if (query is null)
                            return Enumerable.Empty<T>().AsQueryable();

                        string orderByMethod;

                        if (isFirstElement)
                        {
                            orderByMethod = (sort.Type == SortTypeEnum.ASC) ? "OrderBy" : "OrderByDescending";

                            isFirstElement = false;
                        }
                        else
                        {
                            orderByMethod = (sort.Type == SortTypeEnum.ASC) ? "ThenBy" : "ThenByDescending";
                        }

                        ParameterExpression pe = Expression.Parameter(query.ElementType);
                        MemberExpression me = Expression.Property(pe, sort.Name);

                        MethodCallExpression orderByCall = Expression.Call(
                            type : typeof(Queryable), 
                            orderByMethod, 
                            new Type[] { query.ElementType, me.Type }, 
                            query.Expression,
                            Expression.Quote(Expression.Lambda(me, pe)
                            ));

                        query = query.Provider.CreateQuery(orderByCall) as IOrderedQueryable<T>;
                    }          

                    return query.AsQueryable();
                }`,
        descriptions: [
            "Applies sortings to queries",
        ],
    },
    {
        order: 3,
        type: 'code',
        title: 'JsonToOrNull',
        language: 'csharp',
        startingLineNumber: 60,
        item: `
                public static async Task<IEnumerable<T>> PaginateAsync<T>(this IQueryable<T>? query, Pagination? pagination = null, int defaultMaxCount = 1000)
                {
                    if (query is not null)
                    {
                        if (pagination is null)
                            return await query.ToDynamicListAsync<T>();
                        var res = HandlePagination(query, pagination, defaultMaxCount);
                        return await res.ToDynamicListAsync<T>();
                    }
                    return await Enumerable.Empty<T>().ToDynamicListAsync<T>();
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
        startingLineNumber: 73,
        item: `         `,
        descriptions: [
            "*Sonradan eklenen alanlar kaldırılabilir, şimdilik dökümana eklemedik", 
        ],
    },
     
]

const LinqExtensions = () => {
    return (
        <Stack spacing={2} direction='column'>
            <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Extensions.GeneralResponseDTOExtensions</Typography>
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

export default LinqExtensions