import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/AuthSlice'
import { proyectSlice } from '../slices/ProyectSlice/ProyectSlice'
import { charactersSlice } from '../slices/ChraracterSlice/ChraracterSlcie'
// import { authSlice } from '../auth'

const store = configureStore({
  reducer: {
   proyect:proyectSlice.reducer,
   auth: authSlice.reducer,
   characters: charactersSlice.reducer
  }
})

export default store