import { Box, Stack } from '@mui/material'
import React from 'react'
import MainCard from '../components/MainCard'

const Home = () => {
  return (
   <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    padding: '15px'
   }}>
      <Box>
          <MainCard />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',

      }}>
        <Box flex={3}>
          <Stack spacing={2}>
            <MainCard />
            <MainCard />
            <MainCard />
          </Stack>
        </Box>
        <Box flex={1}>
          <Stack spacing={2}>
            <MainCard />
            <MainCard />
            <MainCard />
          </Stack>
        </Box>
      </Box>
   </Box>
  )
}

export default Home