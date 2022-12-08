import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import ImageItem from './ImageItem';

const ImageItems = ({ data }) => {
    return (
        <Card elevation={0}>
            <CardContent >
                <CardHeader title={data.title} subheader={data.subtitle} style={{ textAlign: 'center' }} />
                {
                    data.descriptions.map((description, index) => {
                        return (
                            <Typography key={index} variant='body1'>{description}</Typography>
                        )
                    })
                }
                 {
                    data.images.map((image, index) => {
                        return (
                            <ImageItem key={index}  item={image} />
                        )
                    })
                } 
            </CardContent>
        </Card >
    );
}
export default ImageItems
