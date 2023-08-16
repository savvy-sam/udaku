import React from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const pages = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/celebrities",
    title: "Celebrities",
  },
  {
    path: "/contactus",
    title: "Contact Us",
  },
  {
    path: "/economy",
    title: "Economy",
  },
  {
    path: "/gossip",
    title: "Gossip",
  },
  {
    path: "/health",
    title: "Health"
  },
  {
    path: "/music",
    title: "Music",
  },
  {
    path: "/sports",
    title: "Sports",
  },
]

const Navbar = () => {

  return (
   <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   }}>
      <Box sx={{display: 'flex', padding: '15px', gap: `24px`, textDecoration: 'none', fontFamily: "Noto Sans JP, sans-serif"}}>
          {pages.map((item, index)=>(
              <Link style={{
                textDecoration: 'none',
                fontFamily: '"Noto Sans JP", Macan, Helvetica, sans-serif',
                fontWeight: 500,
                fontSize: '17px',
                color: 'black',
              }} key={index} to={item.path}>
                {item.title}
              </Link>
            ))
          }
      </Box>
      <Box>

      </Box>
     
   </Box>
  )
}

export default Navbar