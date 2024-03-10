

import {userContext} from './UserContext'
// import { useState } from 'react';
import * as React from 'react';
import { useState } from 'react';
export const UseProvider = ({children}) => {

  const [names, setNames] = useState("");
  const [pages, setPages] = useState(0);
  const [genero, setGenero] = useState("");
  const [estado, setEstado] = useState("");
  const [especie, setEspecie] = useState("");



  return (
    <>
    

        <userContext.Provider value={{names, setNames,pages, setPages, genero, setGenero, estado, setEstado, especie, setEspecie}}>
            {children}
        </userContext.Provider>
    </>

  
  )
}
