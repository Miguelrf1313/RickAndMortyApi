import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ModalItem({newFavorite,characterss}) {
  const [expanded, setExpanded] = React.useState(false);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'#212b36', color:'white', boxShadow:'2px 3px 10px 0px black'  }}>
      

      
      <CardContent>
      <Typography  sx={{display:'flex' ,justifyContent:'center'}} variant="h4" color="white">
        {characterss.name}
        </Typography>
       <Typography sx={{display:'flex' ,justifyContent:'center'}} variant="body2" color="white">
        {characterss.created}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image={characterss.image}
        alt="Paella dish"
      />
      <CardContent sx={{width:'100%', backgroundColor:'#1a1c1e', display:'flex', justifyContent:'space-between', flexDirection:'row'}}>
        <Typography variant="body2" color="white">
        {characterss.gender}
        </Typography>
        <Typography variant="body2" color="white">
        {characterss.status}
        </Typography>
        <Typography variant="body2" color="white">
        {characterss.species}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'center', display:'flex'}} disableSpacing>
        <IconButton  onClick={newFavorite} aria-label="add to favorites">
          <FavoriteIcon color='error' />
        </IconButton>
  
       
      </CardActions>
    
    </Card>
  );
}