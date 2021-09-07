import Avatar from '../../../../../../Avatar'
import IconButton from '../../../../../../IconButton'
import Popover from '../../../../../../Popover'
import ContinueWithGoogle from '../../../../../../firebase/ContinueWithGoogle'
import Box from '../../../../../../Box'

import * as styles from './styles'

export default function ProfilePic() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'AppBar_ProfilePic' : undefined

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar sx={{ width: '29px', height: '29px' }} aria-describedby={id} />
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
        <Box sx={styles.popopver}>
          <p className='title'>Sync timers across devices</p>
          <ContinueWithGoogle />
        </Box>
      </Popover>
    </>
  )
}
