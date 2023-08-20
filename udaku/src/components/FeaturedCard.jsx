import { Box, Chip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const FeaturedCard = ({dest, image, title, date }) => {
  return (
    <Box sx={{
      maxWidth: 900,
      height: 400,
      borderRadius: '5px',
      postion:'relative'
    }}>
      <Link to={dest}>
        <Box sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
           component='img'
           src={image}
           alt='homepage'/>
           <></>
           <Box sx={{
            display: 'flex',
            width: '50%',
            flexDirection: 'column',
            gap:'15px',
            position: 'absolute',
            bottom: '25%',
            paddingX: '15px',
            textAlign: 'start',
           }}>
           <Chip sx={{
            width: '100px',
            backgroundColor: 'red',
           }} label="Trending" color="success" />
           <Typography variant='h3' sx={{
            fontSize: '1.75rem',
            fontFamily: `'Noto Sans JP, sans-serif'`,
            fontWeight: 900,
            color:'white',
            overflowWrap: 'anywhere'

           }}>{title}</Typography>
           <Typography sx={{
            fontSize: '12px',
            fontFamily: `'Noto Sans Jp, sans-serif'`,
            fontWeight: 400,
            color:'white',
            overflow: 'hidden',
            overflowWrap: 'anywhere'
           }}>{date}</Typography>
           </Box>
      </Link>
    </Box>
  )
}

export default FeaturedCard