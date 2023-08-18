import { Box, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import MainCard from '../components/MainCard'
import SideCard from '../components/SideCard'
import FeaturedCard from '../components/FeaturedCard'
import { useTheme } from '@emotion/react'
import SecondaryCard from '../components/SecondaryCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {

  const {palette}= useTheme();

  return (
   <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    paddingX: '15px',
    paddingBottom: '10px'
   }}>
      <Box sx={{marginBottom: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                }}>
            <Container sx={{
              paddingX: '30px',
              backgroundColor: 'paper'
            }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                <Carousel
                infiniteLoop
                stopOnHover
                showStatus={false}
                showIndicators
                showArrows
                autoFocus
                showThumbs={false}
                useKeyboardArrows
                autoPlay>
                  <FeaturedCard />
                  <FeaturedCard />
                  <FeaturedCard />
                  <FeaturedCard />
                </Carousel>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SecondaryCard />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SecondaryCard />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SecondaryCard />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <SecondaryCard />
                </Grid>
                </Grid>
            </Container>
      </Box>
      <Container sx={{
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        gap: "30px",
      }}>
        <Box flex={2}>
          <h3>LATEST</h3>
          < hr />
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MainCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MainCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MainCard />
          </Grid>
          <Grid item xs={12} sm={6}>
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
      </Container>
   </Box>
  )
}

export default Home