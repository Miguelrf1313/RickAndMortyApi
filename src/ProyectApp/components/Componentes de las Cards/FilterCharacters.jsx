import * as React from 'react';

import { Especie, Estado, Genero,  } from './FiltradoGEE';

export const FilterCharacters = ({setPages,setNames,setGenero,setEstado,setEspecie, names}) =>{


  const clear = () => {
    setEspecie("");
    setGenero("");
    setEstado("");
  };
  return (

      <div className="col-20">
      <div className="contenedor-filter">
        <div className="text-center fw-bold fs-4 mb-2">Filter</div>
        <div
          onClick={clear}
          style={{ cursor: "pointer" }}
          className="text-center text-primary text-decoration-underline mb-4 limpiar  text-decoration-none "
        >
          Clear Filter
        </div>
      </div>

      <div className="accordion" id="accordionExample">
        <Estado setEstado={setEstado} setPag={setPages} />
        <Especie setSpecies={setEspecie} setPag={setPages} />
        <Genero setGender={setGenero} setPag={setPages} />
      </div>
    </div>

  );
}




































// import {

//   Box,
//   CardActionArea,
//   CardMedia,
//   IconButton,
//   Grid,
//   TextField,
//   Typography,
//   Button,
//   ButtonGroup,
// } from "@mui/material";



// // import { nameSeshing } from "../../slices/ProyectSlice/ProyectSlice";

// export const FilterCharacters = ({
//   setPages,
//   setNames,
//   names,
//   setGenero,
//   setEspecie,
//   setEstado,
// }) => {


 

//   return (
//     <>
   
      

//         <Grid container
       
        
        
//           display="flex"
        
//           backgroundColor='blue'
//         width='50%'
//         height='145vh'
       
        
//           lg={12}
//         >
//           <ButtonGroup
//             variant="contained"
//             color="secondary"
//             sx={{
         
//               width: "40vw",
//               gap: "5px",
//               flexWrap: "wrap",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-evenly",
//             }}
//             aria-label="outlined primary button group"
//           >
//             <Button onClick={() => setEspecie("Human")}>Humano</Button>
//             <Button onClick={() => setEspecie("Alien")}>Alien</Button>
//             <Button onClick={() => setEspecie("Humanoid")}>Humanoide</Button>
//             <Button onClick={() => setEspecie("Poopybutthole")}>
//               Pantalones de popo
//             </Button>
//             <Button onClick={() => setEspecie("Robot")}>Robot</Button>
//             <Button onClick={() => setEspecie("Disease")}>Enfermo</Button>
//             <Button onClick={() => setEspecie("Cronenberg")}>Cronenberg</Button>
//             <Button onClick={() => setEspecie("Unknown")}>Desconocido</Button>
//           </ButtonGroup>

//           <ButtonGroup
//             variant="contained"
//             color="error"
//             sx={{
    
//               width: "30vw",
//               gap: "5px",
//               flexWrap: "wrap",
//               display: "flex",
//               justifyContent: "space-evenly",
//               alignItems: "center",
//             }}
//             aria-label="outlined primary button group"
//           >
//             <Button onClick={() => setGenero("Male")}>Masculino</Button>
//             <Button onClick={() => setGenero("Female")}>Femenino</Button>
//             <Button onClick={() => setGenero("genderless")}>Sin genero</Button>
//             <Button onClick={() => setGenero("unknown")}>
//               Genero Desconocido
//             </Button>
//           </ButtonGroup>
//           <ButtonGroup
//             variant="contained"
//             color="warning"
//             sx={{
    
//               width: "100%",
//               gap: "5px",
//               flexWrap: "wrap",
//               justifyContent: "space-evenly",
//               display: "flex",
//               alignItems: "center",
//             }}
//             aria-label="outlined primary button group"
//           >
//             <Button onClick={() => setEstado("Dead")}>Muerto</Button>
//             <Button onClick={() => setGenero("Alive")}>Vivo</Button>
//             <Button onClick={() => setGenero("Unknown")}>Desconocido</Button>
//           </ButtonGroup>
//         </Grid>
//       <form>
       
//       </form>
//     </>
//   );
// };
