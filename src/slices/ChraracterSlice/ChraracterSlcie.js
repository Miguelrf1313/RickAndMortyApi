import { createSlice } from '@reduxjs/toolkit'



export const charactersSlice = createSlice({

  name:'characters',
  initialState:{ 
   perfilState: false,
   favorite:[],
   recents:[],

   


  },
  reducers: {
    setCharacters: (state, action) => {
        state.favorite.push(action.payload);
        state.perfilState = false;
      },

      setActivenote: (state) => {
        state.perfilState = true;
      },

      setEmplyCharacter: (state, action) => {
          state.favorite = action.payload;
          state.charactersAvtive = action.payload;
      },
      
  

}

    



})


export const {setCharacters,setEmplyCharacter} = charactersSlice.actions
