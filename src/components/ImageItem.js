import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';

const ImageItem = ({ item }) => {
    console.log('ImageItem', item)
    return (
        <Card elevation={2} sx={{ mb: 2 }}>
            <CardContent >
                <CardHeader title={item.title} subheader={item.subtitle} />
                <ImageList  >
                    <ImageListItem key={item.img} sx={{zIndex:0}}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy" 
                        />
                    </ImageListItem>
                </ImageList>
                {item.details &&
                    item.details.map((detail, index) => {
                        return (
                            <>
                                <Typography key={index} variant='body1'>{detail.title}</Typography>
                                {detail.subDetails &&
                                    detail.subDetails.map((subDetail, index) => {
                                        return (
                                            <>
                                                <Typography key={index} variant='body1' sx={{pl:1}}>{subDetail}</Typography>
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </CardContent>
        </Card >
    );
}


export default ImageItem