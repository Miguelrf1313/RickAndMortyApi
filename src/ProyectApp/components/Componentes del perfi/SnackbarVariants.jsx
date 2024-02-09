// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import { useContext } from 'react';
// import {userContext} from '../../useContext/UserContext'
// export default function PositionedSnackbar() {
 

//   const {state, setState} = useContext(userContext)



//   const buttons = (
//     <React.Fragment>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
       
//         <Grid item xs={6} textAlign="right">
//           <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
//             Bottom-Right
//           </Button>
//         </Grid>
    
//       </Box>
//     </React.Fragment>
//   );

//   return (
//     <Box sx={{ width: 500 }}>
//       {buttons}
//       <Snackbar
//         anchorOrigin={{ vertical, horizontal }}
//         open={open}
//         onClose={handleClose}
//         message="I love snacks"
//         key={vertical + horizontal}
//       />
//     </Box>
//   );
// }