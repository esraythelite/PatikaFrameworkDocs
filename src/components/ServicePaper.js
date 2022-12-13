import { Box, Stack, Typography, Paper, Card, CardContent, CardHeader } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import ContentSwitcher from './ContentSwitcher'

const ServicePaper = ({ content }) => {
    console.log('content:', content)
    return (
        <Card elevation={2} sx={{backgroundColor: grey[100], mt:2}} >
            <CardContent >
            <CardHeader title={content.header} style={{ textAlign: 'center' }} />
                <Box
                    sx={{ width: '100%', mt: 4 }}
                >
                    <Stack spacing={2} direction='column' sx={{ mb: 2 }}>                         
                        {
                            content.commonDetails && (
                                <Paper sx={{ mb: 2, p: 2 }}>
                                    {content.commonDetails.map((content) => {
                                        return (
                                            <Typography variant='body1' sx={{ mb: 2 }}>
                                                {content}
                                            </Typography>
                                        )
                                    })}
                                </Paper>
                            )
                        }

                        <ContentSwitcher content={content.interfaceContent} />
                        <ContentSwitcher content={content.serviceContent} />
                    </Stack>
                </Box>

            </CardContent>
        </Card >


    )
}

export default ServicePaper
