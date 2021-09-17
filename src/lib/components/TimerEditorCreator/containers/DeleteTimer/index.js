import Button from '../../../Button'
import ConfirmationDialog from '../../../Dialog/ConfirmationDialog'

export default function DeleteTimer({ onDelete = () => null }) {
  const [open, setOpen] = useState(false)

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
        title='Delete timer?'
        confirmText='Delete'
      />

      <Button variant='text' sx={{ width: 'fit-content' }} onClick={show}>
        Delete
      </Button>
    </>
  )
}
