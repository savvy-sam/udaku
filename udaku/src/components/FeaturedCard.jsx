import { Box, Chip, Typography } from '@mui/material'
import React from 'react'

const FeaturedCard = ({ image, title, alt, date }) => {
  return (
    <Box sx={{
      maxWidth: 900,
      height: 400,
      borderRadius: '5px',
      postion:'relative'
    }}>
        <Box sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
           component='img'
           src={image}
           alt={alt}/>
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
            fontWeight: 700,
           }} label="Trending" color="success" />
           <Box sx={{
            bgcolor: '#212121',
            py: 2,
            px: 1,
            borderRadius: '20px',
           }}>
           <Typography variant='h3' sx={{
            fontSize: '1.75rem',
            fontFamily: `'Noto Sans JP, sans-serif'`,
            fontWeight: 900,
            color:'#ffffff',
            textShadow: '1px 1px 2px pink',
            overflowWrap: 'anywhere'

           }}>{title}</Typography>
           </Box>
           <Typography sx={{
            fontSize: '12px',
            fontFamily: `'Noto Sans Jp, sans-serif'`,
            fontWeight: 400,
            overflow: 'hidden',
            overflowWrap: 'anywhere'
           }}>{date}</Typography>
           </Box>
    </Box>
  )
}

export default FeaturedCard