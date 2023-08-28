import { Box, Card, CardActionArea,CardContent, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../assets/images/image_1.jpeg'

const SideCard2 = () => {
  return (
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
        image={Image1}
        alt="green iguana"
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
            This is the title of this article and it is a little more descriptive
            </h3>
            <Typography gutterBottom variant="body" component="div" sx={{fontWeight: 500, fontSize: 14, fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`}}>
            This is the title of this article and it is a little more descriptive. this title should nto be very long so that it does not overflow
            </Typography>
            <Typography paddingY={3}>16TH AUGUST 2023</Typography>
      </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default SideCard2