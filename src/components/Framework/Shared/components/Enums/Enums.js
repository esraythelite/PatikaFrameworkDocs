import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import Highlighter from '../../../../Highlighter'
import ImageItem from '../../../../ImageItem'

const contents = [
  {
    order: 1,
    type: 'code',
    title: 'ConditionOperatorEnum',
    language: 'csharp',
    startingLineNumber: 7,
    item: `namespace Patika.Framework.Shared.Enums
{
    public enum ConditionOperatorEnum : int
    {
        Equal = 0,
        NotEqual,
        Contains,
        BiggerThan,
        BiggerOrEqual,
        SmallerThan,
        SmallerOrEqual,
        In,
        Between
    }
}`,
    descriptions: [
      "Conditon operator is used in repositories to filter queries."
    ],
  },
  {
    order: 2,
    type: 'code',
    title: 'SortTypeEnum',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Enums
{
    public enum SortTypeEnum
    {
        None,
        ASC,
        DESC
    }
}`,
    descriptions: [
      "SortTypeEnum is sort direction enum",
      "Sorts query ASC, DESC."
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'LogStatusEnum',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Enums
{
    public enum LogStatusEnum : int
    {
        Started = 0,
        Exception = 400,
        Success = 200,
        Forbidden = 403,
        InternalError = 500,
    }
}`,
    descriptions: [
      "LogStatusEnum is actually error code of httpRequests.",
      "GeneralResponseDTO has ResultCode property type of LogStatusEnum. If ResultCode equals to Success, no error. Otherwise we need to handle response exception. "
    ],
  },
  {
    order: 3,
    type: 'code',
    title: 'LogTypeEnum',
    language: 'csharp',
    startingLineNumber: 1,
    item: `namespace Patika.Framework.Shared.Enums
{
    public enum LogTypeEnum : int
    {
        Info = 0,
        Warning = 1,
        Error = 2,
        Fatal = 3,
        CodeMilestone  = 4,
        DesicionMaking = 5,
        Exception = 6,
    }
}`,
    descriptions: [
      "LogTypeEnum is used in log errors, warnings, code milestones etc."
    ],
  }
]

const Enums = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Enums</Typography>
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

export default Enums