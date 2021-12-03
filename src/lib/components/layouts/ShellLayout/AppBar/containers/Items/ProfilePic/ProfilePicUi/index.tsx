import { useEffect, useState } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import Avatar from '../../../../../../../Avatar'
import IconButton from '../../../../../../../IconButton'
import Popover from '../../../../../../../Popover'
import ContinueWithGoogle from '../../../../../../../firebase/ContinueWithGoogle'
import Box from '../../../../../../../Box'
import useAuth from '../../../../../../../../../globalState/useAuth/useAuth'
import SignOut from '../../../../../../../icons/SignOut'

import * as styles from './styles'
import SettingsLink from './SettingsLink'
import InstallWebApp from './InstallWebApp'

export default function ProfilePicUi() {
  const auth = useAuth()
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
    handleClose()
  }

  const onInstallWebAppClick = () => {
    handleClose()
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
          {!auth.user ? (
            <>
              <p className='title'>To sync timers across devices</p>
              <ContinueWithGoogle />
              <SettingsLink onSettingsClick={onSettingsClick} />
              <InstallWebApp onClick={onInstallWebAppClick} />
            </>
          ) : (
            <>
              <SettingsLink onSettingsClick={onSettingsClick} />
              <InstallWebApp onClick={onInstallWebAppClick} />
              <ListItemButton onClick={auth.signOutFromGoogle}>
                <ListItemIcon sx={{ minWidth: '35px' }}>
                  <SignOut sx={{ width: '17px' }} />
                </ListItemIcon>
                <ListItemText sx={{ color: 'white.main' }} primary='Sign Out' />
              </ListItemButton>
            </>
          )}
        </Box>
      </Popover>
    </>
  )
}
