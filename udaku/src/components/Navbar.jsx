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
    paddingX: "45px",
    width: '100%',
    position: 'sticky',
    zIndex: 999,
    top: 0,
    backgroundColor: '#FAFAFA',
    transition: '0.5s all ease',
    height: '50px'
   }}>
      <Box  flex={4} sx={{
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
      <Box flex={4} sx={{display: {xs: 'none', sm: 'flex'}, gap: `24px`, textDecoration: 'none', fontFamily: "Noto Sans JP, sans-serif"}}>
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
        gap: "5px",
        alignItems: "center",
      }}>
        <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
        <FacebookRoundedIcon/>
      </Box>
   </Box>
  )
}

export default Navbar