// import { ramApi } from "../api/r&mApi"
import {setCharacters, startLoading} from '../slices/ProyectSlice/ProyectSlice'





export const getCharactersApi = ( {pages,names ,genero,especie,estado }) => {

    return async(dispacth, getState) => {


        dispacth((startLoading()) )
        const url = await fetch(
            `https://rickandmortyapi.com/api/character?page=${pages}&status=${estado}&gender=${genero}&species=${especie}&name=${names}`
          );
    
          const data = await url.json()
          dispacth( setCharacters({ characters: data.results, page: pages, name:names}) )
        // const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${pages}&name=${names}&status=${estado}&species=${especie}` )

        
        // const {data} = await ramApi.get(`character?page=${pages}&name=${names}&status=${estado}&species=${especie} `)
    }   
}
