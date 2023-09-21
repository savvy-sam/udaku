import { Box, CircularProgress, Container, Skeleton, Stack } from '@mui/material'
import React from 'react'
import SideCard2 from '../components/SideCard2'
import { useQuery } from 'react-query'
import { client } from '../client'
import Layout from '../components/Layout'

const Economy = () => {

  const economyQuery = `
  *[_type=="post" && 'Economy' in categories[]->title][0...10]{
    title,
    summary,
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

  const {data, isError, error} =useQuery({
    queryKey: ['economyPosts'],
    queryFn: ()=>client.fetch(economyQuery)});

  if(isError) {
    console.log(error)
    return(<div>error...</div>)
  }

  return (
  <Layout>
  <Box
  flex={2.5}>
    <Stack direction={'column'} spacing={1}>
      {
        data?.map((post, index)=>(
            < SideCard2 key={index}
            dest={'/post/'+ post.slug.current}
            image={post.mainImage.asset.url}
            title={post.title}
            summary={post.summary}
            date={post.publishedAt}/>
        ))
      }
    </Stack>
  </Box>
  </Layout>
  )
}

export default Economy