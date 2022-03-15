import React from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'

import Button from '../../Button'

type Props = {
  open: boolean
  text?: string
  title?: string
  cancelText?: string
  confirmText?: string
  onConfirm?: () => void
  onCancel?: () => void
}
export default function ConfirmationDialog({
  open,
  text,
  title,
  onConfirm,
  onCancel,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
}: Props) {
  const handleConfirm = () => {
    onConfirm()
  }

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth='xs'
      open={open}
    >
      <DialogTitle>{title}</DialogTitle>
      {text && <DialogContent dividers>{text}</DialogContent>}
      <DialogActions>
        <Button variant='text' autoFocus onClick={onCancel}>
          {cancelText}
        </Button>
        <Button
          variant='text'
          onClick={handleConfirm}
          data-id='ConfirmationDialogConfirmButton'
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
