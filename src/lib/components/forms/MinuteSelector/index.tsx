import React from 'react'

import TimePicker from '../../time/TimePicker'
import Box from '../../Box/Box'
import TextField from '../Textfield/Textfield'

import * as styles from './styles'

type Props = {
  title: string
  onChange: (payload: any) => void
  defaultValue: number
}

export default function MinuteSelector({
  title,
  onChange = () => null,
  defaultValue = 1000,
}: Props) {
  const [value, setValue] = React.useState(new Date(defaultValue))

  const updateValue = (newValue) => {
    const minutes = newValue?.getMinutes() || 0
    const seconds = newValue?.getSeconds() || 0
    const payload = {
      minutes,
      seconds,
    }
    setValue(newValue)
    onChange(payload)
  }

  return (
    <Box sx={styles.wrapper}>
      <p className='title'>{title}</p>

      <Box sx={styles.info}>
        <TimePicker
          ampm={false}
          ampmInClock={false}
          views={['minutes', 'seconds']}
          inputFormat='mm:ss'
          mask='__:__'
          label='Minutes and seconds'
          value={value}
          onChange={updateValue}
          renderInput={(params) => {
            return <TextField {...params} />
          }}
          DialogProps={{ PaperProps: { sx: styles.dialog } }}
        />
      </Box>
    </Box>
  )
}
