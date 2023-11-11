import { ramApi } from "../api/r&mApi"
import { setChraracters, starLoadin } from "../slices/ProyectSlice/ProyectSlice"




export const getCharactersApi = (page = 0) => {
    return async(dispacth, generated) => {
        dispacth(starLoadin() )
        // const resp = await fetch(`https://rickandmortyapi.com/api/character/?${page * 10}`);
        // const data = await resp.json();
        // console.log(data.results)
        const {data} = await ramApi.get(`character/?${page * 10}`)
        console.log(data.results)
        dispacth(setChraracters( {characters: data.results, page: page + 1}))
    }
}