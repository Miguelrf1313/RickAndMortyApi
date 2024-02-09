import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button sx={{borderRadius:'20px', color:'white', backgroundColor:'#212b36'}} key="one">Inicio</Button>,
  <Button sx={{borderRadius:'20px', color:'white', backgroundColor:'#212b36' }} key="two">Docmentación</Button>,
  <Button sx={{borderRadius:'20px', color:'white', backgroundColor:'#212b36'}}key="three">Personajes</Button>,
  <Button sx={{borderRadius:'20px', color:'white', backgroundColor:'#212b36'}} key="one">Temporadas</Button>,
  <Button sx={{borderRadius:'20px',  color:'white', backgroundColor:'#212b36'}} key="two">Imagenes</Button>,
  <Button sx={{borderRadius:'20px', color:'white', backgroundColor:'#212b36'}}key="three">Trailers</Button>,
];

export default function GroupOrientation() {
  return (
    <Box
      sx={{justifyContent:'center',gap:'20px',
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
     
   
     <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
        sx={{gap:'20px', color:'white'}}
      
      >
        {buttons}
      </ButtonGroup>  
    </Box>
  );
}