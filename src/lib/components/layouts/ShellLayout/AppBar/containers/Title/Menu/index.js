import MenuItem from '../../../../../../Menu/MenuItem'
import Button from '../../../../../../Button'
import Chevron from '../../../../../../icons/Chevron'
import Box from '../../../../../../Box'
import Popover from '../../../../../../Popover'

import * as styles from './styles'

export default function TopBarMenu() {
  const menuId = 'TopBarMenu'
  const menuButtonId = 'TopBarMenu'
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const id = open ? 'AppBar_Menu' : undefined

  return (
    <Box sx={{ maxWidth: 200 }}>
      <Button
        id={menuButtonId}
        aria-controls={menuId}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='noGradient'
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
          No Timers saved
        </Box>
      </Button>

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
        <MenuItem sx={styles.items} onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem sx={styles.items} onClick={handleClose}>
          My account
        </MenuItem>
        <MenuItem sx={styles.items} onClick={handleClose}>
          Logout
        </MenuItem>
      </Popover>
    </Box>
  )
}
