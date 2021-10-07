import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionMui from '@mui/material/Accordion'

import Text from '../Text'

export default function Accordion({ title, children }) {
  return (
    <AccordionMui>
      <AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
        <Text text={title} />
      </AccordionSummary>

      <AccordionDetails sx={{ display: 'grid', justifyContent: 'start' }}>
        {children}
      </AccordionDetails>
    </AccordionMui>
  )
}
