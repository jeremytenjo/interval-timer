import Button from '../../../Button'
import ConfirmationDialog from '../../../Dialog/ConfirmationDialog'
import useSelectedTimer from '../../../../../globalState/useSelectedTimer'

export default function DeleteTimer({ onDelete = () => null }) {
  const [open, setOpen] = useState(false)
  const selectedTimer = useSelectedTimer()

  const show = () => {
    setOpen(true)
  }

  const hide = () => {
    setOpen(false)
  }

  const onConfirm = () => {
    setOpen(false)
    onDelete()
  }

  return (
    <>
      <ConfirmationDialog
        onConfirm={onConfirm}
        onCancel={hide}
        open={open}
        title={`Delete ${selectedTimer.selectedTimer?.name} timer?`}
        confirmText='Delete'
      />

      <Button
        variant='text'
        sx={{ width: 'fit-content', color: 'error.main' }}
        onClick={show}
      >
        Delete
      </Button>
    </>
  )
}
