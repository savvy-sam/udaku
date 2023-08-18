import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../assets/images/image_1.jpeg'
import Image2 from '../assets/images/homePhoto.jpg'

const SecondaryCard = () => {
  return (
    <Card raised sx={{maxWidth: 500, height:'400px'}}>
    <CardActionArea sx={{
      height: '100%',
      position: 'relative',     
    }}>
      <CardMedia
        component="img"
        height="200px"
        image={Image1}
        alt="green iguana"
      />
      <CardContent sx={{
        height: '200px'
      }}>
        <Chip label="Trending" sx={{
          backgroundColor: 'red',
          color: 'white',
        }} />
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 800, fontSize: '1.25rem', paddingTop: "10px", paddingX: "7px"}}>
          This is the title of this article. This is the title of this article
        </Typography>
        <Typography sx={{
            fontSize: '12px',
            position: 'absolute',
            bottom: '15px',
            paddingX: '7px',
            fontFamily: `'Noto Sans Jp, sans-serif'`,
            fontWeight: 400,
            color:'black',
            overflow: 'hidden',
            overflowWrap: 'anywhere'
           }}>27 AUGUST 2023 
           </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default SecondaryCard