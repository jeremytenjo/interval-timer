import VolumeIcon from '../../../../../../icons/Volume'
import IconButton from '../../../../../../IconButton'
import Popover from '../../../../../../Popover'
import Slider from '../../../../../../Slider'
import VolumeDown from '../../../../../../icons/VolumeDown'
import VolumeUp from '../../../../../../icons/VolumeUp'
import Box from '../../../../../../Box'

import * as styles from './styles'

export default function VolumeControl() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [volumeAmount, setVolumeAmount] = useState(50)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onVolumeChange = (event, newValue) => {
    setVolumeAmount(newValue)
  }

  const mute = () => {
    setVolumeAmount(0)
  }

  const setToMaxVolume = () => {
    setVolumeAmount(100)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'AppBar_VolumeControl' : undefined

  return (
    <>
      <IconButton onClick={handleClick}>
        <VolumeIcon />
      </IconButton>

      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Box sx={styles.sliderWrapper}>
          <Box sx={styles.sliderWrapperInner}>
            <IconButton onClick={mute}>
              <VolumeDown sx={{ stroke: 'white' }} />
            </IconButton>

            <Slider
              sx={styles.slider}
              aria-label='Volume'
              value={volumeAmount}
              onChange={onVolumeChange}
            />

            <IconButton onClick={setToMaxVolume}>
              <VolumeUp sx={{ stroke: 'white' }} />
            </IconButton>
          </Box>
        </Box>
      </Popover>
    </>
  )
}
