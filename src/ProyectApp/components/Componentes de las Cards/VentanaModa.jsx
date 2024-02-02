
import Box from '@mui/material/Box';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useDispatch, useSelector } from 'react-redux';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { createNewFavorite } from '../../../slices/ChraracterSlice/thunks';
import { Grid } from '@mui/material';
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#312d2d',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  flexDirection: 'column',
  display: 'flex'
};



export const Modal1 = ({handleClose,open,ids}) => {

  const {favorite} = useSelector(state => state.characters)

  const [value, setValue] = React.useState([]);
  const dispatch = useDispatch()

  var arrayDeIds = favorite.map(function(objeto) {
   
    return objeto.id;
  
  });
  
  
  
  const idss = arrayDeIds;
  

   
  const newFavorite = () => {
    // Verificar si el ID ya existe en el array
    const personajeId = characterss.id;
    if (idss.includes(personajeId)) {
      console.log(`El personaje con ID ${personajeId} ya existe en el array.`);
      // No realizar el dispatch porque el personaje ya está en el array
    } else {
      // Si el ID no existe, realiza el dispatch de la acción
      dispatch(createNewFavorite(characterss));
    }
  }
  const [characterss, setcharacters] = React.useState([]);
  // let { name, image, status, created, gender, species} = characterss;
  // dispatch(setCharacters({characters:characterss}))
    let api = `https://rickandmortyapi.com/api/character/${ids}`;
    React.useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        setcharacters(data);
  
      })();
    }, [api]);
  


  return (
    <div>
    
      <Modal  className="animated bounceInUp"
        onClick={newFavorite}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container sx={{with:'100%'}}>  
                 <Typography sx={{mt: 2, mb:2, display:'flex', justifyContent:'center' }} id="modal-modal-title" variant="h6" component="h2">
                     { characterss.name}
                 </Typography>
                 <Box sx={{ width: 500 }}>
      <BottomNavigation
      sx={{backgroundColor:'#312d2d',color:'error', borderRadius:'8px' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
       
        <BottomNavigationAction  sx={{".css-imwso6-MuiBottomNavigationAction-label":{color:'white', fontFamily:'monospace'}}} label="Favorites" icon={<FavoriteIcon color='error'/>} />
      </BottomNavigation>
    </Box>
          </Grid>

          <img src={characterss.image}  />
          <Typography id="modal-modal-description" sx={{ mt: 2, display:'flex', justifyContent:'center' }}>
            {characterss.species}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, display:'flex', justifyContent:'center' }}>
            {characterss.status}
          </Typography>
          <Typography id="modal-modal-description" sx={{  mt: 2, display:'flex', justifyContent:'center'  }}>
            {characterss.gender}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}