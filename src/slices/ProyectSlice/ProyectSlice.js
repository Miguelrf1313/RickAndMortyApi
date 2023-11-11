import { createSlice } from '@reduxjs/toolkit'


export const proyectSlice = createSlice({

  name:'proyect',
  initialState:{  
    active:false, 
    errorMesagge: null,

  },
  reducers: {
    sideBarActive: (state) => {
      state.active = true
    },
    sideBarClose: (state) => {
      state.active = false
    },
    checkincredential: (state, accion) => {
  
    }
   },
})

// Action creators are generated for each case reducer function
export const { sideBarActive,sideBarClose } = proyectSlice.actions
