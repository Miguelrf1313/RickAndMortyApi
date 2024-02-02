import { Box } from '@mui/material'
import React from 'react'
import { ProyectLayout } from './layout/ProyectLayout'
import { Hero } from '../components/Componentes pricipales/Hero'

import {  useSelector } from 'react-redux'
import { Hero2 } from '../components/Componentes pricipales/hero2'


export const ProyectoPage = () => {

  const {loading} = useSelector(state => state.proyect)

  return (




    <ProyectLayout>

     { (!loading)
      ?  <Hero/> 
      : <Hero2 />
  
      }
    
    </ProyectLayout>
 
  )
}
