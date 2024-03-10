import { AccordionDetails } from '@mui/material'
;
import React, { useContext } from 'react'
import { FilterBtnn } from '../FilterBtnn';
import { userContext } from '../../../../useContext/UserContext';

export const Species = () => {
  const { setPages, setEspecie } = useContext(userContext );
  let species = [
    "Human", "Alien", "Humanoid",
    "Poopybutthole", "Mythological", "Unknown",
    "Animal", "Disease","Robot","Cronenberg","Planet",
  ];
  return (
    <div>

<AccordionDetails>

        <div className="d-flex flex-wrap gap-3">
  {
    species.map((items,index) => (
       <FilterBtnn   setPages={setPages} task={setEspecie} index={index} name={species} items={items}  key={index}   /> 
       
       
       ) )}

        </div>
        </AccordionDetails>
    </div>
  )
}
