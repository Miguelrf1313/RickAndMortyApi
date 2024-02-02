import { Box, Grid } from "@mui/material"
import { NavBar } from "../../components/Componentes pricipales/NavBar"
import { SideBar } from "../../components/Componentes pricipales/SideBar"



export const ProyectLayout = ({children}) => {
  return (
    <>
    
        <Grid sx={{display:'flex'}} >

             {/* <SideBar/> */}
        <NavBar/>
            {/* <Hero/> */}

        </Grid>
            <Grid component='main'  sx={{flexGrow: 1, height:'100%' }}>
                {children}
            </Grid>



    
    </>
  )
}
