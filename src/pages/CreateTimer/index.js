import useAppBar from '../../globalState/useAppBar'
import useDocumentTitle from '../../lib/utils/dom/useDocumentTitle'

import CreateTimerForm from './containers/CreateTimerForm'

export default function CreateTimerPage() {
  useAppBar({ title: 'Create Timer' })
  useDocumentTitle({ title: 'Create Timer' })

  return (
    <>
      <CreateTimerForm />
    </>
  )
}
