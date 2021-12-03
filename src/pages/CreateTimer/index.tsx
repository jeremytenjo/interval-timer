import useAppBar from '../../globalState/useAppBar/useAppBar'
import useDocumentTitle from '../../lib/utils/dom/useDocumentTitle'
import CreateTimerForm from '../../lib/components/CreateTimerForm'

export default function CreateTimerPage() {
  useAppBar({ title: 'Create Timer' })
  useDocumentTitle({ title: 'Create Timer' })

  return (
    <>
      <CreateTimerForm />
    </>
  )
}
