import Box from '../../Box'
import PlusRound from '../../icons/PlusRound'
import MinusRound from '../../icons/MinusRound'
import IconButton from '../../IconButton'

import * as styles from './styles'

export default function NumberSelector({ title, id, stepperTime = 5 }) {
  const [timeNumber, setTimeNumber] = useState(1)

  const onPlusClick = () => {
    const nextNumber = parseInt(timeNumber, 10) + stepperTime
    if (nextNumber === 6) {
      setTimeNumber(5)
    } else setTimeNumber(nextNumber)
  }

  const onMinusClick = () => {
    const nextNumber = parseInt(timeNumber, 10) - stepperTime
    if (nextNumber <= 1) {
      setTimeNumber(1)
    } else {
      setTimeNumber(nextNumber)
    }
  }

  const onChange = (e) => {
    const value = e.target.value

    setTimeNumber(value)
  }

  const onBlur = () => {
    if (timeNumber <= 0) {
      setTimeNumber(1)
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
            onChange={onChange}
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
