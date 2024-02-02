import { Box } from '@mui/material'
import React from 'react'
import { SideBar } from '../components/SideBar'

export const CardsLauout = ({children}) => {
  return (
    <>
    
        <Box sx={{display:'flex'}} >

        {/* <NavBar/> */}

        </Box>


            <Box component='main'  sx={{flexGrow: 1, height:'100%' }}>
                {children}
            </Box>
</>
  )
}
