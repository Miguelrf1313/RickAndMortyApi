import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { blackTheme } from './black'

export const AppTheme = ({children}) => {
  return (
   <ThemeProvider theme={blackTheme}>
        <CssBaseline/>
            {children}
   </ThemeProvider>
  )
}
