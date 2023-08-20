import React from 'react'
import SideCard3 from '../components/SideCard3'
import { Box, Stack, Typography } from '@mui/material'
import PopularSecondaryCard from '../components/PopularSecondaryCard'

const Popular = () => {
  return (
    <Box>
        <Typography gutterBottom variant="body" component="div" sx={{fontWeight: 600, wordWrap: 'break-word', fontSize: 14,  padding: '10px', lineHeight:'1.4em', fontFamily: `"Noto Sans JP", "Roboto", "sans-serif"`}}>
          POPULAR POSTS
        </Typography>
        <Stack direction='column'>
            < PopularSecondaryCard
            dest={'/post'}
            image={'https://images.unsplash.com/photo-1679679008383-6f778fe07828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80'}
            title={'Man City Lose Amid Kevin De Bryne Injury'}
            date={"16TH AUGUST 2024"}/>
            < SideCard3 dest={'/post'} 
                image={'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} 
                title={"This is the Title of this page amidst crypto crash"} 
                date={'16TH AUGUST 2022'}/>
             < SideCard3 dest={'/post'} 
                image={'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} 
                title={"This is the Title of this page"} 
                date={'16TH AUGUST 2022'}/>
             < SideCard3 dest={'/post'} 
                image={'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} 
                title={"This is the Title of this page"} 
                date={'16TH AUGUST 2022'}/>
             < SideCard3 dest={'/post'} 
                image={'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} 
                title={"This is the Title of this page"} 
                date={'16TH AUGUST 2022'}/>
             < SideCard3 dest={'/post'} 
                image={'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'} 
                title={"This is the Title of this page"} 
                date={'16TH AUGUST 2022'}/>
        </Stack>
    </Box>
  )
}

export default Popular