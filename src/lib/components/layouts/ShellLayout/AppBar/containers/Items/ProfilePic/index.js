import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from 'react-router'

import Avatar from '../../../../../../Avatar'
import IconButton from '../../../../../../IconButton'
import Popover from '../../../../../../Popover'
import ContinueWithGoogle from '../../../../../../firebase/ContinueWithGoogle'
import Box from '../../../../../../Box'
import useAuth from '../../../../../../../../globalState/useAuth'
import SignOut from '../../../../../../icons/SignOut'
import Settings from '../../../../../../icons/Settings'

import * as styles from './styles'

export default function ProfilePic() {
  const auth = useAuth()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'AppBar_ProfilePic' : undefined

  useEffect(() => {
    handleClose()
  }, [auth.user])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onSettingsClick = () => {
    navigate('/settings')
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar
          sx={{ width: '29px', height: '29px' }}
          aria-describedby={id}
          src={auth?.user?.photoURL}
        />
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
          {auth.user ? (
            <>
              <ListItemButton onClick={onSettingsClick}>
                <ListItemIcon sx={{ minWidth: '35px' }}>
                  <Settings sx={{ width: '22px', color: 'white.main' }} />
                </ListItemIcon>
                <ListItemText sx={{ color: 'white.main' }} primary='Settings' />
              </ListItemButton>

              <ListItemButton onClick={auth.signOutFromGoogle}>
                <ListItemIcon sx={{ minWidth: '35px' }}>
                  <SignOut sx={{ width: '17px' }} />
                </ListItemIcon>
                <ListItemText sx={{ color: 'white.main' }} primary='Sign Out' />
              </ListItemButton>
            </>
          ) : (
            <>
              <p className='title'>Sync timers across devices</p>
              <ContinueWithGoogle />
            </>
          )}
        </Box>
      </Popover>
    </>
  )
}
