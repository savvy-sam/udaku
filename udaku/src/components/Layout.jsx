import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Popular from '../pages/Popular'

const Layout = ({children}) => {
  return (
  <Container maxWidth={'lg'}
  sx={{
    display: 'flex',
    flexDirection: {xs: 'column', sm: 'row'},
    gap: '20px'
  }}>
  <Box sx={{
  }} flex={2.5}>
    <Stack direction={'column'} spacing={1}>
     {
        children
     }
  </Stack>
  </Box>
  <Box flex={1}
  sx={{
    padding: '7px',
    display: {xs: 'block', sm:'block', md: 'block',
    lg: 'block'},
    flexGrow: 1
  }}>
    < Popular />
  </Box>
  </Container>
  )
}

export default Layout