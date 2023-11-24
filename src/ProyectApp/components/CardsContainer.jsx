import {
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  Grid,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCharactersApi} from "../../thunks/thunks";
import { FilterCharacters } from "./FilterCharacters";

export const CardsContainer = () => {


 
const [pages, setPages] = useState(0)
const [names, setNames] = useState('')

  const {
    characters = [],
    loadingC,
    name,
    page,
  } = useSelector((state) => state.proyect);

  const dispatch = useDispatch();

  useEffect(() => {
    
  dispatch(getCharactersApi(pages, names))
  }, [pages, names])
  

  console.log(names)

 




  return (
    <>
      <Grid
        style={{ backgroundColor: "black" }}
        display="flex"
        height="300vh"
        width="100%"
        // overflow='hidden'
        container
      >
        {/* CONTENEDOR DE TARJETAS DE PERSONAJES  */}

        <Box
          paddingTop='200px'
          component="div"
          width="100%"
          margin="30px"
          height="150VH"
          gap='50px'
          // backgroundColor='RED'
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          
          <FilterCharacters setPages={setPages} setNames={setNames} names={names} />
          <Grid
            item
            display="flex"
            gap="0px"
            justifyContent="center"
            alignItems="center"
            // backgroundColor="BLUE"s  
            width="100%"
            xs={12}
            sm={12}
          >
            {/* BOTON DERECHO */}
            <Grid
              component="div"
              display="flex"
              width="50px"
              height="20%"
              border="# solid 0.125em"
              borderRadius="0.158em"
              backgroundColor="#ffffff30"
            >
              <IconButton onClick={() =>  setPages(pages - 1) }>
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
              sx={{
                height: "85%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "20px",
                padding: "20px white",
                // overflow: "hidden",
                // backgroundColor:'pink'
              }}
            >
              {characters.map((chara) => (
                <CardActionArea
                  key={chara.id}
                  sx={{ overflow: "hidden", width: "15%", height: "25%" }}
                >
                  {(() => {
                    if (chara.status == "Alive") {
                      return (
                        <CardMedia
                          display="flex"
                          flexDirection="row"
                          sx={{
                            border: "#20c439  solid 0.125em",
                            boxShadow: "0 0 1em 0 #20c439",
                            borderRadius: "0.158em",
                            maxWidth: "21vw%",
                            height: "30vh",
                            display: "flex",
                            flexDirection: "row",
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
                          flexDirection="row"
                          sx={{
                            border: "#C70039  solid 0.125em",
                            boxShadow: "0 0 1em 0 #C70039",
                            borderRadius: "0.158em",
                            maxWidth: "15vw",
                            height: "22vh",
                            display: "flex",
                            flexDirection: "row",
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
                          flexDirection="row"
                          sx={{
                            border: "#EEEEEE  solid 0.125em",
                            boxShadow: "0 0 1em 0 #EEEEEE",
                            borderRadius: "0.158em",
                            maxWidth: "18vw",
                            height: "29vh",
                            display: "flex",
                            flexDirection: "row",
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
              width="50px"
              height="20%"
              border=" solid 0.125em"
              // boxShadow="0 0 1em 0 #20c439"
              borderRadius="0.158em"
              backgroundColor="#ffffff30"
            >
              <IconButton  onClick={() => setPages( pages + 1 )} >
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
        </Box>
      </Grid>
    </>
  );
};
