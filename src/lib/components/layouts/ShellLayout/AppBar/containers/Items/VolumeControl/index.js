import VolumeIcon from '../../../../../../icons/Volume'
import IconButton from '../../../../../../IconButton'
import Popover from '../../../../../../Popover'
import Slider from '../../../../../../Slider'
import VolumeDown from '../../../../../../icons/VolumeDown'
import VolumeUp from '../../../../../../icons/VolumeUp'

import * as styles from './styles'

export default function VolumeControl() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
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
          horizontal: 'right',
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Box sx={styles.sliderWrapper}>
          <VolumeDown />
          <Slider sx={styles.slider} aria-label='Volume' />
          <VolumeUp />
        </Box>
      </Popover>
    </>
  )
}
