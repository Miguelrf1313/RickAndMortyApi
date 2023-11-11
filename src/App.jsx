import React from 'react'
import { AppRouters } from './Routers/AppRouters'
import { AppTheme } from './Theme'

export const App = () => {
  return (

    <>
    <AppTheme>
        <AppRouters/>
    </AppTheme>
    </>
  )
}
