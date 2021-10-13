import { useEffect } from 'react'

import gtag from '../../../utils/analytics/gtag'
import useSnackBar from '../../Snackbar/useSnackbar'

export default function useShowError(defaultError, errorMessage) {
  const snackbar = useSnackBar()

  const show = ({ error = defaultError, message, fatal = false }) => {
    console.error(error)

    snackbar.show({
      message,
      severity: 'error',
    })

    gtag('event', 'exception', {
      description: error,
      fatal,
    })
  }

  useEffect(() => {
    if (defaultError) {
      show({ error: defaultError, message: errorMessage })
    }
  }, [defaultError])

  return { show }
}
