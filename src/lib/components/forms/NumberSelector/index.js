import Box from '../../Box'
import PlusRound from '../../icons/PlusRound'
import MinusRound from '../../icons/MinusRound'
import IconButton from '../../IconButton'

import * as styles from './styles'

export default function NumberSelector({ title, id, isTime, stepperTime = 5 }) {
  return (
    <Box sx={styles.wrapper}>
      <p className='title'>{title}</p>

      <Box sx={styles.info}>
        <IconButton>
          <MinusRound />
        </IconButton>

        <Box sx={styles.inputs}>
          {isTime && (
            <>
              <input type='number' name={id + '-minute'} placeholder='00' />
              <p>:</p>
            </>
          )}

          <input
            type='number'
            name={id + isTime ? '-second' : '-number'}
            placeholder={isTime ? '00' : '0'}
          />
        </Box>

        <IconButton>
          <PlusRound />
        </IconButton>
      </Box>
    </Box>
  )
}
