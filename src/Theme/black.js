import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blackTheme = createTheme({
    palette:{
        primary: {
            main: '#2f3227'
        },
        secondary: {
            main: '#ffc400'
        },
        
        error:{
            main: red.A400
        }
    }
})