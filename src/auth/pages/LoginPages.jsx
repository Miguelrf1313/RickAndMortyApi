import { Apple, Facebook, Google } from "@mui/icons-material";
import {Link as RouterLink} from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import { Button, Divider, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startFacebookSingIn, startGoogleSignIn, startLoginWithEmailPassword} from '../thunks'



export const LoginPages = () => {


  
  const { status } = useSelector( state => state.auth );


const isAuthenticated = useMemo(() => status === 'checking', [status])




 const dispatch = useDispatch()

    const {password, email, onInputChange} = useForm({email:'rios@gmail.com', password:'1234565'});

    const onSumit = (event) => {
      event.preventDefault()
      dispatch( startLoginWithEmailPassword({email,password}))
    }

    const onLoginGoogle = () => {
      dispatch(startGoogleSignIn())
      console.log('teLogueasteConGoogleMiRey')
    }

    const onLoginInFacebook = () => {
      console.log('te Logueaste con Facebook')
      dispatch(startFacebookSingIn())
    }
    
    
  return (
    <>
      <Grid container spacing={0} alignItems="center" direction="column" justifyContent="center"
        sx={{ minHeight: "100vh", backgroundColor: "white", padding: 4 }}>
       
       
         <Grid item sx={{width:'100%',justifyContent: "center",display: "flex",flexDirection: "column",alignItems: "center", }}>
          
            <Typography variant="h4" sx={{ mb: 1 }}> Ingresa a NovaMIT </Typography>
          
             <Typography  alignItems="center" vatiant="p">
                <Link color='secondary' component={RouterLink} to='/auth/register'> ¿Aun no tienes una cuenta?  </Link>
             </Typography>
         </Grid> 

         <Grid container spacing={0} alignItems="center" direction="row"  justifyContent="center" sx={{ minHeight: "55vh", backgroundColor: "white", padding: 4, }}>
         
           <Grid item className="box-shadow" xs={12} sm={6} md={4}  justifyContent="center" sx={{ width: "50px",backgroundColor: "white",padding: 3,borderRadius: 2,}} >
             <Grid container direction="row">
               <Grid item xs={12}sx={{minWidth: "100mw",display: "flex",alignItems: "center",flexDirection: "column",mb: 2,}}>
             </Grid>
           </Grid>
                        
            <form onSubmit={onSumit}>
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
                  />
                </Grid>

                <Grid
                  container direction="row"justifyContent="space-between"alignItems="center"
                >
                  <Grid item>
                    <input type="checkbox" placeholder="Recordar" />
                    <Typography variant="p" fontSize="15px">
                      {" "}
                      Recordar{" "}
                    </Typography>
                  </Grid>
                  <Typography variant="p" color="blueviolet" fontSize="15px">
                  <Link color='#00A9FF' component={RouterLink} to='/auth/register'> ¿Olvidaste tu comtraseña?  </Link>
                  </Typography>
                </Grid>
              </Grid>

              <Grid container style={{ marginTop: 20 }} justifyContent="center">
                <Grid item xs={12}>
                  <Button type="submit"  variant="contained" fullWidth>
                    Ingresar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

      

          <Grid
            item

            xs={1}
            sm={1}
            md={1}
            sx={{
         
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
            }}
          >
            <Divider
            sx={{display:{
              mobile:'none'
            }}}
              orientation='vertical'
              style={{ height: 300, width: 50 }}
              flexItem
            >
              OR
            </Divider>
          </Grid>
          {/* </Grid> */}

          <Grid
            item
            className="box-shadow"
            xs={12} sm={6} md={4}
            justifyContent="center"
            sx={{
              maxWidth: "45%",
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
            }}
          >
            <Grid container direction="row">
              <Grid item xs={6} sm={3} 
                sx={{
                  minWidth: "100mw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:'center',
                  flexDirection: "column",
                  mb: 2,
                }}
              ></Grid>
           

            <form onSubmit={onsubmit} >
              <Grid container  style={{ marginTop: 20 }} justifyContent="center">
                <Grid item md={12} xs={12}>
                  <Button
                   disabled={isAuthenticated}
                   onClick={onLoginGoogle}  variant="contained" fullWidth>
                    <Google />
                    <Typography>Continuar con Google</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: 20 }} justifyContent="center">
                <Grid item xs={12} sm={6} md={12} >
                  <Button variant="contained" fullWidth>
                    <Apple />
                    <Typography>Continar con Apple</Typography>
                  </Button>
                </Grid>
              </Grid>

              <Grid container style={{ marginTop: 20 }} justifyContent="center">
                <Grid item  xs={12} md={12}>
                  <Button onClick={onLoginInFacebook} variant="contained" fullWidth>
                    <Facebook />
                    <Typography>Continuar con Facebook</Typography>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            width:'50%',
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="p" sx={{textAlign:'center', color:'gray', mb: 1 }}>
          Al iniciar sesión, acepta nuestros <b>Términos de uso y Política de privacidad y recibir correos electrónicos y actualizaciones </b>  de NovaMIT.
          </Typography>

  
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};
