import { Box } from '@mui/material'
import React from 'react'
import { ProyectLayout } from './layout/ProyectLayout'
import { Hero } from '../components/Componentes pricipales/Hero'

import {  useSelector } from 'react-redux'
import { Hero2 } from '../components/Componentes pricipales/hero2'
import { useState } from 'react'
import { CardsContainer } from '../components/Componentes del perfi/CardsContainer'


export const ProyectoPage = () => {

  const {loading} = useSelector(state => state.proyect)
  const [loa, setloa] = useState(true)

  return (




    <ProyectLayout>

     { (!loading)
      ?  <Hero/> 
      : <Hero2 /> 
  
      }
    
    </ProyectLayout>
 
  )
}
