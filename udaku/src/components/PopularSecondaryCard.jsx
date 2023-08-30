import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PopularSecondaryCard = ({dest, image, title, date}) => {
  return (
    <Link style={{textDecoration: 'none'}} to={dest}>
    <Card variant='outlined' sx={{maxWidth: 500, height:'360px', border: 'none'}}>
    <CardActionArea sx={{
      height: '100%',
    }}>
      <CardMedia
        component="img"
        height="200px"
        src={image}
        alt="green iguana"
      />
      <CardContent sx={{
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'space-between',
      }}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 800, fontSize: '1.25rem', paddingTop: "10px",}}>
          {title}
        </Typography>
        <Typography gutterBottom sx={{
            fontSize: '12px',
            fontFamily: `'Noto Sans Jp, sans-serif'`,
            fontWeight: 400,
            color:'#8e8e8e',
            overflow: 'hidden',
            overflowWrap: 'anywhere'
           }}>{
            date
           }
           </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </Link>
  )
}

export default PopularSecondaryCard