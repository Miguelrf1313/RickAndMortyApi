import { AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React, { useContext } from 'react'
import { FilterBtnn } from '../FilterBtnn';
import { userContext } from '../../../../useContext/UserContext';

export const Gender = () => {
  const { setPages, setGenero } = useContext(userContext );
  let genders = ["female", "male", "genderless", "unknown"]
  return (
    <div>


        <AccordionDetails>

        <div className="d-flex flex-wrap gap-3">

   {genders.map((items, index) => {
    return (
      <FilterBtnn  setPages={setPages} task={setGenero} 
        index={index} name={genders} items={items}  key={index}
       
       
      />
      );
    })}
        </div>
        </AccordionDetails>
    </div>
  )
}
