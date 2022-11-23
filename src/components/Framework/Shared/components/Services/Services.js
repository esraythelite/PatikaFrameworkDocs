import { Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react' 
 

const Services = () => {
  return (
    <Stack spacing={2} direction='column'>
      <Typography variant='h4' sx={{ mb: 2 }}>Patika.Shared.Services</Typography>
      <Typography variant='body1' sx={{ mb: 2 }}>Implementations of Interfaces and other services without interfaces</Typography>      
    </Stack>
  )
}

export default Services