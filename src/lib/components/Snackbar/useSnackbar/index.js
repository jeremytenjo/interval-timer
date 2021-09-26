import React, { useState, createContext, useContext } from 'react'
import Slide from '@mui/material/Slide'

import Snackbar from '..'
import Alert from '../../Alert'

export const SnackBarContext = createContext(null)

export const SnackBarProvider = ({ children }) => {
  const [open, setShow] = useState(null)
  const [severity, setSeverity] = useState('success')
  const [message, setMessage] = useState('')
  const vertical = 'bottom'
  const horizontal = 'center'

  const show = ({ message = '', severity = 'success' }) => {
    setSeverity(severity)
    setShow(true)
    setMessage(message)
  }

  const hide = () => {
    setShow(false)
    setMessage('')
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
        sx={{ bottom: '80px' }}
        TransitionComponent={Slide}
        autoHideDuration={5000}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>

      {children}
    </SnackBarContext.Provider>
  )
}

const useSnackBar = () => useContext(SnackBarContext)

export default useSnackBar
