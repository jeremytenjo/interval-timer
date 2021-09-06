import VolumeIcon from '../../../../../icons/Volume'
import Edit from '../../../../../icons/Edit'
import Plus from '../../../../../icons/Plus'
import Box from '../../../../../Box'
import IconButton from '../../../../../IconButton'
import useAppBar from '../../useAppBar'

import * as styles from './styles'
import ProfilePic from './ProfilePic'

export default function Items() {
  const navigate = useNavigate()
  const useAppBarData = useAppBar()

  return (
    <Box component='nav' sx={styles.wrapper}>
      {useAppBarData.showEditButton && (
        <IconButton onClick={() => navigate('edit-timer')}>
          <Edit sx={{ width: '18px' }} />
        </IconButton>
      )}

      <IconButton>
        <VolumeIcon />
      </IconButton>

      <IconButton onClick={() => navigate('create-timer')}>
        <Plus />
      </IconButton>

      <ProfilePic />
    </Box>
  )
}
