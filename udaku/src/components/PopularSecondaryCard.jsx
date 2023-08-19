import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../assets/images/image_1.jpeg'
import Image2 from '../assets/images/homePhoto.jpg'

const PopularSecondaryCard = () => {
  return (
    <Card variant='outlined' sx={{maxWidth: 500, height:'360px', border: 'none'}}>
    <CardActionArea sx={{
      height: '100%',
    }}>
      <CardMedia
        component="img"
        height="200px"
        image={Image1}
        alt="green iguana"
      />
      <CardContent sx={{
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'space-between',
      }}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 800, fontSize: '1.25rem', paddingTop: "10px",}}>
          This is the title of this article. This is the title of this article
        </Typography>
        <Typography sx={{
            fontSize: '12px',
            position: 'absolute',
            bottom: '15px',
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

export default PopularSecondaryCard