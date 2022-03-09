import React, { useState } from 'react'

import MenuItem from '../../../../../../../Menu/MenuItem'
import Button from '../../../../../../../Button'
import Chevron from '../../../../../../../icons/Chevron'
import Box from '../../../../../../../Box'
import Popover from '../../../../../../../Popover'

import * as styles from './styles'

export default function TimersDropdownUi({ onTimerSelected, timers, selectedTimer }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const menuId = 'TimersDropdown'
  const menuButtonId = 'TimersDropdown'
  const open = Boolean(anchorEl)
  const id = open ? 'AppBar_Menu' : undefined

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onItemClick = (selectedItem) => {
    handleClose()
    onTimerSelected(selectedItem)
  }

  return (
    <Box sx={{ maxWidth: 200 }}>
      <Button
        id={menuButtonId}
        aria-controls={menuId}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant={'noGradient' as any}
        endIcon={<Chevron sx={{ width: '11px' }} />}
        sx={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <Box
          sx={{
            fontSize: '17px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textTransform: 'capitalize',
          }}
          component='h1'
        >
          {selectedTimer?.name || 'Timers'}
        </Box>
      </Button>

      {timers?.length ? (
        <Popover
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
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
          {timers.map((timer) => (
            <MenuItem key={timer.id} sx={styles.items} onClick={() => onItemClick(timer)}>
              {timer.name}
            </MenuItem>
          ))}
        </Popover>
      ) : null}
    </Box>
  )
}
