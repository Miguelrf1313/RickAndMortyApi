import SimpleBottomNavigation from "./SimpleBottomNavigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
export const Favorite = ({favorite}) => {
  return (
    <>
    <SimpleBottomNavigation />
    {favorite.map((favo) => (
      <Grid
        item
        key={favo.dni}
        sx={{
          width: { lg: "45vw" },
          border: "solid 1px gray",
          display: "flex",
          margin: "10px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CardActionArea
          key={favo.dni}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            overflow: "hidden",
            width: "20%",
            margin: "15px",
          }}
        >
          {(() => {
            if (favo.status == "Alive") {
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
                  }}
                  component="img"
                  image={favo.image}
                  alt={favo.name}
                />
              );
            } else if (favo.status == "Dead") {
              return (
                <CardMedia
                  display="flex"
                  sx={{
                    border: "#C70039  solid 0.125em",
                    boxShadow: "0 0 1em 0 #C70039",

                    maxWidth: "9vw",
                    height: "13vh",
                    display: "flex",
                  }}
                  component="img"
                  image={favo.image}
                  alt={favo.name}
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
                  image={favo.image}
                  alt={favo.name}
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
            <Typography sx={{ color: "white" }}> {favo.name} </Typography>
            <IconButton>
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
              justifyContent: "space-between",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Typography sx={{ color: "white" }}> {favo.status} </Typography>
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
              {favo.created}
              <Typography>Ver mas...</Typography>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    ))}
  </>
  )
}
