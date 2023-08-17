import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../assets/images/image_1.jpeg'

const SideCard = () => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
    <CardActionArea sx={{
      display: 'flex',
      flexDirection: 'row'
    }}>
    <CardContent>
        <Typography gutterBottom variant="body" component="div" sx={{fontWeight: 500, fontSize: 16, fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`}}>
          This is the title of this article and it is a little more descriptive
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="100"
        image={Image1}
        alt="green iguana"
        sx={{
          padding: '10px',
          borderRadius: '10%'
        }}
      />
    </CardActionArea>
    <CardActions>
    </CardActions>
  </Card>
  )
}

export default SideCard