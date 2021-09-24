import useSnackBar from '../../Snackbar/useSnackbar'

export default function useShowError(error, errorMessage) {
  const snackbar = useSnackBar()

  useEffect(() => {
    if (error) {
      console.warn(error)
      snackbar.show({
        message: errorMessage,
        severity: 'error',
      })
    }
  }, [error])
}
