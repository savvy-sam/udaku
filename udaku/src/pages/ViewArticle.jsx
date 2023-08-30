import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { client } from '../client'
import BlockContent from '@sanity/block-content-to-react'

const ViewArticle = () => {

  const {id}= useParams();

  const singleQuery = `*[_type=="post" && slug.current =="${id}"]{
    title,
    slug,
    body,
    summary,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    "name": author->name,
  }`

  const {data, isLoading, isError} =useQuery({
    queryKey: ['posts', id],
    queryFn: ()=>client.fetch(singleQuery)});

  if(isLoading) return(<div>loading...</div>)

  if(isError) return(<div>error...</div>)

  return (
    <Layout>
      <>
      <Box>
        <article>
          <header>
        <Box>
          <Typography variant='h3' sx={{
            padding: '20px'
          }}>{data[0]?.title}</Typography>
        </Box>
        <Box sx={{
          padding: '20px'
        }}>
        <Box
            component="img"
            sx={{
              maxHeight: { xs: 466, lg: 600 },
              maxWidth: { xs: 400, lg: 700 },
            }}
            alt={data[0].title}
            src={data[0].mainImage.asset.url}
          />
        </Box>
        </header>
        <Box sx={{
          padding: '20px',
        }}>
            < BlockContent blocks={data[0].body} projectId={'msx9w6j2'} dataset={'production'}/>
        </Box>
        </article>
      </Box>
      </>
    </Layout>
  )
}

export default ViewArticle