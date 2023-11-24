import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar"
import { SideBar } from "../components/SideBar"



export const ProyectLayout = ({children}) => {
  return (
    <>
    
        <Box sx={{display:'flex'}} >

             <SideBar/>
        <NavBar/>
            {/* <Hero/> */}

        </Box>
            <Box component='main'  sx={{flexGrow: 1, height:'100%' }}>
                {children}
            </Box>



    
    </>
  )
}
