import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionMui from '@mui/material/Accordion'

import Text from '../Text'

export default function Accordion({ title, children }) {
  // TODO style https://www.figma.com/file/yrds3NAEgd2IjUlQmHugpk/Interval-Timer?node-id=392%3A268
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
