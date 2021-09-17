import React, { useState, createContext, useContext } from 'react'
import Slide from '@mui/material/Slide'

import Snackbar from '..'
import Alert from '../../Alert'

export const SnackBarContext = createContext(null)

export const SnackBarProvider = ({ children }) => {
  const [open, setShow] = useState(null)
  const [message, setMessage] = useState('')
  const vertical = 'bottom'
  const horizontal = 'center'

  const show = ({ message = '' }) => {
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
        severity='success'
        sx={{ bottom: '80px' }}
        TransitionComponent={Slide}
        autoHideDuration={3000}
      >
        <Alert severity='success'>{message}</Alert>
      </Snackbar>

      {children}
    </SnackBarContext.Provider>
  )
}

const useSnackBar = () => useContext(SnackBarContext)

export default useSnackBar
