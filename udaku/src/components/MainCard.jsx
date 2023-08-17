import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../assets/images/image_1.jpeg'

const MainCard = () => {
  return (
    <Card sx={{ maxWidth: 370 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={Image1}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 800}}>
          This is the title of this article
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.Lizards are a widespread group of squamate reptiles, with over 6,000
          species
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    </CardActions>
  </Card>
  )
}

export default MainCard