import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Highlighter from './Highlighter'
import ImageItem from './ImageItem'

const DocPaper = ({ contents, header, commonDetails }) => {
    return (
        <Box
            sx={{ width: '100%',    mt:4 }}
        >
            <Stack spacing={2} direction='column' sx={{ mb: 2 }}>
                <Typography variant='h6' sx={{ mb: 2 }} align='center'>{header}</Typography>
                {
                    commonDetails && (
                        <Paper sx={{ mb: 2, p: 2 }}>
                            {commonDetails.map((content) => {
                                return (
                                    <Typography variant='body1' sx={{ mb: 2 }}>
                                        {content}
                                    </Typography>
                                )
                            })}
                        </Paper>
                    )
                }
                {contents.sort((a, b) => (a.order - b.order)).map((content) => {
                    return (
                        content.type === 'code' ? <>
                            <Highlighter key={content.order} title={content.title} descriptions={content.descriptions} code={content.item} language={content.language} showLineNumbers={content.showLineNumbers} startingLineNumber={content.startingLineNumber} />
                        </>
                            :
                            <>  <ImageItem key={content.order} item={content.item}></ImageItem></>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default DocPaper