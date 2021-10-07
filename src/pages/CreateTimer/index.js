import useAppBar from '../../globalState/useAppBar'

import CreateTimerForm from './containers/CreateTimerForm'

export default function CreateTimerPage() {
  useAppBar({ title: 'Create Timer' })

  return (
    <>
      <CreateTimerForm />
    </>
  )
}
