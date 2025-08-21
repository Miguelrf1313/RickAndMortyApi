
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Box,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startDeletCharacter } from '../../../slices/ChraracterSlice/thunks'
import { setActiveC } from "../../../slices/ChraracterSlice/ChraracterSlcie";
import { useEffect } from 'react';


export const RecetsItems = ({ }) => {

  const { favorite } = useSelector((state) => state.characters);

  const dispactch = useDispatch()

  const onDeleT = (dni) => {
    dispactch(startDeletCharacter(dni));
  }


//   const onDeleT = (id) => {
//   dispactch(startDeletCharacter(id));
//   console.log("Click eliminar:", id);
// }


  return (
    <>

      {
        favorite.map((fa) => (
          <Grid
        
          key={fa.id}
            item
            sx={{
              backgroundColor: '#1a1c1e',
              width: { lg: "45vw" },
              borderRadius: '10px',
              boxShadow: '2px 3px 10px 0px',
              display: "flex",
              margin: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >


            <CardActionArea

              sx={{
                display: "flex",
                flexWrap: "wrap",
                overflow: "hidden",
              }}
            >
              <CardMedia
                display="flex"
                sx={{
                  boxShadow: "0 0 1em 0 #212b36",
                  borderRadius: "0.158em",
                  display: "flex",
                }}
                component="img"
                image={fa.image}
                alt={fa.dni}
              />

            </CardActionArea>

            <Grid container width="30vw" margin="10px" padding="10px">
              <Grid
                item
                sx={{
                  width: { lg: "100vw", sm: "20vw" },
                  height: "5vh",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  paddingRight: "10px",

                }}
              >
                <Typography sx={{ color: "white", fontFamily: 'monospace', fontWeight: 'bold' }}> {fa.dni} </Typography>
                <IconButton key={fa.id} onClick={ () => onDeleT(fa.dni) }>
                  <DeleteForeverIcon color="error" />
                </IconButton>
              </Grid>
              <Grid
                item
                sx={{
                  width: { lg: "100vw", sm: "20vw" },
                  height: "5vh",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                  paddingLeft: "10px",
                  paddingRight: "10px",

                  gap: '10px'
                }}
              >


                {(() => {
                  if (fa.status == "Alive") {
                    return (
                      <RadioButtonCheckedIcon sx={{ color: '#74E291' }} />
                    );
                  } else if (fa.status == "Dead") {
                    return (
                      <RadioButtonCheckedIcon color='error' />
                    );
                  } else {
                    return (
                      <RadioButtonCheckedIcon sx={{ color: 'white' }} />
                    );
                  }
                })()}
                <Typography sx={{ color: "white" }}> {fa.status} </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  width: { lg: "100vw", sm: "20vw" },
                  height: "5vh",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  {" "}
                  {fa.created}

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )

        )
      }


    </>
  )
}
