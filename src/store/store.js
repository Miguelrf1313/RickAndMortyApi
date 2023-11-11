import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/AuthSlice'
import { proyectSlice } from '../slices/ProyectSlice/ProyectSlice'
// import { authSlice } from '../auth'

const store = configureStore({
  reducer: {
   proyect:proyectSlice.reducer,
   auth: authSlice.reducer
  }
})

export default store