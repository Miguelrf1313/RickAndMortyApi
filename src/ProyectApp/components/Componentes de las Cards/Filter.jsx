import * as React from 'react';

import { userContext } from '../../useContext/UserContext';
import { useContext } from 'react';
import { TextField } from '@mui/material';
import { useForm } from '../../../hooks/useForm';

export const Filter = ({genero, setGenero}) => {




  const { onInputChange} = useForm();

  const  {names, setNames, setPages} = useContext(userContext);


  return (
    <div>
          <TextField
                id="outlined-search"
                placeholder="Buscar personaje"
                color="secondary"
                type="search"
                name="nombre"
                value={names}
                onChange={(e) => {
                  onInputChange;
                  e.preventDefault();
                  setPages(1);
                  setNames(e.target.value);
                }}
                sx={{
                  width: "30vw",
                  fontWeight: "500",
                  background: "white",
                  color: "blue",
                  borderRadius:'30px',
                  ".css-ibmumw-MuiInputBase-root-MuiOutlinedInput-root":{borderRadius:'30px'}
                }}
              /> 
      
     
    </div>
  );
}
