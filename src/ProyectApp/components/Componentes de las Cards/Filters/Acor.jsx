import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Gender } from './Category/Gender';
import { Species } from './Category/Species';
import { Status } from './Category/Status';

export default function acor() {
  return (
    <div>
      <Accordion>
      <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography> Genero </Typography>
        </AccordionSummary>
       <Gender/>
      </Accordion>




      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Especies</Typography>
        </AccordionSummary>
       <Species/>
      </Accordion>




      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography> Estado </Typography>
        </AccordionSummary>

          <Status/>
      </Accordion>

    
    </div>
  );
}
