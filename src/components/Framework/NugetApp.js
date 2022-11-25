import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Link from '@mui/material/Link';

const NugetApp = ({ name, descriptions }) => {
    const baseLink = 'https://www.nuget.org/packages/';
    const [link, setLink] = useState('')
    useEffect(() => {
        setLink(`${baseLink}${name}`);
    }, [name])

    return (
        <Card elevation={1} sx={{ m: 1, p: 2 }}>
            <CardHeader title={name} />
            <CardContent  >
                {
                    descriptions && (
                        <>
                            <Typography variant='h6'>This package;</Typography>
                            {
                                descriptions.map((description) => {
                                    return <Typography variant='body1'>{description}</Typography>
                                })
                            }
                        </>
                    )
                }
            </CardContent>
            <CardActions>

                <Typography variant='body1'>Go to <Link target={'_blank'} href={link}  >NUGET.ORG</Link> to see package info, dependencies and versions.</Typography>

            </CardActions>
        </Card >
    )
}

export default NugetApp