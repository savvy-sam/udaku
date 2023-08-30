import React from 'react'
import SideCard3 from '../components/SideCard3'
import { Box, Stack, Typography } from '@mui/material'
import PopularSecondaryCard from '../components/PopularSecondaryCard'
import { useQuery } from 'react-query'
import { client } from '../client'

const Popular = () => {

const popularQuerry = `
  *[_type=="post" && 'popular' in tags][0...10]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }
  `
   const {data, isLoading, isError, error} =useQuery({
      queryKey: ['popularPosts'],
      queryFn: ()=>client.fetch(popularQuerry)});
  
    if(isLoading) return(<div>loading...</div>)
  
    if(isError) {
      console.log(error)
      return(<div>error...</div>)
    }

   const firstElement = data[0];
   const filteredArray = data.slice(1) 


  return (
    <Box>
        <Typography gutterBottom variant="body" component="div" sx={{fontWeight: 600, wordWrap: 'break-word', fontSize: 14,  padding: '10px', lineHeight:'1.4em', fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`}}>
          POPULAR POSTS
        </Typography>
        <Stack direction='column'>
            < PopularSecondaryCard
            dest={'/post/'+ firstElement.slug.current}
            image={firstElement.mainImage.asset.url}
            title={firstElement.title}
            date={firstElement.publishedAt}/>

            {
               filteredArray.map((item, index) =>(
               < SideCard3 key={index} dest={'/post'} 
                  image={item.mainImage.asset.url} 
                  title={item.title} 
                  date={item.publishedAt}/>
               ))
            }
        </Stack>
    </Box>
  )
}

export default Popular