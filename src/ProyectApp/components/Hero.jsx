import { Box, Button, Container, FormControlLabel, FormGroup, Grid, Skeleton, Switch, Typography, styled } from '@mui/material'
import React from 'react'
import hero1 from './assets/hero3.jpg'
import logo from './assets/rick.png'
import { useDispatch, useSelector } from 'react-redux'
import { timeLoading } from '../../slices/ProyectSlice/ProyectSlice'



export const Hero = () => {


    const dispactch = useDispatch()
    

    const loadingActive = ()=>{
        dispactch(timeLoading())
    }

 
  return (
  
        <Box component='container' sx={{
            backgroundImage: `url(${hero1})`,
            backgroundRepeat:'no-repeat',
            backgroundColor:'black',
            backgroundPosition:'center',
            backgroundSize:'cover',
            height:'100vh',
            width:'100%',
            display:'flex',
            flexDirection:'column',
           

           
        }}>

            <Box sx={{width:'51%', padding:'20px', display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column' }} >

                    <Box component='div' sx={{ width:'100%', padding:'20px', height:'200px', alignItems:'center',justifyContent:'center',  backgroundPosition:'center', display:'flex',  }}>
                        <img className='logo' src={logo} alt="" />
                    </Box>
            </Box>
                    <Skeleton variant='rectangualar' height={20} width={51}/>
                <Box component='div' sx={{}}>
                    <Grid item sx={{color:'white',width: '35vw',height:'5vh', display:'flex', justifyContent:'end', paddingRight:'40px ',alignItems:'center', background:'linear-gradient( to left, rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1) )'
                }}>
                            <Typography  sx={{fontSize:'1.5rem'}}variant='h1'>
                                Rick and Morty API
                            </Typography>
                    </Grid>
                    <Skeleton variant='rectangualr' height={20}/>
                </Box>
                    <Box component='div'>
                    <Grid item sx={{color:'white', width:'50%', padding:'20px',display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                            <Typography variant='p'>
                                En esta pagina podras intereactuar con todos los personajes de Rick and Morty. Toda la informacion que necesitas estara aquí. Tambien podras crear una lista de personajes que consideres tus favoritos de los mas 800 que tienes para escoger.
                            </Typography>
                    </Grid>
                        <Grid item sx={{ width:'50%', height:'10vh', display:'flex',justifyContent:'center',alignItems:'center', paddingLeft:'10px'}}>
                            <Box  sx={{padding:'20px',display:'flex', }} >
                                <Button onClick={loadingActive} sx={{background:'linear-gradient( to left, rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1) )', borderRadius: '30px', color:'white', fontWeight:'bolder',fontSize:'1.5rem', width:'500px', height:'70px'}} variant='contained' color='secondary' >¡Iniciar ahora!</Button>
                            </Box>

                        </Grid>
                </Box>

       
    </Box>
  )
}
