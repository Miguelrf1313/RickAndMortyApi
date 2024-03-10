import { AccordionDetails } from '@mui/material'
;
import React, { useContext } from 'react'
import { FilterBtnn } from '../FilterBtnn';
import { userContext } from '../../../../useContext/UserContext';

export const Status = () => {
  const { setPages, setEstado } = useContext(userContext );
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <div>

<AccordionDetails >
      <div className=" d-flex flex-wrap gap-3">
  {
    status.map((items,index) => (
       <FilterBtnn   task={setEstado} setPages={setPages} index={index} name={status} items={items}  key={index}/> 
       
       ) )}

    </div>
        </AccordionDetails>


      </div>
  )
}
