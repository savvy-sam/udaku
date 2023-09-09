import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { client } from '../client'
import SideCard from '../components/SideCard'

const PopularHome = () => {
  const popularQuery = `
  *[_type=="post" && 'popular' in tags][0...10]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt
  } | order(publishedAt desc)`;

   const {data, isLoading, isError, error} =useQuery({
      queryKey: ['popularPosts'],
      queryFn: ()=>client.fetch(popularQuery)});
  
    if(isLoading) return(<div>loading...</div>)
  
    if(isError) {
      console.log(error)
      return(<div>error...</div>)
    }

  return (
    <Box>
        <Stack direction='column'>
            {
               data?.map((item, index) =>(
                < SideCard key={index} 
                    dest={'/post/'+ item.slug.current}
                    img={item.mainImage.asset.url} 
                    title={item.title} 
                 />
               ))
            }
        </Stack>
    </Box>
  )
}

export default PopularHome