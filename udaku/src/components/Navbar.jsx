import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Switch, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toggle from 'react-toggle'
import "react-toggle/style.css" 
import twitterImage from '../assets/images/twitter.png'
import facebookImage from '../assets/images/facebook.png'
import instagramImage from '../assets/images/instagram.png'

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
    path: "/gossip",
    title: "Gossip",
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

const Navbar = ({mode,setMode}) => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
   <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingX: {
      xs: '10px',
      sm: "20px",
      md: '30px',
      lg: '40px',
    },
    width: '100%',
    position: 'sticky',
    zIndex: 999,
    top: 0,
    backgroundColor: '#FAFAFA',
    transition: '0.5s all ease',
    height: '50px'
   }}>
      <Box  flex={1} sx={{
        display: {xs: 'block', sm: 'none'},
        width: '50%',
      }}>
      <IconButton
            size="large"
            edge="start"
            sx={{
              color: '#301934',
              mr: 2
            }}
            aria-label="open drawer"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
      </IconButton>
      <Menu
             anchorEl={anchorElNav}
             id="menu-appbar"
             anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
             }}
             keepMounted
             transformOrigin={{
                 vertical: 'top',
                 horizontal: 'left',
             }}
             sx={{
              paddingX: '15px',
             }}
             open={Boolean(anchorElNav)}
             onClose={handleCloseNavMenu}
         > 
             {pages.map((item, index)=>(
                 <MenuItem key={index}
                  onClick={handleCloseNavMenu}>
                  <Link to={item.path} style={{
                          textDecoration: 'none',
                          fontFamily: 'Macan, "Noto Sans JP", Macan, Helvetica, sans-serif',
                          fontWeight: 600,
                          fontSize: '17px',
                          color: '#687385',}}>
                            {item.title}
                  </Link>
                </MenuItem>
            ))}
        </Menu>
      </Box>
      <Box flex={3.5} sx={{display: {xs: 'none', sm: 'flex'}, gap: `24px`, textDecoration: 'none', fontFamily: "Noto Sans JP, sans-serif"}}>
          {pages.map((item, index)=>(
              <Link style={{
                textDecoration: 'none',
                fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`,
                fontWeight: 600,
                fontSize: '14px',
                color: '#687385',
              }} key={index} to={item.path}>
                {item.title}
              </Link>
            ))
          }
      </Box>
      <Box flex={1} sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
      }}>
        <Box sx={{
          flex: {xs: 2, sm: 1}
        }}>
            <Box sx={{height: '24px'}}>
              <Toggle
                checked={mode==="dark"}
                onChange={e=>setMode(mode === "light" ? "dark" : "light")}
                icons={{ checked: "🌙", unchecked: "🔆" }}
                aria-label="Dark mode toggle"
              />
          </Box>
        </Box>
        <Box flex={3} sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '10px',
        }}>
              <Box
              component="img"
              sx={{
                height: 24,
                width: 24,
              }}
              alt="t"
              src={twitterImage}
            />
             <Box
              component="img"
              sx={{
                height: 24,
                width: 24,
              }}
              alt="t"
              src={facebookImage}
            />
             <Box
              component="img"
              sx={{
                height: 24,
                width: 24,
              }}
              alt="i"
              src={instagramImage}
            />
        </Box>
      </Box>
   </Box>
  )
}

export default Navbar