import Box from 'lib/components/Box'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Accordion from '@mui/material/Accordion'

import Text from '../../../../../../lib/components/Text'

import * as styles from './styles.js'

export default function SoundSettingsUi() {
  return (
    <Box sx={styles.wrapper}>
      <Accordion>
        <AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
          <Text text='Sound' />
        </AccordionSummary>
        <AccordionDetails>
          <Text
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
      lacus ex, sit amet blandit leo lobortis eget.'
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
