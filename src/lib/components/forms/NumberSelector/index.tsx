import React, { useState } from 'react'

import Box from '../../Box/Box'
import PlusRound from '../../icons/PlusRound'
import MinusRound from '../../icons/MinusRound'
import IconButton from '../../IconButton/IconButton'

import * as styles from './styles'

type Props = {
  id: string
  title: string
  stepperTime?: number
  onChange: (payload: any) => void
  defaultValue: number
}

export default function NumberSelector({
  title,
  id,
  stepperTime = 5,
  onChange = () => null,
  defaultValue = 1,
}: Props) {
  const [timeNumber, setTimeNumber] = useState(defaultValue)

  const onPlusClick = () => {
    const nextNumber = timeNumber + stepperTime
    if (nextNumber === 6) {
      setTimeNumber(5)
      onChange(5)
    } else {
      setTimeNumber(nextNumber)
      onChange(nextNumber)
    }
  }

  const onMinusClick = () => {
    const nextNumber = timeNumber - stepperTime
    if (nextNumber <= 1) {
      setTimeNumber(1)
      onChange(1)
    } else {
      setTimeNumber(nextNumber)
      onChange(nextNumber)
    }
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10)

    setTimeNumber(value)
    onChange(value)
  }

  const onBlur = () => {
    if (timeNumber <= 0) {
      setTimeNumber(1)
      onChange(1)
    }
  }

  return (
    <Box sx={styles.wrapper}>
      <p className='title'>{title}</p>

      <Box sx={styles.info}>
        <IconButton onClick={onMinusClick}>
          <MinusRound />
        </IconButton>

        <Box sx={styles.inputs}>
          <input
            type='number'
            name={id + '-number'}
            placeholder={'1'}
            value={timeNumber}
            onChange={handleChange}
            onBlur={onBlur}
          />
        </Box>

        <IconButton onClick={onPlusClick}>
          <PlusRound />
        </IconButton>
      </Box>
    </Box>
  )
}
