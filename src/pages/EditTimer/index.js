import useAppBar from '../../globalState/useAppBar'

import EditTimerForm from './containers/EditTimerForm'

export default function EditTimerPage() {
  useAppBar({ title: 'Edit Timer' })

  return <EditTimerForm />
}
