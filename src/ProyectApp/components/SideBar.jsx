import { Close } from "@mui/icons-material"
import { Box, Drawer, IconButton, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { sideBarClose } from "../../slices/ProyectSlice/ProyectSlice"


export const SideBar = () => {
    const dispatch = useDispatch()
    const closeSideBar = () => { dispatch(sideBarClose())   }
    const {active} = useSelector(state => state.proyect)


    const drawerOn = (event)=> {
     event.view.close.closed = true
console.log(event)
    }
    
    // const drawerClose = (event) => {
    //     //  console.log(event) 
    //     event.view.close.closed = true;
    //     if (event.view.close.closed == false ) dispatch(closeSideBar)
    // }
    



  return (
    
    <Box component='nav' width='240' >
            <Drawer

            // onBlur={drawerClose}
            onFocus={drawerOn}
            variant="temporary"
            open={active == true}
            sx={{
                display: {xs: 'block'}, '& .MuiDrawer-paper': { width:240},  '& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop':{backgroundColor:'#0000', width:240 },  '& .css-gfbwea-MuiModal-root-MuiDrawer-root':{backgroundColor:'#ffff', width:240 }
                         }}>
                
                    
                    <Typography alignItems='right'  width='100%' variant='h6' noWrap component='div' >     
                    <IconButton onClick={closeSideBar}>
                        <Close/>
                    </IconButton>
                    </Typography>

            </Drawer>
    </Box>
  )
}
