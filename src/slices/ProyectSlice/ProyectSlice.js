import { createSlice } from '@reduxjs/toolkit'



export const proyectSlice = createSlice({

  name:'proyect',
  initialState:{ 
    start:null,
    loading:null,
    active:false, 
    page:0,
    name:'',
    errorMesagge: null,
    characters:[],
    loadingC:false,

  },
  reducers: {
    sideBarActive: (state) => {
      state.active = true
    },
    loadingCharacter: (state) => {
      state.loadingCharacters = true
    },

    timeLoading: (state) => {
      state.loading = true
    },
    
   startLoading: (state) => {
    state.loadingC = true
  },


  setCharacters: (state, action) => {
    state.loadingC = false
    state.characters = action.payload.characters
    state.page = action.payload.page
    state.name = action.payload.name

  },


}

    



})

// Action creators are generated for each case reducer function
export const {setCharacters,startLoading,timeLoading, sideBarActive,sideBarClose } = proyectSlice.actions
