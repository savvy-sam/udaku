import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../assets/images/image_1.jpeg'
import Image2 from '../assets/images/homePhoto.jpg'
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
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 800, fontSize: '1.25rem', paddingTop: "10px", paddingX: "7px"}}>
          {title}
        </Typography>
        <Typography sx={{
            fontSize: '12px',
            position: 'absolute',
            bottom: '15px',
            paddingX: '7px',
            fontFamily: `'Noto Sans Jp, sans-serif'`,
            fontWeight: 400,
            overflow: 'hidden',
            overflowWrap: 'anywhere'
           }}>{date}
           </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </Link>
  )
}

export default SecondaryCard