import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {startDeletCharacter} from '../../../slices/ChraracterSlice/thunks'
import { setActiveC } from "../../../slices/ChraracterSlice/ChraracterSlcie";
import { ExpandMore } from "@mui/icons-material";
import { useState } from 'react';

export const RecetsItems = ({status, image, name, id, created, dni}) => {
    const startAciveC = (id,name) => {
        // dispactch(setActiveC({...favorite}))
        
    }
const dispactch = useDispatch()







  const onDeleT = () => {
    dispactch(setActiveC({status, image, name, id, created, dni}))
    dispactch(startDeletCharacter())
 
  
  }
  return (
    <>  
    <Grid
          item
          sx={{
            backgroundColor:'#1a1c1e',
            width: { lg: "45vw" },
            borderRadius:'10px',
            // border: "solid 0.5px gray",
            boxShadow:'2px 3px 10px 0px',
            display: "flex",
            margin: "10px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >

          <CardActionArea
          
            sx={{
              display: "flex",
              flexWrap: "wrap",
              overflow: "hidden",
              width: "20%",
              margin: "15px",
            }}
          >
            {(() => {
              if (status == "Alive") {
                return (
                  <CardMedia
                    display="flex"
                    sx={{
                      // border: "#212b36  solid 0.125em",
                      boxShadow: "0 0 1em 0 #212b36",
                      borderRadius: "0.158em",
                      maxWidth: "9vw",
                      height: "13vh",
                      display: "flex",
                    }}
                    component="img"
                    image={image}
                    alt={name}
                  />
                );
              } else if (status == "Dead") {
                return (
                  <CardMedia
                    display="flex"
                    sx={{
                      // border: "#C70039  solid 0.125em",
                      boxShadow: "0 0 1em 0 #C70039",
                      borderRadius: "0.158em",
                      maxWidth: "9vw",
                      height: "13vh",
                      display: "flex",
                    }}
                    component="img"
                    image={image}
                    alt={name}
                  />
                );
              } else {
                return (   
                  <CardMedia
                    display="flex"
                    sx={{
                      // border: "#EEEEEE  solid 0.125em",
                      boxShadow: "0 0 1em 0 #EEEEEE",
                      borderRadius: "0.158em",
                      maxWidth: "9vw",
                      height: "13vh",
                      display: "flex",
                    }}
                    component="img"
                    image={image}
                    alt={name}
                  />
                );
              }
            })()}
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
              <Typography sx={{ color: "white" }}> {name} </Typography>
              <IconButton onClick={onDeleT}>
                <DeleteForeverIcon onClick={startAciveC(id,name)  }  color="error" />
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
                justifyContent: "space-between",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <Typography sx={{ color: "white" }}> {status} </Typography>
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
                {created}
              
              </Typography>
            </Grid>
          </Grid>
        </Grid>
               
               </>
  )
}
