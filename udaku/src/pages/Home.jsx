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
              paddingX: {
                xs: '5px',
                sm: '15',
                md: '20px',
                lg: '30px',
              },
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
                  <FeaturedCard
                  dest={'/post'}
                  image={'https://images.unsplash.com/photo-1601775339819-1721f2d853c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=847&q=80'}
                  title={"This is the day that the lord has made"}
                  date={'17TH AUGUST 2023'}/>
                  <FeaturedCard
                  dest={'/post'}
                  image={'https://images.unsplash.com/photo-1578776704351-d900ace79a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=404&q=80'}
                  title={"This is the day that the lord has made"}
                  date={'17TH AUGUST 2023'}/>
                  
                  <FeaturedCard
                  dest={'/post'}
                  image={'https://images.unsplash.com/photo-1591129963877-355ab1c66e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNlbGVicml0aWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'}
                  title={"This is the day that the lord has made"}
                  date={'17TH AUGUST 2023'}/>
                  <FeaturedCard
                  dest={'/post'}
                  image={'https://images.unsplash.com/photo-1633256394607-caa776f871b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}
                  title={"This is the day that the lord has made"}
                  date={'17TH AUGUST 2023'}/>
                </Carousel>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SecondaryCard
                  dest={'/post'}
                  image={'https://images.unsplash.com/photo-1601775339819-1721f2d853c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=847&q=80'}
                  title={"This is the day that the lord has made"}
                  date={'17TH AUGUST 2023'}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                <SecondaryCard
                  dest={'/post'}
                  image={'https://images.unsplash.com/photo-1578776704351-d900ace79a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=404&q=80'}
                  title={"This is the day that the lord has made"}
                  date={'17TH AUGUST 2023'}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                <SecondaryCard
                  dest={'/post'}
                  image={'https://images.unsplash.com/photo-1591129963877-355ab1c66e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNlbGVicml0aWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'}
                  title={"This is the day that the lord has made"}
                  date={'17TH AUGUST 2023'}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                <SecondaryCard
                  dest={'/post'}
                  image={'https://images.unsplash.com/photo-1633256394607-caa776f871b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}
                  title={"This is the day that the lord has made"}
                  date={'17TH AUGUST 2023'}/>
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