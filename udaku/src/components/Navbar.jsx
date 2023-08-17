import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Battery4BarRoundedIcon from '@mui/icons-material/Battery4BarRounded';
import { IconButton, Menu, MenuItem, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ModeNightSharpIcon from '@mui/icons-material/ModeNightSharp';



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
    justifyContent: 'space-between',
    paddingX: "5px",
    width: '100%'
   }}>
      <Box sx={{
        display: {xs: 'block', sm: 'none'}
      }}>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenNavMenu}
            sx={{ mr: 2 }}
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
             open={Boolean(anchorElNav)}
             onClose={handleCloseNavMenu}
         > 
             {pages.map((item, index)=>(
                 <MenuItem key={index}
                  onClick={handleCloseNavMenu}>
                  <Link to={item.path} style={{
                          textDecoration: 'none',
                          fontFamily: '"Noto Sans JP", Macan, Helvetica, sans-serif',
                          fontWeight: 500,
                          fontSize: '17px',
                          color: 'black',}}>
                            {item.title}
                  </Link>
                </MenuItem>
            ))}
        </Menu>
      </Box>
      <Box sx={{display: {xs: 'none', sm: 'flex'}, gap: `24px`, textDecoration: 'none', fontFamily: "Noto Sans JP, sans-serif"}}>
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
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: "5px",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: "0.5px",
          alignItems: "center",
          justifyContent: 'center',
        }}>
            < ModeNightSharpIcon />
            <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
        </Box>
        <FacebookRoundedIcon/>
        < CallRoundedIcon/>
        < Battery4BarRoundedIcon/>
      </Box>
     
   </Box>
  )
}

export default Navbar