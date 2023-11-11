import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name:'Auth',
  initialState:{
    status:'not-auntenticate',
    uid:null,
    errorMesagge: null,
    displayName: null,
    email: null,
    photoURL: null

  },
  reducers: {
    inlogin: (state,{ payload}) => {
      state.status = 'authenticated',
      state.uid = payload.uid,
      state.email = payload.email,
      state.displayName = payload.displayName,
     state.photoURL = payload.photoURL,
     state.errorMesagge = null
    },
    inlogout: (state,{ payload}) => {
     state.status = 'not-auntenticate',
     state.uid = null,
     state.displayName = null,
     state.email = null,
     state.photoURL = null,
     state.errorMesagge = payload?.errorMesagge
    },
    checkincredential: (state, accion) => {
       state.status = 'checking'
    }
   },
})

// Action creators are generated for each case reducer function
export const { inlogin, inlogout, checkincredential } = authSlice.actions
