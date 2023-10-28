import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SideCard = ({dest, title, img}) => {
  return (
    <Link style={{textDecoration: 'none'}} to={dest}>
    <Card sx={{ maxWidth: '100%' }}>
    <CardActionArea sx={{
      display: 'flex',
      flexDirection: 'row'
    }}>
    <CardContent>
        <Typography gutterBottom variant="body" component="div" sx={{fontWeight: 600, color: '#004db3', fontSize: 16, fontFamily: `"Vollkorn", "Roboto", "sans-serif"`}}>
          {title}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="100"
        src={img}
        alt="green iguana"
        sx={{
          padding: '10px',
          borderRadius: '10%',
          maxWidth:'50%'
        }}
      />
    </CardActionArea>
    <CardActions>
    </CardActions>
  </Card>
  </Link>
  )
}

export default SideCard