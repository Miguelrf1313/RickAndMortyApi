import {
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useDispatch, useSelector } from "react-redux";
import { CardsContainer2 } from "../Componentes de las Cards/CardsContainer2";
import section from "../../assets/section.jpg"; 
import GroupOrientation from "./GroupOrientation";
import { PerfilLayot } from "../../pages/layout/PerfilLayot";
// import { Recents } from "./Favorite";
import { Favorite } from "./fff";
import { Recents } from "./Recents";




export const CardsContainer = () => {
  const { favorite, perfilState } = useSelector((state) => state.characters);

  const { photoURL, displayName, status, uid } = useSelector(
    (state) => state.auth
  );

  const dispactch = useDispatch()


  let autenticate = status;
  autenticate = "Autenticado";

  return (
    <>
      {/* CONTENEDOR DE TARJETAS DE PERSONAJES  */}

      <Grid
        backgroundColor="red  "
        container
        gap="30px"
        display="flex"
        padding="20px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
      >
        <Grid variant="container" width='100%' display="flex" backgroundColor="#041C32">
          {/* CAJON NUMERO 1 PRINCIPAL */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "20%",
                height: "100%",
                alignItem:'center',
                justifyContent:'center',
               
              }}
            >
              <GroupOrientation/>
            </Box>

            {/* CONTENEDOR DE HISTORIAL Y FAVORITOS */}
            <Box
              sx={{
                display: "flex",
                width: "59%",
                backgroundColor: "#041C32",
                flexDirection: "column",
              }}
            >
              <Grid
                container
                padding="20px"
                display="flex"
                width="100%"
                height="10vh"
              >
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton>
                    <ArrowCircleLeftIcon
                      sx={{
                        color: "white",
                        borderRadius: "0.5em",
                        border: "#20c439 1.5px solid",
                        cursor: "pointer",
                      }}
                    />
                  </IconButton>
                  <Typography sx={{ color: "white" }}>
                    {" "}
                    {displayName}{" "}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                width="100%"
                height="30vh"
                display="flex"
                justifyContent="left"
                sx={{
                  backgroundSize: "cover",
                  backgroundImage: `url(${section})`,
                }}
              >
                <Grid
                  item
                  sx={{
                    display: "flex",
                    width: "13vw",
                    height: "25vh",
                    backgroundColor: "white",
                    position: "absolute",
                    top: "135%",
                    margin: "50px",
                    borderRadius: "300px",
                    overflow: "hidden",
                  }}
                >
                  <img className="imge" src={photoURL} alt="" />
                </Grid>
              </Grid>
              <Grid
                container
                height="40vh"
                display="flex"
                justifyContent="start"
                alignItems="end"
                width="100%"
              >
                <Box
                  sx={{
                    width: { lg: "100%" },
                    height: "100%",
                    backgroundColor: "#041C32",
                    gap: "20vh",
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      marginTop: "20px",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Typography> {displayName} </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      marginTop: "20px",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Typography> Identificación: {uid} </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      marginTop: "20px",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Typography> {autenticate} </Typography>
                  </Grid>

                      <Divider sx={{ bgcolor: '#04293A' }}>Historial y Favoritos </Divider>
                
             
                </Box>
              </Grid>

              <Grid
                container
                width="100%"
                backgroundColor="#041C32"
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="20px"
              >
                
                <Grid
                  sx={{
                    width: "90%",
                    // border: "solid 1px gray",
                    flexDirection: "column",
                    boxShadow:'0px 3px 10px 2px',
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: "#161c24",
                    padding: "20px",
                  }}
                >

                  <PerfilLayot>
            
                    {
                      (!perfilState) ?  <Recents favorite={favorite} /> : <Favorite favorite={favorite} />
                    }
                   


                  </PerfilLayot>


 
                </Grid>
              </Grid>
            </Box>

            {/* LATERAL */}
            <Box
              sx={{
                display: "flex",
                width: "20%",
                height: "90%",
         
              }}
            ></Box>
          </Box>
        </Grid>

       
      <CardsContainer2/>
      </Grid>
    </>
  );
};
