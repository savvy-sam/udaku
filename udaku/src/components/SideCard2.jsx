import { Box, Card, CardActionArea,CardContent, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SideCard2 = ({dest, summary, date, title, image}) => {
  return (
    <Link style={{textDecoration: 'none'}} to={dest}>
    <Card sx={{ maxWidth: '900px' }}>
    <CardActionArea >
    <CardContent sx={{
      display: 'flex',
      height: '100%',
      gap: '20px',
      flexDirection: {xs: 'column', sm: 'row'},
    }}>
        <Box sx={{
            flex: 1
        }}>
        <CardMedia
        component="img"
        src={image}
        alt="post image"
        sx={{
          paddingX: '10px',
          height: {xs: '200px', sm: '200px'},
        }}
      />
      </Box>
      <Box sx={{
        flex: 2,
        display: 'flex',
        paddingTop: '5px',
        flexDirection: 'column',
        justifyContent: 'space-between',

      }}>
        <Chip label={"Trending"} sx={{
                backgroundColor: 'red',
                color: 'white',
                width: '100px',
                marginBottom: '7px',
            }} />
            <h3  variant="h3" sx={{fontWeight: 500, fontSize: 16, fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`}}>
              {title}
            </h3>
            <Typography gutterBottom variant="body" component="div" sx={{fontWeight: 500, fontSize: 14, fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`}}>
              {summary}
            </Typography>
            <Typography paddingY={3}>{date}</Typography>
      </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Link>
  )
}

export default SideCard2