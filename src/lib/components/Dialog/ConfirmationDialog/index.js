import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'

import Button from '../../Button'

export default function ConfirmationDialog({
  open,
  text,
  title,
  onConfirm,
  onCancel,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
}) {
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
        <Button autoFocus onClick={onCancel}>
          {cancelText}
        </Button>
        <Button onClick={handleConfirm}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  )
}
