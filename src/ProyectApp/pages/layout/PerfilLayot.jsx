import { Box, Grid } from "@mui/material"
// import { NavBar } from "../../components/Componentes pricipales/NavBar"
import { SideBar } from "../../components/Componentes pricipales/SideBar"



export const PerfilLayot = ({children}) => {
  return (
    <>
    
        <Grid sx={{display:'flex'}} >

     

        </Grid>
            <Grid component='main'  sx={{flexGrow: 1, display:'flex', alignItems:'center', flexDirection:'column',  height:'100%' }}>
                {children}
            </Grid>



    
    </>
  )
}
