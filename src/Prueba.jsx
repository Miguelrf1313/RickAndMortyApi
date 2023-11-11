import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersApi } from './thunks/thunks'

export const Prueba = () => {
 const {isloading, characters , page} = useSelector( state => state.proyecto )
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getCharactersApi())
  }, [])
  
  console.log(characters)
  return (
    <div className="container">
        <h1> {page} </h1>
        <span>  { !isloading ? 'true' : 'false'  }  </span>
        <hr />
        {
          characters.map( characters => (
         <li key={characters.id}> {characters.name} </li> ) )
        }
        
        <button onClick={() => dispatch(getCharactersApi)}>next</button>
    </div>
  )
}
