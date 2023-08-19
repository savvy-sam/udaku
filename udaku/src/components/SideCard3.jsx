import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../assets/images/image_1.jpeg'

const SideCard3 = () => {
  return (
    <Card variant='outlined' sx={{ maxWidth: '100%',
        border: 'none' }}>
    <CardActionArea >
    <CardContent sx={{
      display: 'flex',
      flexDirection: 'row'
         }}>
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
        <Box 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
        <Typography gutterBottom variant="body" component="div" sx={{fontWeight: 500, fontSize: 16, fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`}}>
          This is the title of this article and it is a little more descriptive
        </Typography>
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: 500, fontSize: 16, fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`}}>
            August, 13 2024
        </Typography>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default SideCard3