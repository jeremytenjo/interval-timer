import React, { useState, createContext, useContext } from 'react'
import Slide from '@mui/material/Slide'

import Snackbar from '..'
import Alert from '../../Alert'
export const SnackBarContext = createContext(null)

export const SnackBarProvider = ({ children }) => {
  const [open, setShow] = useState(null)
  const [severity, setSeverity] = useState('success')
  const [message, setMessage] = useState('')
  const [autoHideDuration, setAutoHideDuration] = useState(4000)
  const vertical = 'bottom'
  const horizontal = 'center'

  const show = ({
    message = '',
    severity = 'success',
    autoHideDuration = 4000,
    show = true,
  }) => {
    setSeverity(severity)
    setShow(show)
    setMessage(message)
    setAutoHideDuration(autoHideDuration)
  }

  const hide = () => {
    setShow(false)
  }

  return (
    <SnackBarContext.Provider
      value={{
        show,
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={hide}
        key={vertical + horizontal}
        severity={severity}
        sx={{
          bottom: {
            xs: '80px',
            ms: '80px',
          },
        }}
        TransitionComponent={Slide}
        autoHideDuration={autoHideDuration}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>

      {children}
    </SnackBarContext.Provider>
  )
}

const useSnackBar = () => useContext(SnackBarContext)

export default useSnackBar
