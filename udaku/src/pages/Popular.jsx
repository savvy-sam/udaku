import React from 'react'
import SideCard3 from '../components/SideCard3'
import { Box, Stack } from '@mui/material'
import PopularSecondaryCard from '../components/PopularSecondaryCard'

const Popular = () => {
  return (
    <Box>
        <Stack direction='column'>
            < PopularSecondaryCard/>
            < SideCard3 />
            < SideCard3 />
            < SideCard3 />
            < SideCard3 />
            < SideCard3 />
        </Stack>
    </Box>
  )
}

export default Popular