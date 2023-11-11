import { Alert, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from 'react'
import { Apple, Facebook, Google } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../thunks";


export const RegisterPage = () => {

  const {errorMessage, status} =  useSelector(state => state.auth)
  const isChekingAutenticate = useMemo(() => status === 'checking', [status]);


 const dispatch = useDispatch()

  const [isFormSubmit, setIsFormSubmit] = useState(false)

  const formData = {
    email:'riosfuenmayorangel@mail.com', 
    password:'',
    displayName: ''
  }

  const formValidations = {
    displayName: [ (value) => value.length >= 1, 'El nombre es obliatorio'  ],
    password: [ (value) => value.length >= 6, 'La contraseña debe tener al menos  dos caracteres' ],
    email: [(value) => value.includes('@'), 'El correo debe tener un @' ]
  }
  
  const {password, email, onInputChange, formState, displayName, isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);


  const onSumib = (event) => {
    event.preventDefault()
    setIsFormSubmit(true)

    if (!isFormSubmit ) return
    dispatch(startCreatingUserWithEmailPassword(formState))
  }
  return (
    
    <>
       
       <Grid container spacing={0} alignItems="center" direction="column" justifyContent="center"
        sx={{ minHeight: "100vh", backgroundColor: "white", padding: 4 }}>
       
       
         <Grid item sx={{
              width:'100%',
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", }}>

          <Typography variant="h4" sx={{ mb: 1 }}>
                Registrate en NovaMIT
          </Typography>
          <Typography color='black' alignItems="center" vatiant="p">
                ¡Comienza ahora!
          </Typography>
         </Grid> 

         <Grid container spacing={0} alignItems="end" direction="row" justifyContent="center"
          sx={{ minHeight: "auto", backgroundColor: "white", padding: 4, }}>
         
         <Grid item className="box-shadow" xs={12} sm={6} md={4} justifyContent="center" 
              sx={{
                  width: "50px",
                  backgroundColor: "white",
                  padding: 0,
                  borderRadius: 2,
                  }} >
            <Grid container direction="row">
              <Grid item xs={12}
                sx={{
                  minWidth: "100mw",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  mb: 2,
                }}>
              </Grid>
            </Grid>
            <form onSubmit={onSumib}>
              <Grid item>
                <Grid item xs={12} sx={{ mb: 2 }}>
                  <TextField
                    label="Nombre"
                    type="Text"
                    placeholder="Nombre Completo"
                    fullWidth
                    value={displayName}
                    name="displayName"
                    onChange={onInputChange}
                    error={!!displayNameValid && isFormSubmit}
                    helperText={displayNameValid}
                  />
                </Grid>
              </Grid>
           


            
              <Grid item>
                <Grid item xs={12} sx={{ mb: 2 }}>
                  <TextField
                    label="correo"
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    fullWidth
                    value={email}
                    name="email"
                    onChange={onInputChange}
                    error={!!emailValid && isFormSubmit}
                    helperText={emailValid}
                  />
                </Grid>
              </Grid>
           
              <Grid item>
                <Grid item xs={12} sx={{ mb: 2 }}>
                  <TextField
                    label="contraseña"
                    type="password"
                    placeholder="Contraseña"
                    fullWidth
                    value={password}
                    name="password"
                    onChange={onInputChange}
                    error={!!passwordValid && isFormSubmit}
                    helperText={passwordValid}
                  />
                </Grid>

                
              </Grid>

              <Grid container style={{ marginTop: 20 }} justifyContent="center">
                  <Grid display={ !!errorMessage ? '' : 'none'} item xs={12}>

                      <Alert severity='error'> {errorMessage} </Alert>
                  </Grid>
                <Grid item xs={12}>
                  
                  <Button disabled={isChekingAutenticate} type="submit" variant="contained" fullWidth>
                    Registrarse
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

    

        
  
     
           </Grid>
          <Grid
            item

            xs={1}
            sm={1}
            md={1}
            sx={{
         
              
              padding: 0,
              borderRadius: 2,
            }}
          >
            <Divider
            
             
              style={{ height: 30, width: 400 }}
              flexItem
            >
              OR
            </Divider>
          </Grid>


         
              <Grid container style={{ marginTop: 20 }} justifyContent="center">
                <Grid item xs={6}>
                  <Button variant="contained" fullWidth>
                    <Google />
                    <Typography>Continuar con Google</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: 20 }} justifyContent="center">
                <Grid item xs={6}>
                  <Button variant="contained" fullWidth>
                    <Apple />
                    <Typography>Continar con Apple</Typography>
                  </Button>
                </Grid>
              </Grid>

              <Grid container style={{ marginTop: 20 }} justifyContent="center">
                <Grid item xs={6}>
                  <Button variant="contained" fullWidth>
                    <Facebook />
                    <Typography>Continuar con Facebook</Typography>
                  </Button>
                </Grid>
              </Grid>
           
           </Grid>
    
    
    
    </>
  )
}
