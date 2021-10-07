import Box from 'lib/components/Box'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Accordion from '@mui/material/Accordion'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import Text from '../../../../../../../../lib/components/Text/index'

import * as styles from './styles.js'

export default function SoundSettingsUi() {
  return (
    <Box sx={styles.wrapper}>
      <Accordion>
        <AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
          <Text text='Sound' />
        </AccordionSummary>

        <AccordionDetails sx={{ display: 'grid', justifyContent: 'start' }}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Workout Sound</FormLabel>
            <RadioGroup aria-label='workout sound' name='row-radio-buttons-group'>
              <FormControlLabel
                value='voice'
                control={<Radio />}
                label='Voice'
                labelPlacement='start'
                sx={{ textAlign: 'left' }}
              />
              <FormControlLabel
                value='beep'
                control={<Radio />}
                label='Beep'
                labelPlacement='start'
                sx={{ textAlign: 'left' }}
              />
            </RadioGroup>
          </FormControl>

          <FormControl component='fieldset'>
            <FormLabel component='legend'>Rest Sound</FormLabel>
            <RadioGroup aria-label='rest sound' name='row-radio-buttons-group'>
              <FormControlLabel
                value='voice'
                control={<Radio />}
                label='Voice'
                labelPlacement='start'
                sx={{ textAlign: 'left' }}
              />
              <FormControlLabel
                value='beep'
                control={<Radio />}
                label='Beep'
                labelPlacement='start'
                sx={{ textAlign: 'left' }}
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
