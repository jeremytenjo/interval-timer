import useAppBar from '../../globalState/useAppBar'
import useDocumentTitle from '../../lib/utils/dom/useDocumentTitle'

import EditTimerForm from './containers/EditTimerForm'

export default function EditTimerPage() {
  useAppBar({ title: 'Edit Timer' })
  useDocumentTitle({ title: 'Edit Timer' })

  return <EditTimerForm />
}
