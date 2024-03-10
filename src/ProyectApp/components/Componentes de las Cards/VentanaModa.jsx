import Box from "@mui/material/Box";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { createNewFavorite } from "../../../slices/ChraracterSlice/thunks";
import { Grid, Snackbar } from "@mui/material";
import morty from "../../assets/morty.png";
import popo from "../../assets/pantalonesDePopo.png";
import ModalItem from "./ModalItem";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1a1c1e",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  flexDirection: "column",
  display: "flex",
};




export const Modal1 = ({ handleClose, open, ids }) => {




  const [denegado, setDenegado] = React.useState({
    open1: false,
    vertical: "bottom",
    horizontal: "right",
  });

  const [aprobado, setAprobado] = React.useState({
    open2: false,
                
  });

  const { vertical, horizontal, open1 } = denegado;

  const { open2 } = aprobado;

  const handleCloses = () => {
    setDenegado({ ...denegado, open1: false });
    setAprobado({ ...aprobado, open2: false });
  };
 
  const denegar = (newState) => {
    setDenegado({ ...newState, open1: true });
  };

  
  const aprobar = (newState) => {
    setAprobado({ ...newState, open2: true });
  };




  



  const { favorite } = useSelector((state) => state.characters);
  const [value, setValue] = React.useState([]);

  const dispatch = useDispatch();

  var arrayDeIds = favorite.map(function (objeto) {
    return objeto.id;
  });

  const idss = arrayDeIds;

  const newFavorite = () => {
    // Verificar si el ID ya existe en el array
    const personajeId = characterss.id;
    if (idss.includes(personajeId)) {
      denegar({ vertical: "bottom", horizontal: "right" });
    } else {
      // Si el ID no existe, realiza el dispatch de la acción
      aprobar({verticall:"bottom", horizontall:"right"})
      dispatch(createNewFavorite(characterss));


    }
  };
  const [characterss, setcharacters] = React.useState([]);
  let api = `https://rickandmortyapi.com/api/character/${ids}`;
  React.useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setcharacters(data);
    })();
  }, [api]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open1}
        onClose={handleCloses}
        autoHideDuration={3000}
        // message="I love snacks"
        key={vertical + horizontal}
      >
        <Grid item 
        sx={{ 
          backgroundColor: "#EEEDEB",
           width: "15rem", 
           display:'flex',
           flexDirection:'row',
           justifyContent:'space-around',
           alignItems:'center',
           p:'10px',
           borderRadius:'20px'
           
           
           }}>
          <img className="morty" src={morty} alt="" />
          <Typography sx={{ color: "black", width:'10rem', textAlign:'center', p:'10px', fontWeight:'600', fontFamily:'monospace', fontSize:'1.5vw' }}>
            {" "}
            Santo cielos Rick, parece que ya tienes a este en tu lista!{" "}
          </Typography>
        </Grid>
      </Snackbar>


      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open2}
        onClose={handleCloses}
        autoHideDuration={3000}
        // message="I love snacks"
        key={vertical + horizontal}
      >
        <Grid item 
        sx={{ 
          backgroundColor: "#EEEDEB",
           display:'flex',
           flexDirection:'row',
           justifyContent:'space-around',
           alignItems:'center',
           p:'10px',
           borderRadius:'20px'
           
           
           }}>
          <img className="popo" src={popo} alt="" />
          <Typography sx={{ color: "black", width:'10rem', textAlign:'center', p:'10px', fontWeight:'600', fontFamily:'monospace', fontSize:'1.5vw' }}>
            {" "}
           ¡Parece que tenemos a un nuevo amigo en la familia!{" "}
          </Typography>
        </Grid>
      </Snackbar>
      <Modal
        className="animated bounceInUp"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalItem newFavorite={newFavorite} characterss={characterss} />
        </Box>
      </Modal>
    </div>
  );
};
