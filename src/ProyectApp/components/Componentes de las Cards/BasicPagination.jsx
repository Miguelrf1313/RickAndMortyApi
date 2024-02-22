import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function BasicPagination({pages, setPages}) {



    const onchange = (event, value) => {
           setPages(value)
    }
  return (
    <Stack  spacing={2}>
      <Pagination sx={{ ".css-1w880jr-MuiButtonBase-root-MuiPaginationItem-root":{color:'white'}, ".css-1v2lvtn-MuiPaginationItem-root":{color:'white'} }}   color='secondary' count={42} onChange={onchange}  pages={pages} />
      
    </Stack>
  );
}