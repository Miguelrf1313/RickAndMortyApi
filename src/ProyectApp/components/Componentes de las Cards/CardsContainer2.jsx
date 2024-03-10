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
import BasicPagination from "./BasicPagination";
import React, { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCharactersApi } from "../../../thunks/thunks";


import { Modal1 } from "./VentanaModa";
import { userContext } from "../../useContext/UserContext";
import { Filter } from "./Filter";
import { Filters } from "./Filters/Filters";

export const CardsContainer2 = () => {




  const { names, setNames, pages, setPages, genero, setGenero, estado, setEstado, especie, setEspecie } = useContext(userContext);

  const [ids, setIds] = useState(0);

  // const { names, pages, setPages } = useForm();

  useEffect(() => {
    dispatch(getCharactersApi({ pages, names, genero, estado, especie }));
  }, [pages, names, genero, estado, especie]);

  const { characters = [] } = useSelector((state) => state.proyect);

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
        justifyContent="left"
        alignItems="center"
        width="100%"
        backgroundColor="#161c24"
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
            backgroundColor: "#161c24",
            boxShadow: "2px 3px 10px 0px",
          }}
        ></Grid>

        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="20px"
            padding="20px"
            backgroundColor="#1a1c1e"
            width="50vw"
            boxShadow="2px 3px 10px 0px"
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
                  width: "30%",
                  height: "20vh",
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
                            boxShadow: "2px 3px 10px 0px",
                            borderRadius: "0.158em",
                            Width: "auto",
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
                          boxShadow: "2px 3px 10px 0px",
                          borderRadius: "0.158em",
                          Width: "auto",
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
                          boxShadow: "2px 3px 10px 0px",
                          borderRadius: "0.158em",
                          Width: "auto",
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
            <Box
              sx={{
                bgcolor: "#1a1c1e",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <BasicPagination pages={pages} setPages={setPages} />
            </Box>
          </Grid>
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="20px"
            padding="20px"
            backgroundColor="#1a1c1e"
            width="40vw"
            boxShadow="2px 3px 10px 0px"
          >

            <Filter />
            <Filters  genero={genero} setGenero={setGenero}/>

          </Grid>
        </Box>
      </Grid>{" "}
    </>
  );
};
