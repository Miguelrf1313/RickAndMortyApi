import {
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCharactersApi } from "../../../thunks/thunks";

import { useForm } from "../../../hooks/useForm";
import { Modal1 } from "./VentanaModa";




export const CardsContainer2 = () => {
  const [pages, setPages] = useState(0);
  const [names, setNames] = useState("");
  const [genero, setGenero] = useState("");
  const [estado, setEstado] = useState("");
  const [especie, setEspecie] = useState("");
  const [ids, setIds] = useState(0)


  const {
    characters = []
  } = useSelector((state) => state.proyect);
  const { favorite, perfilState } = useSelector((state) => state.characters);
  const { onInputChange } = useForm();



// Array vacío
// const miArray = [];

// Iterar sobre las propiedades del objeto y agregarlas al array
// for (var propiedad in favorite) {
//   if (favorite.hasOwnProperty(propiedad)) {
//     miArray.push(favorite[propiedad]);
//   }
// }
// zzz

// Utilizando el método map para crear un nuevo array con solo los valores de id



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
  
    setOpen(true)

  } 
  const handleClose = () => setOpen(false);

 

  const onClearn = () => {
    setEspecie("");
    setEstado("");
    setGenero("");
    setPages(1);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersApi({ pages, names, genero, estado, especie }));
  }, [pages, names, genero, estado, especie]);

  return (
    <>
      {/* CONTENEDOR DE TARJETAS DE PERSONAJES  */}

      <Grid
        item
        display="flex"
        alignItems="center"
        backgroundColor="black"
        flexDirection="column"
        height="100vh"
      >
                <Box
          component="div"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          width="100%"
          height="150vh"
        >
          <Grid
            container
            gap="30px"
            display="flex"
            padding="20px"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
                height: "auto",
              }}
            >
              <TextField
                id="outlined-search"
                placeholder="Buscar personaje"
                color="secondary"
                type="search"
                
                name="nombre"
                value={names}
                onChange={(e) => {
                  onInputChange;
                  e.preventDefault();
                  setPages(1);
                  setNames(e.target.value);
                }}
                sx={{
                  width: "30vw",
                  fontWeight: "500",
                  background: "white",
                  color: "blue",
                }}
              />
            
            </Grid>
            <Grid
              container
         
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Grid
                component="div"
                display="flex"
                border=" solid 0.125em"
                width="3vw"
                height="40vh"
                alignItems="center"
                justifyContent="center"
                borderRadius="0.158em"
                backgroundColor="#ffffff30"
              >
                <IconButton onClick={() => setPages(pages - 1)}>
                  <ArrowCircleLeftIcon
                    sx={{
                      color: "white",
                      borderRadius: "0.5em",
                      border: "#20c439 1.5px solid",
                      cursor: "pointer",
                    }}
                  />
                </IconButton>
              </Grid>
              <Grid
                container
                // lg={12}
                sx={{
                  height: "80vh",
                  display: "flex",
                  // flexDirection: "row",
                  alignItems:'center',
                  justifyContent: "center",
                  gap: "5px",
                  padding: "20px",
                
                  width: "75vw",
                }}
              >
             
                <Modal1  ids={ids} handleClose={handleClose} handleOpen={handleOpen} open={open} setOpen={setOpen}/>
                {characters.map((chara) => (
                  <CardActionArea 
                  onClick={() => {
                   
                    handleOpen(chara.id)
                    setIds(chara.id)
                    
                    
                  }}
                    key={chara.id}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      overflow: "hidden",
                      width: "15%",
              
                    }}
                  >
                    {(() => {
                      if (chara.status == "Alive") {
                        return (
                          <CardMedia
                            display="flex"
                          
                            sx={{
                         
                              border: "#20c439  solid 0.125em",
                              boxShadow: "0 0 1em 0 #20c439",
                              borderRadius: "0.158em",
                              maxWidth: "9vw",
                              height: "13vh",
                              display: "flex",
                              backgroundColor:'red'
                            
                            }}
                            component="img"
                            image={chara.image}
                            alt={chara.name}
                          />
                        );
                      } else if (chara.status == "Dead") {
                        return (
                          <CardMedia
                            display="flex"
                        
                            sx={{
                              border: "#C70039  solid 0.125em",
                              boxShadow: "0 0 1em 0 #C70039",
                              borderRadius: "0.158em",
                              maxWidth: "9vw",
                              height: "13vh",
                              display: "flex",
                           
                            }}
                            component="img"
                            image={chara.image}
                            alt={chara.name}
                          />
                        );
                      } else {
                        return (
                          <CardMedia
                            display="flex"
                          
                            sx={{
                              border: "#EEEEEE  solid 0.125em",
                              boxShadow: "0 0 1em 0 #EEEEEE",
                              borderRadius: "0.158em",
                              maxWidth: "9vw",
                              height: "13vh",
                              display: "flex",
                              
                            }}
                            component="img"
                            image={chara.image}
                            alt={chara.name}
                          />
                        );
                      }
                    })()}
                  </CardActionArea>
                ))}
              </Grid>
              <Grid
                component="div"
                display="flex"
                border=" solid 0.125em"
                width="3vw"
                height="40vh"
                alignItems="center"
                justifyContent="center"
                borderRadius="0.158em"
                backgroundColor="#ffffff30"
              >
                <IconButton onClick={() => setPages(pages + 1)}>
                  <ArrowCircleRightIcon
                    sx={{
                      color: "white",
                      borderRadius: "0.5em",
                      boxShadow: "0 0 1px 2px 0 #20c439",
                      border: "#20c439 1.5px solid",
                      cursor: "pointer",
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>{" "}
        </Box>

 
      </Grid>
    </>
  );
};
