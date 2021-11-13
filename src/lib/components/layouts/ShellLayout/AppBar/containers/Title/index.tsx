import { useNavigate } from 'react-router-dom'

import useAppBar from '../../../../../../../globalState/useAppBar'
import BackArrow from '../../../../../icons/BackArrow'
import Box from '../../../../../Box'
import Iconbutton from '../../../../../IconButton'

import * as styles from './styles'
import TimersDropdown from './TimersDropdown'

const TitleText = ({ title }) => {
  const navigate = useNavigate()

  return (
    <Box sx={styles.titleText}>
      <Iconbutton onClick={() => navigate(-1)}>
        <BackArrow sx={styles.backArrow} />
      </Iconbutton>

      <h1 className='title'>{title}</h1>
    </Box>
  )
}

export default function Title() {
  const appBar = useAppBar({})

  return (
    <div>{appBar.title ? <TitleText title={appBar.title} /> : <TimersDropdown />}</div>
  )
}
