import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'
import { Link } from 'react-router-dom'

const SecondaryCard = ({image, title, dest, date, alt}) => {
  return (
    <Link to={dest} style={{textDecoration: 'none'}}>
    <Card raised sx={{maxWidth: 500, height:'400px'}}>
    <CardActionArea sx={{
      height: '100%',
      position: 'relative',     
    }}>
      <CardMedia
        component="img"
        height="200px"
        src={image}
        alt={alt}
      />
      <CardContent sx={{
        height: '200px'
      }}>
        <Chip label="Trending" sx={{
          backgroundColor: 'red',
          color: 'white',
        }} />
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 800, color: '#004db3', fontFamily: 'Vollkorn', fontSize: '1.25rem', paddingTop: "10px", paddingX: "7px"}}>
          {title}
        </Typography>
        <Typography sx={{
            fontSize: '14px',
            position: 'absolute',
            bottom: '15px',
            paddingX: {xs: '2px', md: '7px'},
            fontFamily: `'Noto Sans Jp, sans-serif'`,
            fontWeight: 600,
            overflow: 'hidden',
            color: '#795548',
            overflowWrap: 'anywhere'
           }}>{dayjs(date).format('YYYY-MM-DD')}
           </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </Link>
  )
}

export default SecondaryCard