import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const aboutUs=[
  {title: "Advertise With Us", path: "/"},
  {title: "Contact Us", path: "/"},
  {title: "Careers", path: "/"},
  {title: "Privacy Policy", path: "/"},
]

const Footer = () => {

  const {palette} = useTheme();

  const FooterBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '15px',
    padding: '10px',
  }));


  return (
    <Box bgcolor='#0a0a0a' 
    sx={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <hr />
    <Box sx={{
      display: "flex",
      width: {xs: '100%', sm: "80%"},
      justifyContent: 'space-between',
      flexDirection: {xs: "column", sm: 'row'},
      paddingX: '15px',
    }}><FooterBox>
        <Typography component='h2' sx={{color: 'white', alignSelf: 'center'}}>ABOUT US</Typography>
        <hr style={{backgroundColor: 'white', width: '100%'}}/>
        <List  disablePadding dense={true}>
          {
            aboutUs.map((item, index)=>(
              <Link style={{textDecoration: 'none', color:"white"}} key={index} to={item.path}>
              <ListItem>
              <ListItemIcon style={{minWidth: '30px'}}>
                <ArrowForwardIosIcon fontSize='small' color='warning' />
              </ListItemIcon>
              <ListItemText>
                {item.title}
              </ListItemText>
            </ListItem>
            </Link>
            ))
          } 
          </List>
        </FooterBox>
        <FooterBox>
                <Typography component='h2' sx={{color: 'white', alignSelf: 'center'}}>ABOUT US</Typography>
              <hr style={{backgroundColor: 'white', width: '100%'}}/>
              <List  disablePadding dense={true}>
                {
                  aboutUs.map((item, index)=>(
                    <Link style={{textDecoration: 'none', color:"white"}} key={index} to={item.path}>
                    <ListItem>
                    <ListItemIcon style={{minWidth: '30px'}}>
                      <ArrowForwardIosIcon fontSize='small' color='warning' />
                    </ListItemIcon>
                    <ListItemText>
                      {item.title}
                    </ListItemText>
                  </ListItem>
                  </Link>
                  ))
                } 
                </List>
          </FooterBox>
          <FooterBox>
              <Typography component='h2' sx={{color: 'white', alignSelf: 'center'}}>ABOUT US</Typography>
                <hr style={{backgroundColor: 'white', width: '100%'}}/>
                <List  disablePadding dense={true}>
                  {
                    aboutUs.map((item, index)=>(
                      <Link style={{textDecoration: 'none', color:"white"}} key={index} to={item.path}>
                      <ListItem>
                      <ListItemIcon style={{minWidth: '30px'}}>
                        <ArrowForwardIosIcon fontSize='small' color='warning' />
                      </ListItemIcon>
                      <ListItemText>
                        {item.title}
                      </ListItemText>
                    </ListItem>
                    </Link>
                    ))
                  } 
                  </List>
          </FooterBox>
    </Box>
    </Box>
  )
}

export default Footer