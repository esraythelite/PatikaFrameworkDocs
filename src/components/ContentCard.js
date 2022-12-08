import {  Card,  CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react'

const ContentCard = ({data}) => {
    return (
        <Card elevation={1} sx={{ m: 1 }}>
        <CardHeader title={data.title} subheader={data.subtitle} style={{ textAlign: 'center' }} />
        <CardContent  >
            {
                data.descriptions.map((description, index) => {
                    return (
                        <Typography key={index} variant='body1'>{description}</Typography>
                    )
                })
            }            
        </CardContent>
    </Card >
    )
}

export default ContentCard
