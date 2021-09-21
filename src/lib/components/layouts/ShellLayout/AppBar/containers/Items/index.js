import Edit from '../../../../../icons/Edit'
import Plus from '../../../../../icons/Plus'
import Box from '../../../../../Box'
import IconButton from '../../../../../IconButton'
import useAppBar from '../../../../../../../globalState/useAppBar'
import useTimers from '../../../../../../../data/timers/useTimers'

import VolumeControl from './VolumeControl'
import * as styles from './styles'
import ProfilePic from './ProfilePic'

export default function Items() {
  const navigate = useNavigate()
  const useAppBarData = useAppBar()
  const timers = useTimers()

  const onEditClick = () => {
    const editTimerUrl = '/edit-timer/' + timers?.selectedTimer.id
    navigate(editTimerUrl)
  }

  return (
    <Box component='nav' sx={styles.wrapper}>
      {!!timers.data.length && useAppBarData.showEditButton && (
        <IconButton onClick={onEditClick}>
          <Edit sx={{ width: '18px' }} />
        </IconButton>
      )}

      <VolumeControl />

      <IconButton onClick={() => navigate('/create-timer')}>
        <Plus />
      </IconButton>

      <ProfilePic />
    </Box>
  )
}
