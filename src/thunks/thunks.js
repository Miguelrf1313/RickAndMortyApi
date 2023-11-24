import { ramApi } from "../api/r&mApi"
import {setCharacters, startLoading} from '../slices/ProyectSlice/ProyectSlice'





export const getCharactersApi = ( pages,names ) => {

    
    return async(dispacth, getState) => {
        
        dispacth((startLoading()) )
        const {data} = await ramApi.get(`character?page=${pages}&name=${names}`)
     dispacth( setCharacters({ characters: data.results, page: pages, name:names}) )
    }   
}

// export const onNextPage = (page) =>{
//     return async(dispacth, getState) => {
        
//         dispacth((startLoading()) )
//         dispacth( changePage({ page: page }) )
        
// }}

// export const onBackPage = (pages) =>{
//     return async(dispacth, getState) => {
        
//         dispacth((startLoading()) )
//         dispacth( changePage({ page: pages}) )
        
// }}

// export const searchCharacter = ({names}) => {
//     return async(dispacth) => {
//         const {data} = await ramApi.get(`character?name=${names}`)
//         await dispacth( setCharacters({ characters: data.results}) )
//         dispacth(nameSeshing({name: names }))
      
//     }
// }