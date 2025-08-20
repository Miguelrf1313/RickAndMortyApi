import { createSlice } from '@reduxjs/toolkit'



export const charactersSlice = createSlice({

  name:'characters',
  initialState:{ 
   cardLoading: false,
   favorite:[],
    active:null

   


  },
  reducers: {
    setCharacters: (state, action) => {
      const character = action.payload
        state.favorite.push(character);
        state.cardLoading = false;
      },

      setActiveC: (state, action) => {
        const activos = action.payload
        console.log(activos)
        state.active = action.payload;
      },

      setEmplyCharacter: (state, action) => {
          state.favorite = action.payload;
          state.charactersAvtive = action.payload;
      },

      delectCharacter: (state, action) => {
            //  state.active = null;
          state.favorite = state.favorite.filter( fa => fa.dni !== action.payload)
            // state.active = state.active.filter(fa => fa.dni !== dni);
      }
      
  

}

    



})


export const {setCharacters,setEmplyCharacter,setActiveC,delectCharacter  } = charactersSlice.actions
