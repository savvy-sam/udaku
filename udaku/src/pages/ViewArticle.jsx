import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { client } from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import {PortableText} from '@portabletext/react'
import { SampleImageComponent } from '../components/SampleImageComponent'

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

  console.log(data[0].body)

  if(!isLoading && data.length<1) {
    return (
      <div>
        <p> Page Not Found</p>
      </div>
    )
  }

  return (
    <Layout>
      <>
      <Box>
        <article>
          <header>
        <Box>
          <Typography variant='h3' sx={{
            padding: '20px', fontFamily: 'Vollkorn', 
            fontSize: {
              sm: '12px',
              md: '14px',
              lg: '24px',
            },
          }}>{data[0]?.title}</Typography>
        </Box>
        <Box sx={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: "center",
          mixBlendMode: 'darken'
        }}>
        <Box
            component="img"
            sx={{
              width: {xs: '100%', md: '80%'},
              objectFit: 'cover',
              maxHeight: { xs: 400, lg: 400 },
              maxWidth: { xs: 300, lg: 700 },
            }}
            alt={data[0]?.title}
            src={data[0]?.mainImage.asset.url}
          />
        </Box>
        <Box sx={{paddingY: 1, paddingX: '10px', display: 'flex', justifyContent: 'start', flexDirection: 'row', gap: 2 }}>
            <img style={{height: 30, width: 30, borderRadius: '9999px'}} src={urlFor(data[0].authorImage).url()} alt={data[0]?.title} />
            <Typography variant='body' sx={{fontSize: '1.154rem', fontWeight: 500, fontFamily: 'cursive'}} >{data[0]?.name}</Typography>
        </Box>
        </header>
        <Box sx={{
          padding: '10px',
        }}>
            {/* < BlockContent blocks={data[0]?.body} projectId={'msx9w6j2'} dataset={'production'}/> */}
            <PortableText
            value={data[0]?.body}
            components={{
              types: {
                image: SampleImageComponent,
              },
            }}
          />
        </Box>
        </article>
      </Box>
      </>
    </Layout>
  )
}

export default ViewArticle