import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Card, CardContent } from '@mui/material';

const ImageItem = ({ item }) => {
    return (
        <Box  sx={{ m: 1 }}>
        <Card elevation={0}>
            <CardContent >
                <ImageList  >
                    <ImageListItem key={item.img}>
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>  {item.subtitle}</span>}
                            position="below"
                        />
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
            </CardContent>
        </Card >
        </Box>
    );
}

export default ImageItem