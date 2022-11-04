import { Box, Typography } from '@mui/material'
import React from 'react'

const AuthServer = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h2" gutterBottom>
        Auth Server
      </Typography>

      <Typography variant="body1" gutterBottom>
        Patika.Framework provides authentication and authorization with <em>username-password</em> combination, several social accounts (<em>google, facebook, apple</em>) and <em>okta</em>.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
      In this document we will explaine our code for this abilities.
      </Typography>

    </Box >
  )
}

export default AuthServer