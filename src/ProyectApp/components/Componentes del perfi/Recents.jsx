import SimpleBottomNavigation from "./SimpleBottomNavigation";

import {RecetsItems} from './RecetsItems'
import { Skeleton } from "@mui/material";

export const Recents = ({favorite}) => {



    console.log(favorite)



  return (
    <>
      <SimpleBottomNavigation />
      {favorite.map((favo) => (
        <RecetsItems  key={favo.id} {  ...favo } />
        

        ))}
       <Skeleton variant="rectangular" width={'45vw'} height={'auto'} />
      
    </>
  );
};
