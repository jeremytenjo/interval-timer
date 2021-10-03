import Box from 'lib/components/Box'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'

import * as styles from './styles.js'

export default function SoundSettings() {
  // TODO add settings, pick wourkout sound, pick rest sound from beep or voice
  return (
    <Box sx={styles.wrapper}>
      <Accordion>
        <AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
          <Typography>Sound</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
