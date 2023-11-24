import {
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  Grid,
  TextField,
} from "@mui/material";

import section from "./assets/rick2.jpg";
import { useForm } from "../../hooks/useForm";
// import { nameSeshing } from "../../slices/ProyectSlice/ProyectSlice";

export const FilterCharacters = ({setPages,setNames, names}) => {


  const {onInputChange } = useForm();

  return (
    <>
      <Grid
        container
        // backgroundColor="red"
        width="100%"
        // minHeight="400px"
        display="flex"
        // margin="20px"

        sx={{
          backgroundImage: `url(${section})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          background: "",
        }}
      >
        {/* <img style={{ width: "100%" }} src={section} alt="" /> */}
        <Grid
          container
          spacing={0}
          maxWidth="100%"
          display="flex"
          alignItems="end"
          backgroundColor="rgb(0 0 0 / 20%)"
          justifyContent="space-around"
        >
          <Grid
            item
            marginBottom="none"
            display="flex"
            justifyContent="center"
            width="100%"
            padding="0px"
            xs={8}
            mb={8}
            sm={8}
          ></Grid>
          <Grid item xs={10} mb={2} sm={8}>
            <form>
              <Grid item>
                <TextField
                  id="outlined-search"
                  label="Buscar personaje"
                  type="search"
                  fullWidth
                  name="nombre"
                  value={names}
                  onChange={(e) => {
                    onInputChange
                    e.preventDefault();
                    setPages(1);
                    setNames(e.target.value)} }
                  sx={{ fontWeight: "500", background: "RED", color: "black" }}
                />
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
