import axios from "axios";



export const ramApi = axios.create({
    baseURL: `https://rickandmortyapi.com/api/` 
})