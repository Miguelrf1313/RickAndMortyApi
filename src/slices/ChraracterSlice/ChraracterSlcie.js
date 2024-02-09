import { createSlice } from '@reduxjs/toolkit'



export const charactersSlice = createSlice({

  name:'characters',
  initialState:{ 
   perfilState: false,
   favorite:[],
    active:[]

   


  },
  reducers: {
    setCharacters: (state, action) => {
        state.favorite.push(action.payload);
        state.perfilState = false;
      },

      setActiveC: (state, action) => {
        state.active = action.payload;
      },

      setEmplyCharacter: (state, action) => {
          state.favorite = action.payload;
          state.charactersAvtive = action.payload;
      },

      delectCharacter: (state, action) => {
          state.active = null;
          state.favorite = state.favorite.filter( fa => fa.dni !== action.payload)
      }
      
  

}

    



})


export const {setCharacters,setEmplyCharacter,setActiveC,delectCharacter  } = charactersSlice.actions
