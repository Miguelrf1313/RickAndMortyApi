import {
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  Grid,
  TextField,
  Button,
  Card,
} from "@mui/material";
import BasicPagination from './BasicPagination'
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
  const [ids, setIds] = useState(0);

  useEffect(() => {
    dispatch(getCharactersApi({ pages, names, genero, estado, especie }));
  }, [pages, names, genero, estado, especie]);

  const { characters = [] } = useSelector((state) => state.proyect);

  const { onInputChange } = useForm();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* CONTENEDOR DE TARJETAS DE PERSONAJES  */}

     
      
          <Grid
            container
            gap="30px"
            display="flex"
            padding="20px"
            justifyContent="center"
            alignItems="center"
            width="100%"
            backgroundColor='#161c24'
          >
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
                height: "20vh",
                backgroundColor:'#161c24',
                boxShadow:'2px 3px 10px 0px'
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
                  borderRadius:'30px',
                  ".css-ibmumw-MuiInputBase-root-MuiOutlinedInput-root":{borderRadius:'30px'}
                }}
              />
            </Grid>
                
           
              <Grid
                container
              
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="15px"
                padding="20px"
                backgroundColor="#1a1c1e"
                width="100vw"
                boxShadow='2px 3px 10px 0px'
              >
               
                <Modal1
                  ids={ids}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                  open={open}
                  setOpen={setOpen}
                />
                {characters.map((chara) => (
                  <CardActionArea
                    onClick={() => {
                      handleOpen(chara.id);
                      setIds(chara.id);
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
                          <Card>

                            <CardMedia
                              display="flex"
                              sx={{
                                border: "#20c439  solid 1px",
                                boxShadow:'2px 3px 10px 0px',
                                borderRadius: "0.158em",
                                maxWidth: "7vw",
                                height: "18vh",
                                display: "flex",
                                backgroundColor: "red",
                              }}
                              component="img"
                              image={chara.image}
                              alt={chara.name}
                            />
                          </Card>
                        );
                      } else if (chara.status == "Dead") {
                        return (
                          <CardMedia
                            display="flex"
                            sx={{
                              border: "#C70039  solid 1px",
                              boxShadow:'2px 3px 10px 0px',
                              borderRadius: "0.158em",
                              maxWidth: "7vw",
                              height: "18vh",
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
                              border: "#EEEEEE  solid 1px ",
                              boxShadow:'2px 3px 10px 0px',
                              borderRadius: "0.158em",
                              maxWidth: "7vw",
                              height: "18vh",
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
                 <Box sx={{bgcolor:'#1a1c1e' ,display:'flex', justifyContent:'center', width:'100%'}}>
                      <BasicPagination pages={pages}setPages={setPages} />

                </Box>
              </Grid>
            
         
          </Grid>{" "}
        

    </>
  );
};
