import Button from '../../../Button'
import ConfirmationDialog from '../../../Dialog/ConfirmationDialog'
import useTimer from '../../../../../globalState/useTimer'
import { useState } from 'react'

export default function DeleteTimer({ onDelete = () => null }) {
  const [open, setOpen] = useState(false)
  const timer = useTimer()

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
        title={`Remove ${timer.selectedTimer?.name} timer?`}
        confirmText='Remove'
      />

      <Button
        variant='text'
        sx={{ width: 'fit-content', color: 'error.main' }}
        onClick={show}
      >
        Remove
      </Button>
    </>
  )
}
