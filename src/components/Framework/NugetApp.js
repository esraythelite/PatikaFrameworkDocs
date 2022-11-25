import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Link from '@mui/material/Link';

const NugetApp = ({ name, description }) => {
    const baseLink = 'https://www.nuget.org/packages/';
    const [link, setLink] = useState('')
    useEffect(() => {
        setLink(`${baseLink}${name}`);
    }, [name])

    return (
        <Card elevation={1} sx={{ m: 1, p:2 }}>
            <CardHeader title={name} />
            <CardContent  >
                <Typography variant='h6'>This package;</Typography>
                <Typography variant='body1'>{description}</Typography>
            </CardContent>
            <CardActions>
                <Link target={'_blank'} href={link}  >See on nuget.org</Link>
            </CardActions>
        </Card > 
    )
}

export default NugetApp