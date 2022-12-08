import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ContentCard from './ContentCard'
import Highlighter from './Highlighter'
import ImageItem from './ImageItem'
import ImageItems from './ImageItems'

const DocPaper = ({ contents, header, commonDetails }) => {
    return (
        <Box
            sx={{ width: '100%', mt: 4 }}
        >
            <Stack spacing={2} direction='column' sx={{ mb: 2 }}>
                {
                    header &&
                    <Typography variant='h6' sx={{ mb: 2 }} align='center'>{header}</Typography>
                }
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
                        <>
                            {content.type === 'code' &&
                                <Highlighter key={content.order} item={content} />}
                            {content.type === 'img' &&
                                <ImageItems key={content.order} data={content} />}
                            {content.type === 'text' &&
                                <ContentCard key={content.order} data={content} />}
                        </>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default DocPaper