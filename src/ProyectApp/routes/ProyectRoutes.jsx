import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProyectoPage } from '../pages/ProyectoPage'
import { CardsContainer } from '../components/Componentes del perfi/CardsContainer'

export const ProyectRoutes = () => {
  return (
    <Routes>
       



        <Route path='/*' element={<ProyectoPage/>} />

        <Route path='/*' element={<Navigate to='/' />} />

    </Routes>
  )
}
