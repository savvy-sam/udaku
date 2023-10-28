import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

const SideCard3 = ({dest, image, title, date}) => {
  return (
    <Link to={dest} style={{textDecoration: 'none'}}>
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
            src={image}
            alt="green iguana"
            sx={{
            padding: '10px',
            borderRadius: '10%',
            maxWidth: '50%'
            }}
        />
        <Box 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
        <Typography gutterBottom variant="body" component="div" sx={{fontWeight: 600, wordWrap: 'break-word', fontSize: 14,  padding: '10px', lineHeight:'1.4em', fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`}}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h4" component="div" sx={{fontWeight: 700, color: '#8e8e8e', fontSize: 12, fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`}}>
        {dayjs(date).format('YYYY-MM-DD')}
        </Typography>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Link>
  )
}

export default SideCard3