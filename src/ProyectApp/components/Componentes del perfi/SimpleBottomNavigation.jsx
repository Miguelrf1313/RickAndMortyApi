import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
      sx={{backgroundColor:'#212b36',color:'error', borderRadius:'8px', boxShadow:'2px 3px 7px 0px' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
     
        <BottomNavigationAction  sx={{".css-imwso6-MuiBottomNavigationAction-label":{color:'white', fontFamily:'monospace'}}} label="Favorites" icon={<FavoriteIcon color='error'/>} />
      </BottomNavigation>
    </Box>
  );
}
