import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { client } from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const ViewArticle = () => {

  const {id}= useParams();

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
      return builder.image(source)
  }

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
    "authorImage": author->image,
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
          padding: '10px'
        }}>
        <Box
            component="img"
            sx={{
              maxHeight: { xs: 400, lg: 400 },
              maxWidth: { xs: 300, lg: 500 },
            }}
            alt={data[0].title}
            src={data[0].mainImage.asset.url}
          />
        </Box>
        <Box sx={{paddingY: 1, paddingX: '10px', display: 'flex', justifyContent: 'start', flexDirection: 'row', gap: 2 }}>
            <img style={{height: 30, width: 30, borderRadius: '9999px'}} src={urlFor(data[0].authorImage).url()} alt={data[0].title} />
            <Typography variant='body' sx={{fontSize: '1.154rem', fontWeight: 500, fontFamily: 'cursive'}} >{data[0].name}</Typography>
        </Box>
        </header>
        <Box sx={{
          padding: '10px',
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