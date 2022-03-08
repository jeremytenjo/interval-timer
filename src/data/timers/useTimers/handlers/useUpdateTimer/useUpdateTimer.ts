import type { UseDataProps } from '@useweb/use-data'
import { doc, updateDoc } from 'firebase/firestore'
import useFirebase from '@useweb/use-firebase'

import useSnackBar from '../../../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../../../lib/components/feedback/useShowError'

type UseUpdateTimerProps = UseDataProps['update']

export default function useUpdateTimer({ onUpdate }): UseUpdateTimerProps {
  const snackbar = useSnackBar()
  const showError = useShowError()
  const firebase = useFirebase()

  return {
    updater: async ({ updatedItem }) => {
      await updateDoc(doc(firebase.db, 'timers', updatedItem.id), updatedItem)
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
  }
}
