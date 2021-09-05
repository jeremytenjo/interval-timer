import VolumeIcon from '../../../../icons/Volume'
import Edit from '../../../../icons/Edit'
import Plus from '../../../../icons/Plus'
import Box from '../../../../Box'
import IconButton from '../../../../IconButton'

import * as styles from './styles'
import ProfilePic from './ProfilePic'

export default function Items() {
  return (
    <Box component='nav' sx={styles.wrapper}>
      <IconButton>
        <VolumeIcon />
      </IconButton>
      <IconButton>
        <Edit sx={{ width: '18px' }} />
      </IconButton>
      <IconButton>
        <Plus />
      </IconButton>
      <ProfilePic />
    </Box>
  )
}
