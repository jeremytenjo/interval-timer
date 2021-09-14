import TimePicker from '@mui/lab/TimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import Box from '../../Box'
import TextField from '../Textfield/index'

import * as styles from './styles'

export default function MinuteSelector({ title }) {
  const [value, setValue] = React.useState(new Date())

  return (
    <Box sx={styles.wrapper}>
      <p className='title'>{title}</p>

      <Box sx={styles.info}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            ampmInClock={false}
            views={['minutes', 'seconds']}
            inputFormat='mm:ss'
            mask='__:__'
            label='Minutes and seconds'
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(params) => {
              return <TextField {...params} />
            }}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  )
}
