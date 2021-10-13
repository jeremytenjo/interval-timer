import VolumeIcon from '../../../../../../../icons/Volume'
import IconButton from '../../../../../../../IconButton'
import Popover from '../../../../../../../Popover'
import Slider from '../../../../../../../Slider'
import VolumeDown from '../../../../../../../icons/VolumeDown'
import VolumeUp from '../../../../../../../icons/VolumeUp'
import Box from '../../../../../../../Box'
import VolumeMuted from '../../../../../../../icons/VolumeMuted'

import * as styles from './styles'
import { useState } from 'react'

export default function VolumeControlUi({
  onMute = () => null,
  onSetToMaxVolume = () => null,
  isMuted,
  defaultValue,
  updateVolume,
}) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onVolumeChange = (_, value) => {
    updateVolume(value)
  }

  const mute = () => {
    updateVolume(0)
    onMute()
  }

  const setToMaxVolume = () => {
    updateVolume(100)
    onSetToMaxVolume()
  }

  const open = Boolean(anchorEl)
  const id = open ? 'AppBar_VolumeControl' : undefined

  return (
    <>
      <IconButton onClick={handleClick}>
        {isMuted ? <VolumeMuted /> : <VolumeIcon />}
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
              defaultValue={defaultValue}
              aria-label='Volume'
              value={defaultValue}
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
