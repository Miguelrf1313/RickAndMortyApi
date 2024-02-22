import { Box, Grid } from "@mui/material"
import  NavBar2 from "../../components/Componentes pricipales/NavBar2"
import { SideBar } from "../../components/Componentes pricipales/SideBar"



export const ProyectLayout = ({children}) => {
  return (
    <>
    
        <Grid sx={{display:'flex'}} >

             {/* <SideBar/> */}
        <NavBar2/>
            {/* <Hero/> */}

        </Grid>
            <Grid component='main'  sx={{flexGrow: 1, height:'100%' }}>
                {children}
            </Grid>



    
    </>
  )
}
