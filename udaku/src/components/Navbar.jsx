import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Switch, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toggle from 'react-toggle'
import "react-toggle/style.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"; // Note the "@" symbol before "fortawesome"
import { useTheme } from '@emotion/react';
import './fonts.css'

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
    path: "/politics",
    title: "Politics",
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

  const {palette}=useTheme();

  const ThemedLink = styled(Link)`
  color: ${palette.mode === 'dark' ? 'white' : 'black'};
  text-decoration: none;
`;

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
    backgroundColor: '#0a0a0a',
    transition: '0.5s all ease',
    height: '60px'
   }}>
      <Box  flex={1} sx={{
        display: {xs: 'block', sm: 'none'},
        width: '50%',
      }}>
      <IconButton
            size="large"
            edge="start"
            sx={{
              color: '#00FFFF',
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
                  <ThemedLink to={item.path} style={{
                          textDecoration: 'none',
                          fontFamily: 'Macan, "Noto Sans JP", Macan, Helvetica, sans-serif',
                          fontWeight: 600,
                          fontSize: '17px',
                         }}>
                            {item.title}
                  </ThemedLink>
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
                color: '#FFFFFF',
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
        <a href="https://www.youtube.com"
          className="youtube social">
        <FontAwesomeIcon  icon={faYoutube} size='1x'/>
        </a>
      <a href="https://www.facebook.com/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://www.twitter.com/Udaku_Gossip" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.instagram.com/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
        </Box>
      </Box>
   </Box>
  )
}

export default Navbar