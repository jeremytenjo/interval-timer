import React, { useState } from 'react'

import Button from '../../../Button'
import ConfirmationDialog from '../../../Dialog/ConfirmationDialog'
import useTimer from '../../../../../globalState/useTimer/useTimer'

type Props = {
  onDelete?: (payload?: any) => void
}

export default function DeleteTimer({ onDelete = () => null }: Props) {
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
        text='Remove'
      />
    </>
  )
}
