import { Typography } from '@mui/material'
import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SyntaxHighlighter from "react-syntax-highlighter";

const GitCommandTable = ({ header, commands }) => {

    return (
        <>

            <Typography variant='h6' sx={{ mt: 2 }} align='center'>{header}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size={ 'small' }>
                    <TableBody>
                        {commands.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell  >
                                    <SyntaxHighlighter 
                                        children={row.command}
                                         language="nginx" 
                                    />
                                </TableCell>
                                <TableCell  >{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default GitCommandTable
