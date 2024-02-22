import {
  Box,

  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useSelector } from "react-redux";
import section from "../../assets/section.jpg"; 
import { Recents } from "./Recents";





export const CardsContainer = () => {
  const { favorite, perfilState } = useSelector((state) => state.characters);

  const { photoURL, displayName, status, uid } = useSelector(
    (state) => state.auth
  );


    

   
  return (
    <>

      {/* CONTENEDOR DE TARJETAS DE PERSONAJES  */}

      <Grid
        backgroundColor="#252525"
        container
        gap="30px"
        display="flex"
        padding="20px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
      >
        <Grid variant="container" width='100%' display="flex" backgroundColor="#252525">
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
                width: "60%",
                backgroundColor: "#041C32",
                minHeight:'180vh',
                flexDirection: "column",
                boxShadow: '1.5px 3px 39px 0.5px black',
                border:' solid 0.5px'
                
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
                    <ArrowBackIosIcon
                      sx={{
                        color: "white",
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
                sx={{  zIndex:'10', boxShadow:'0px 1px 20px 0px black',
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
                    top: "35%",
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
                height="50vh"
                display="flex"
                justifyContent="start"
                alignItems="end"
                width="100%"
              >
                <Box
                  sx={{
                    width: { lg: "100%" },
       
                    backgroundColor: "#041C32",
       
                    display:'flex',
                    color: "white",
                    justifyContent: "center",
                    alignItems: "start",
                    padding: "10px",
                    flexDirection:'column'
                  }}
                >
                  <Grid
                    item
                    sx={{
                      width:'50vw',
                      display: "flex",
                      margin: "50px",
                      justifyContent: "center",
                      gap:'10px',
                    alignItems:'left',
                      flexDirection:'column',
                      padding:'25px',
                      backgroundColor :'#161c24',
                      boxShadow:'0px 3px 10px 2px black',
                    
                    }}
                  >
           
                    <Typography sx={{  fontWeight:'bold',
                      fontFamily:'monospace'}} > {displayName}   </Typography>
                    <Typography > Estado:  {status} </Typography>
                    <Typography > Identificación: {uid} </Typography>
                  </Grid>
             

             
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
  
                    flexDirection: "column",
                    boxShadow:'0px 3px 10px 2px',
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: "#161c24",
                    padding: "20px",
                    gap:'20px'
                  }}
                >

                  
            
                   
                <Recents favorite={favorite} /> 
                 
                   


 
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

       
    
      </Grid>
    </>
  );
};
