import { createSlice } from '@reduxjs/toolkit'



export const charactersSlice = createSlice({

  name: 'characters',
  initialState: {
    cardLoading: false,
    favorite: [],
    active: []



  },
  reducers: {
    setCharacters: (state, action) => {
      const character = action.payload
      state.favorite.push(character);
      state.cardLoading = false;
    },

    setActiveC: (state, action) => {
      state.active = action.payload;
    },

    setEmplyCharacter: (state, action) => {
      state.favorite = action.payload;
      state.active = action.payload;
    },

    delectCharacter: (state, action) => {
      const dni = action.payload
      state.favorite = state.favorite.filter(fa => fa.dni !== dni);
    }



  }





})


export const { setCharacters, setEmplyCharacter, setActiveC, delectCharacter } = charactersSlice.actions
