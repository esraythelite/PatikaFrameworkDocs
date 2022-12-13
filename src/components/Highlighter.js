import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Highlighter = ({ item }) => {
    const [data, setData] = useState(item)
    useEffect(() => {
        setData({
            ...data,
            language: data.language ?? 'csharp',
            showLineNumbers: data.startingLineNumber !== undefined,
            startingLineNumber: (data.startingLineNumber !== undefined ? data.startingLineNumber : 1)
        })
    }, [item])

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
                {
                    data.item &&
                    <SyntaxHighlighter
                        customStyle={{
                            maxWidth: '100%',
                            width: '100%',
                            maxHeight: '400px',
                            lineHeight: "1.2",
                            fontSize: "0.9rem"
                        }}
                        children={data.item}
                        language={data.language}
                        style={dracula}
                        showLineNumbers={data.showLineNumbers}
                        startingLineNumber={data.startingLineNumber}
                    />
                }
            </CardContent>
        </Card >


    );
}

export default Highlighter