import Box from 'lib/components/Box'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { useFormContext, Controller } from 'react-hook-form'

import Accordion from '../../../../../../../../../lib/components/Accordion'

import * as styles from './styles.js'

export default function SoundSettingsUi() {
  const methods = useFormContext()

  // TODO organize into separatoe compononts

  return (
    <Box sx={styles.wrapper}>
      <Accordion title='Sound'>
        <Controller
          name='workoutSound'
          control={methods.control}
          defaultValue='voice'
          render={({ field }) => (
            <FormControl component='fieldset' {...field}>
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
          )}
        />

        <Controller
          name='restSound'
          control={methods.control}
          defaultValue='voice'
          render={({ field }) => (
            <FormControl component='fieldset' {...field}>
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
          )}
        />
      </Accordion>
    </Box>
  )
}
