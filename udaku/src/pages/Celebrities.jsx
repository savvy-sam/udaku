import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import SideCard2 from '../components/SideCard2'
import Popular from './Popular'
import { useQuery } from 'react-query'
import { client } from '../client'
import Layout from '../components/Layout'

const Celebrities = () => {

  const celebritiesQuerry = `
  *[_type=="post" && 'Celebrities' in categories[]->title][0...10]{
    title,
    summary,
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
    queryKey: ['celebritiesPosts'],
    queryFn: ()=>client.fetch(celebritiesQuerry)});

  if(isLoading) return(<div>loading...</div>)

  if(isError) {
    console.log(error)
    return(<div>error...</div>)
  }

  return (
  <Layout>
  <Box sx={{
  }} flex={2.5}>
    <Stack direction={'column'} spacing={1}>
      {
        data.map((post, index)=>(
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

export default Celebrities