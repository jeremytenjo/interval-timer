import useAppBar from '../../globalState/useAppBar'
import Box from '../../lib/components/Box'
import useDocumentTitle from '../../lib/utils/dom/useDocumentTitle'

import SettingsForm from './containers/SettingsForm'

export default function SettingsPage() {
  useAppBar({ title: 'Settings' })
  useDocumentTitle({ title: 'Settings' })

  return (
    <Box className='centerPage'>
      <SettingsForm />
    </Box>
  )
}
