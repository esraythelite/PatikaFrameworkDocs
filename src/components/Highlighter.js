import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Highlighter = ({ title, descriptions, code, language = 'csharp', showLineNumbers = true, startingLineNumber = 1 }) => {
    return (
        <Card elevation={1} sx={{ m: 1 }}>
            <CardHeader title={title} style={{ textAlign: 'center' }} />
            <CardContent  >
                {
                    descriptions.map((description, index) => {
                        return (
                            <Typography key={index} variant='body1'>{description}</Typography>
                        )
                    })
                }
                {code &&
                    <SyntaxHighlighter
                        customStyle={{
                            maxWidth: '100%',
                            width: '100%',
                            maxHeight: '400px'
                        }}
                        children={code}
                        language={language}
                        style={dracula}
                        showLineNumbers={showLineNumbers}
                        startingLineNumber={startingLineNumber} />
                }
            </CardContent>
        </Card >


    );
}

export default Highlighter