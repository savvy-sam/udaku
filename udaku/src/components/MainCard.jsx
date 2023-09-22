import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'
import { Link } from 'react-router-dom'

const MainCard = ({title, dest, image, summary, date, alt}) => {
  return (
    <Link to={dest} style={{textDecoration: 'none'}}>
    <Card sx={{maxWidth: 700,
      height: 400,
    }}>
    <CardActionArea sx={{
      height: '100%',
      position: 'relative', 
    }}
    >
      <CardMedia
        component="img"
        height="180px"
        src={image}
        alt={alt}
      />
      <CardContent sx={{
        height: '220px'
      }}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 800, color: '#004db3', fontFamily: 'Vollkorn', paddingX: '7px', paddingBottom: '7px'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{paddingX: '7px', fontWeight: 600, fontSize: '17', fontFamily: 'Ubuntu', lineHeight: 1.7}}>
        {summary}
        </Typography>
        <Typography sx={{
            fontSize: '12px',
            paddingX: '7px',
            paddingTop: '15px',
            fontFamily: `'Noto Sans Jp, sans-serif'`,
            fontWeight: 500,
            color:'black',
            overflow: 'hidden',
            position: 'absolute',
            bottom: '15px',
            overflowWrap: 'anywhere'
           }}>{dayjs(date).format('YYYY-MM-DD')}
           </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </Link>
  )
}

export default MainCard