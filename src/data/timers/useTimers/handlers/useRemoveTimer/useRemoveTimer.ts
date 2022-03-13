import type { UseDataProps } from '@useweb/use-data'
import { doc, deleteDoc } from 'firebase/firestore'
import useFirebase from '@useweb/use-firebase'

import useTimer from '../../../../../globalState/useTimer/useTimer'
import useSnackBar from '../../../../../lib/components/Snackbar/useSnackbar/useSnackbar'
import useShowError from '../../../../../lib/components/feedback/useShowError'
import useAuth from '../../../../../globalState/useAuth/useAuth'

import useHandleRemove from './useHandleRemove'

type UseRemoveTimerProps = UseDataProps['remove']

export default function useRemoveTimer({ onRemove }): UseRemoveTimerProps {
  const snackbar = useSnackBar()
  const showError = useShowError()
  const firebase = useFirebase()
  const timer = useTimer()
  const auth = useAuth()
  const handleRemove = useHandleRemove({ timer })

  return {
    remover: async ({ removedItemId }) => {
      if (!auth?.user) {
        return
      }

      await deleteDoc(doc(firebase.db, 'timers', removedItemId))
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
          autoHideDuration: null,
        })
      }
    },
  }
}
