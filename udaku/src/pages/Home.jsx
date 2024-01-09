import { Box, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import MainCard from '../components/MainCard'
import FeaturedCard from '../components/FeaturedCard'
import SecondaryCard from '../components/SecondaryCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { client } from '../client'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import PopularHome from './PopularHome'

const Home = () => {

 
  const trendingQuery = `
  *[_type=="post" && 'trending' in tags] | order(publishedAt asc) [0...5] {
    title,
    slug,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`;

  const latestQuery = `*[_type=="post"] | order(publishedAt desc) [0...4] {
    title,
    slug,
    summary,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`;


  const {data: firstData, isLoading: firstIsLoading, isError: firstIsError} =useQuery('trendingPosts',()=>client.fetch(trendingQuery));
  const {data: secondData, isLoading: secondIsLoading, isError: SecondIsError} =useQuery('latestPosts',()=>client.fetch(latestQuery));

  return (
   <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    paddingX: {xs: '5px', sm: '10px', md: "10px" },
    paddingY: {xs: '5px', md: '10px'},
    minHeight: '768px'
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
                showIndicators={false}
                showArrows={false}
                autoFocus
                showThumbs={false}
                swipeable={false}
                useKeyboardArrows
                interval={6000}
                autoPlay
                >

                  {
                    firstData?.map((item, index)=>(
                      <Link to={'/post/'+ item.slug.current} key={index}>
                      <FeaturedCard
                      dest={'/post' + item.slug.current}
                      image={item.mainImage.asset.url}
                      alt={item.mainImage.alt}
                      title={item.title}
                      date={item.publishedAt}/>
                      </Link>
                    ))
                  }
                </Carousel>
                </Grid>
                  {
                    secondData?.map((post)=>(
                      <Grid key={post.slug.current} item xs={12} sm={4}>
                      <SecondaryCard
                        dest={'/post/'+ post.slug.current}
                        image={post.mainImage.asset.url}
                        title={post.title}
                        alt={post.alt}
                        date={post.publishedAt}/>
                      </Grid>
                    ))
                  }
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
            {
              secondData?.map((post)=>(
                <Grid key={post.slug.current} item xs={12} sm={6}>
                  <MainCard
                        dest={'/post/'+ post.slug.current}
                        image={post.mainImage.asset.url}
                        title={post.title}
                        summary={post?.summary?.substring(0,60)+" ..."}
                        alt={post.alt}
                        date={post.publishedAt}/>
                </Grid>
              ))
            }
          </Grid>
        </Box>
        <Box flex={1}>
          <h4>POPULAR POSTS</h4>
          < PopularHome /> 
        </Box>
      </Container>
   </Box>
  )
}

export default Home