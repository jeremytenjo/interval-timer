import React, { useNavigate, useLocation } from 'react-router-dom'

import Edit from '../../../../../icons/Edit'
import Plus from '../../../../../icons/Plus'
import Box from '../../../../../Box/Box'
import IconButton from '../../../../../IconButton/IconButton'
import useAppBar from '../../../../../../../globalState/useAppBar/useAppBar'
import useTimers from '../../../../../../../data/timers/useTimers/useTimers'
import useTimer from '../../../../../../../globalState/useTimer/useTimer'

import VolumeControl from './VolumeControl'
import * as styles from './styles'
import ProfilePic from './ProfilePic'

export default function Items() {
  const navigate = useNavigate()
  const location = useLocation()
  const appBar = useAppBar({})
  const timers = useTimers()
  const timer = useTimer()

  const showEditButton = !!timers?.get?.data?.length && !appBar.title
  const showCreateTimerButton = location.pathname !== '/create-timer'

  const onEditClick = () => {
    const editTimerId = timer?.selectedTimer?.id || timers.get.data[0]?.id
    const editTimerUrl = '/edit-timer/' + editTimerId

    if (editTimerId) {
      navigate(editTimerUrl)
    }
  }

  return (
    <Box component='nav' sx={styles.wrapper}>
      {showEditButton && (
        <IconButton onClick={onEditClick} data-id='editTimerButton'>
          <Edit sx={{ width: '18px' }} />
        </IconButton>
      )}

      {showCreateTimerButton && (
        <IconButton onClick={() => navigate('/create-timer')}>
          <Plus />
        </IconButton>
      )}

      <VolumeControl />

      <ProfilePic />
    </Box>
  )
}
