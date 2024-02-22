import { Box, Grid, Skeleton, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/rick.png'
import { useDispatch} from 'react-redux'
import video from '../../assets/video.mp4'
import hero4 from '../../assets/hero4.jpg'

export const HeroCards = () => {
 

    

      return (
  
        
        <>
        

        <div  id="hero2"> 

   <video  mute autoPlay loop>
     <source src={video} type="video/mp4"/>  
   </video>
   <div className="capa"></div>

   <Grid container sx={{ position:'relative', zIndex:'2',}}   >
    
      <Box component='nav' sx={{
           backgroundPosition:'center',
           backgroundSize:'cover',
           height:'100vh',
           width:'100%',
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between'
     
    
     
    }}>
   <Box sx={{width:'5%', padding:'20px', display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column' }} >
    
    <Box component='div' sx={{ width:'100%', padding:'20px', height:'200px', alignItems:'center',justifyContent:'center',  backgroundPosition:'center', display:'flex',  }}>
        <img className='logo' src={logo} alt="" />
    </Box>
</Box>
   
<Box component='div' sx={{}}>
    <Grid item sx={{color:'white',width: '35vw',height:'5vh', display:'flex', justifyContent:'end', paddingRight:'40px ',alignItems:'center', background:'linear-gradient( to left, rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1) )'
}}>
            <Typography  sx={{fontSize:'1.5rem'}}variant='h1'>
                Rick and Morty API
            </Typography>
    </Grid>
   
</Box>
    <Box component='div' sx={{ inset:0, width:'100%', WebkitMaskImage: 'linear-gradient(to bottom,transparent,rgba(0,0,0,.068) 3.3%,rgba(0,0,0,.145) 5.9%,rgba(0,0,0,.227) 8.1%,rgba(0,0,0,.313) 10.1%,rgba(0,0,0,.401) 12.1%,rgba(0,0,0,.49) 14.6%,rgba(0,0,0,.578) 17.7%,rgba(0,0,0,.661) 21.8%,rgba(0,0,0,.74) 27.1%,rgba(0,0,0,.812) 33.9%,rgba(0,0,0,.875) 42.4%,rgba(0,0,0,.927) 53%,rgba(0,0,0,.966) 66%,rgba(0,0,0,.991) 81.5%,rgba(0,0,0,.991) 100%)'}}>
    <Grid item sx={{color:'#b9b9b9', width:'100%',   backdropFilter: 'saturate(190%) blur(60px)', backgroundColor: 'rgb(0 0 0 / 50%)',padding:'20px',display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Typography fontWeight='bold' padding='10px' fontSize='70%' width='25%' variant='p'>
                Disponible en HBO MAX
            </Typography>
            <Typography  fontWeight='bold' color='#b9b9b9' padding='10px' display='flex' flexDirection='column' fontSize='70%' width='67%' variant='p'>
                Un padre aparece de imprevisto en la puerta de la casa de su hija, veinte años despues de desparecer.
                    <span style={{color:'#b9b9b9', fontWeight:'bold'}}> Animación 2013  16+</span>
            </Typography>
            <Typography  fontWeight='bold' padding='10px' color='#b9b9b9'  fontSize='70%' width='25%' variant='p'>
                Reparto JustniRoiland, Chris Parnell, Spencer Grammer
            </Typography>
    </Grid>
    
</Box>
          </Box>
    </Grid>    

   
      </div>
          
      
    
    

                    {/* <CardsContainer2/> */}
        
  
  
   
          
          </>
    )
}
