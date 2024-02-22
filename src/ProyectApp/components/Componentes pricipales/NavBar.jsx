// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import Switch from "@mui/material/Switch";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import Avatar from "@mui/material/Avatar";

// import { useDispatch, useSelector } from "react-redux";
// import { startLogOut } from "../../../auth/thunks";
// import { sideBarActive } from "../../../slices/ProyectSlice/ProyectSlice";
// import { useState } from "react";
// import { SideBar } from "./SideBar";
// export const NavBar = () => {
//   const chatActive = () => {
//     dispatch(sideBarActive());
//   };


  
//   const [open, setOpen] = useState  (false)

//   const handleOpen = () =>{
//     setOpen(true)
//   }
//   const hanledClose = () =>{
//     setOpen(false)
//   }
  
  

//   const dispatch = useDispatch();
//   const { photoURL, displayName } = useSelector((state) => state.auth);

//   const onLogOut = () => {
//     dispatch(startLogOut());
//   };

//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>


//           <SideBar/>
//           {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//             open={open}
//             onClick={handleOpen}
            
//           >
//             <MenuIcon /> */}
//           {/* </IconButton> */}
//           <Typography
//             color="secondary"
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1 }}
//           >
//             {displayName}
//           </Typography>
//           {auth && (
//             <div>
//               <FormControlLabel
//                 control={
//                   <Switch
//                     color="secondary"
//                     checked={auth}
//                     onChange={handleChange}
//                     onClick={onLogOut}
//                     aria-label="login switch"
//                   />
//                 }
//                 label={auth ? "Logout" : "Login"}
//               />
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <Avatar alt="Remy Sharp" src={photoURL} />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//               </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };
