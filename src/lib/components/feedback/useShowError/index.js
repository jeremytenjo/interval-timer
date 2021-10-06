import useSnackBar from '../../Snackbar/useSnackbar'

export default function useShowError(defaultError, errorMessage, disableEffect) {
  const snackbar = useSnackBar()

  const show = ({ error = defaultError, message }) => {
    console.error(error)
    snackbar.show({
      message,
      severity: 'error',
    })
  }

  useEffect(() => {
    if (defaultError && !disableEffect) {
      show({ error: defaultError, message: errorMessage })
    }
  }, [defaultError])

  return { show }
}
