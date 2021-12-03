import useFirebaseCollection from '../../../lib/utils/data/useFirebaseCollection'
import useTimer from '../../../globalState/useTimer'
import useSnackBar from '../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../lib/components/feedback/useShowError'

import useHandleGet from './handlers/useHandleGet'
import useHandleRemove from './handlers/useHandleRemove'

export default function useTimers({
  onCreate = undefined,
  onGet = undefined,
  onRemove = undefined,
} = {}) {
  const snackbar = useSnackBar()
  const showError = useShowError()
  const timer = useTimer()
  const handleGet = useHandleGet({ timer })
  const handleRemove = useHandleRemove({ timer })
  const timers = useFirebaseCollection('timers', {
    onGet: (result) => {
      handleGet.setSelectedTimer(result)
      onGet && onGet(result)
    },
    onCreate: (result) => {
      onCreate && onCreate(result)
      snackbar.show({
        message: `Timer saved`,
      })
    },
    onCreateLoading: (loading) => {
      if (loading) {
        snackbar.show({
          message: `Creating timer...`,
          severity: 'info',
        })
      }
    },
    onCreateError: (error) => {
      showError.show({
        error,
        message: `Error creating timer, please try again`,
      })
    },
    onRemove: (result) => {
      handleRemove.setSelectedTimer(result)
      onRemove && onRemove()
    },
  })

  return timers
}
