import { Box, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import MainCard from '../components/MainCard'
import SideCard from '../components/SideCard'

const Home = () => {
  return (
   <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    padding: '15px'
   }}>
      <Box sx={{marginBottom: 3}}>
          <MainCard />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: "30px",
      }}>
        <Box flex={2}>
          <h3>LATEST</h3>
          < hr />
          <Grid container spacing={2}>
          <Grid item xs={6}>
            <MainCard />
          </Grid>
          <Grid item xs={6}>
            <MainCard />
          </Grid>
          <Grid item xs={6}>
            <MainCard />
          </Grid>
          <Grid item xs={6}>
              <MainCard />
          </Grid>
          </Grid>
        </Box>
        <Box flex={1}>
          <h4>POPULAR POSTS</h4>
          <Stack spacing={2}>
            <SideCard />
            <SideCard />
            <SideCard />
          </Stack>
        </Box>
      </Box>
   </Box>
  )
}

export default Home