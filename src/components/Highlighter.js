import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Highlighter = ({ title, descriptions, code, language = 'csharp', startingLineNumber = 1 }) => {
    return (
        <Card elevation={1} sx={{ m: 1 }}>
            <CardHeader title={title} />
            <CardContent  >
                <SyntaxHighlighter
                    customStyle={{
                        maxWidth: '100%'
                    }}
                    children={code}
                    language={language}
                    style={dracula}
                    showLineNumbers={true}
                    startingLineNumber={startingLineNumber} />
                {
                    descriptions.map((description, index) => {
                        return (
                            <Typography key={index} variant='body1'>{description}</Typography>
                        )
                    })
                }
            </CardContent>
        </Card >


    );
}

export default Highlighter