import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { ProyectRoutes } from '../ProyectApp/routes/ProyectRoutes'
import { CheckingAuth } from '../ui/components/checkingAuth'

import { useCheckAuth } from '../hooks/useCheckAuth'

export const AppRouters = () => {

  const {status} = useCheckAuth();


  
  if ( status === 'checking' ) {
    return <CheckingAuth />
  }


 

 
  return (
    <Routes>

      {
          (status === 'authenticated') ? <Route path='/*' element={<ProyectRoutes/>} /> :  <Route path='/auth/*' element={<AuthRoutes/>} />
      }

      <Route path='/*' element={ <Navigate to='/auth/login' />} />

     

     



    </Routes>
  )
}
