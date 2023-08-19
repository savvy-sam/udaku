import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import SideCard from '../components/SideCard2'
import SideCard2 from '../components/SideCard2'
import Popular from './Popular'

const Celebrities = () => {
  return (
  <Container maxWidth={'lg'}
  sx={{
    display: 'flex',
    flexDirection: 'row',
    gap: '20px'
  }}>
  <Box sx={{
  }} flex={2.5}>
    <Stack direction={'column'} spacing={1}>
      <SideCard2 />
      <SideCard2 />
      <SideCard2 />
      <SideCard2 />
      <SideCard2 />
      <SideCard2 />
  </Stack>
  </Box>
  <Box flex={1}
  sx={{
    padding: '7px',
    display: {xs: 'none', sm:'none', md: 'none',
    lg: 'block'},
    flexGrow: 1
  }}>
    <h3>POPULAR POSTS</h3>
    < Popular />
  </Box>
  </Container>
  )
}

export default Celebrities