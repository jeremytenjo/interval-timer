import useSnackBar from '../../Snackbar/useSnackbar'

export default function useShowError(defaultError, errorMessage) {
  const snackbar = useSnackBar()

  const show = ({ error = defaultError, message }) => {
    console.error(error)
    snackbar.show({
      message,
      severity: 'error',
    })
  }

  useEffect(() => {
    if (defaultError) {
      show({ error: defaultError, message: errorMessage })
    }
  }, [defaultError])

  return { show }
}
