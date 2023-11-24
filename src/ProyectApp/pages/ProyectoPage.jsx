import { Box } from '@mui/material'
import React from 'react'
import { ProyectLayout } from '../layout/ProyectLayout'
import { Hero } from '../components/Hero'

import {  useSelector } from 'react-redux'
import { Hero2 } from '../components/hero2'

export const ProyectoPage = () => {

  const {loading} = useSelector(state => state.proyect)

  return (


    <Box component='container' p='20px'>

    <ProyectLayout>

     { (!loading)
      ?  <Hero/> 
      : <Hero2/>
  
      }
    
    </ProyectLayout>
    </Box>
  )
}
