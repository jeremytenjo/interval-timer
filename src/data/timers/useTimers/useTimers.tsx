import useFirestore from '@useweb/use-firestore'

import useTimer from '../../../globalState/useTimer/useTimer'
import useSnackBar from '../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../lib/components/feedback/useShowError'
import gtag from '../../../lib/utils/analytics/gtag'

import useHandleGet from './handlers/useHandleGet'
import useHandleRemove from './handlers/useHandleRemove'

export default function useTimers({
  onCreate = undefined,
  onGet = undefined,
  onRemove = undefined,
  onUpdate = undefined,
} = {}) {
  const snackbar = useSnackBar()
  const showError = useShowError()
  const timer = useTimer()
  const handleGet = useHandleGet({ timer })
  const handleRemove = useHandleRemove({ timer })

  // TODO replace useFirestore with useData
  const timers = useFirestore('timers', {
    onGet: (result) => {
      handleGet.setSelectedTimer(result)
      onGet && onGet(result)
    },
    onGetError: (error) => {
      showError.show({
        error,
        message: `Error fetching timer, please try again.`,
      })
    },
    onCreate: (result) => {
      snackbar.show({
        message: `Timer saved`,
      })
      gtag('event', 'timer_created')
      onCreate && onCreate(result)
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
    onUpdate: (result) => {
      snackbar.show({ message: `Timer updated` })
      onUpdate && onUpdate(result)
    },
    onUpdateError: (error) => {
      showError.show({
        error,
        message: `Error updating timer, please try again`,
      })
    },
    onUpdateLoading: (loading) => {
      if (loading) {
        snackbar.show({
          message: `Updating timer...`,
          severity: 'info',
        })
      }
    },
    onRemove: (result) => {
      handleRemove.setSelectedTimer(result)
      snackbar.show({ message: `Timer removed` })
      onRemove && onRemove()
    },
    onRemoveError: (error) => {
      showError.show({
        error,
        message: `Error removing timer, please try again`,
      })
    },
    onRemoveLoading: (loading) => {
      if (loading) {
        snackbar.show({
          message: `Removing timer...`,
          severity: 'info',
        })
      }
    },
  })

  return timers
}
