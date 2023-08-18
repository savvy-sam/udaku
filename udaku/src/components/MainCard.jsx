import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../assets/images/image_1.jpeg'
import Image2 from '../assets/images/homePhoto.jpg'

const MainCard = () => {
  return (
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
        image={Image1}
        alt="green iguana"
      />
      <CardContent sx={{
        height: '220px'
      }}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 800, paddingX: '7px', paddingBottom: '7px'}}>
          This is the title of this article
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{paddingX: '7px'}}>
        Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.
        </Typography>
        <Typography sx={{
            fontSize: '12px',
            paddingX: '7px',
            paddingTop: '15px',
            fontFamily: `'Noto Sans Jp, sans-serif'`,
            fontWeight: 400,
            color:'black',
            overflow: 'hidden',
            position: 'absolute',
            bottom: '15px',
            overflowWrap: 'anywhere'
           }}>27 AUGUST 2023 
           </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default MainCard