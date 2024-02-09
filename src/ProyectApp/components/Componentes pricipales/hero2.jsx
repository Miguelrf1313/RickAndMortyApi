import { Box, Button, Container, FormControlLabel, FormGroup, Grid, Skeleton, Switch, Typography, styled } from '@mui/material'
import React from 'react'
import logo from '../../assets/rick.png'
import { useDispatch } from 'react-redux'
import {CardsContainer} from '../components/../Componentes del perfi/CardsContainer'
import hero4 from '../../assets/hero4.jpg'
import { CardsContainer2 } from '../Componentes de las Cards/CardsContainer2'


export const Hero2 = () => {


    const dispactch = useDispatch()
    

    const loadingActive = ()=>{
        dispactch(timeLoading())
    }
    return (

      
      <>
  
        
      <Box component='nav' sx={{
        backgroundImage: `url(${hero4})`,
        backgroundRepeat:'no-repeat',
        backgroundColor:'black',
         backgroundPosition:'center',
         backgroundSize:'cover',
         height:'100vh',
         width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
   
  
   
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
                      <Box component='div' sx={{ inset:0, width:'100%', WebkitMaskImage: 'linear-gradient(to bottom,transparent,rgba(0,0,0,.068) 3.3%,rgba(0,0,0,.145) 5.9%,rgba(0,0,0,.227) 8.1%,rgba(0,0,0,.313) 10.1%,rgba(0,0,0,.401) 12.1%,rgba(0,0,0,.49) 14.6%,rgba(0,0,0,.578) 17.7%,rgba(0,0,0,.661) 21.8%,rgba(0,0,0,.74) 27.1%,rgba(0,0,0,.812) 33.9%,rgba(0,0,0,.875) 42.4%,rgba(0,0,0,.927) 53%,rgba(0,0,0,.966) 66%,rgba(0,0,0,.991) 81.5%,rgba(0,0,0,.991) 100%)'}}>
                      <Grid item sx={{color:'white', width:'100%',   backdropFilter: 'saturate(190%) blur(60px)', backgroundColor: 'rgba(40,40,40,.5)',padding:'20px',display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                              <Typography padding='10px' fontSize='70%' width='25%' variant='p'>
                                  Disponible en HBO MAX
                              </Typography>
                              <Typography padding='10px' display='flex' flexDirection='column' fontSize='70%' width='67%' variant='p'>
                                  Un padre aparece de imprevisto en la puerta de la casa de su hija, veinte años despues de desparecer.
                                      <span style={{color:'gray', fontWeight:'bold'}}> Animación 2013  16+</span>
                              </Typography>
                              <Typography padding='10px'  fontSize='70%' width='25%' variant='p'>
                                  Reparto JustniRoiland, Chris Parnell, Spencer Grammer
                              </Typography>
                      </Grid>
                      
                  </Box>
  
        </Box>
      
        <CardsContainer/>
        
        </>
  )
}