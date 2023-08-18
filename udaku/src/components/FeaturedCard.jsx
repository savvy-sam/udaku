import { Box, Chip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import Image1 from '../assets/images/image_1.jpeg'
import Image2 from '../assets/images/homePhoto.jpg'

const FeaturedCard = () => {
  return (
    <Box sx={{
      maxWidth: 900,
      height: 400,
      borderRadius: '5px',
      postion:'relative'
    }}>
      <Link>
        <Box sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
           component='img'
           src={Image1}
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

           }}> This is the Day that the lord has made</Typography>
           <Typography sx={{
            fontSize: '12px',
            fontFamily: `'Noto Sans Jp, sans-serif'`,
            fontWeight: 400,
            color:'white',
            overflow: 'hidden',
            overflowWrap: 'anywhere'
           }}>27 AUGUST 2023 </Typography>
           </Box>

      </Link>
    </Box>
  )
}

export default FeaturedCard