import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box} from '@mui/material'
import React from 'react'

const Footer = () => {

  const {palette} = useTheme();

  const FooterBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    gap: '15px',
    padding: '10px',
  }));


  return (
    <Box sx={{
      display: "flex",
      flexDirection: {xs: "column", sm: 'row'},
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: palette.primary.main,
      paddingX: '15px',
    }}><FooterBox>
        <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
        </FooterBox>
          <FooterBox>
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </FooterBox>
          <FooterBox>
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
          </FooterBox>
          <FooterBox>
          <h2>Support</h2>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
          </FooterBox> 
    </Box>
  )
}

export default Footer