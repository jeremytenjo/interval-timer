import type { UseDataProps } from '@useweb/use-data'
import { doc, updateDoc } from 'firebase/firestore'
import useFirebase from '@useweb/use-firebase'

import useSnackBar from '../../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../../lib/components/feedback/useShowError'

type UseUpdateSettigsProps = UseDataProps['update']

export default function useUpdateSettings(): UseUpdateSettigsProps {
  const snackbar = useSnackBar()
  const showError = useShowError()
  const firebase = useFirebase()

  return {
    updater: async ({ updatedItem }) => {
      await updateDoc(doc(firebase.db, 'settings', updatedItem.id), updatedItem)
    },
    onUpdate: () => {
      snackbar.show({ message: `Settings updated` })
    },
    onUpdateError: (error) => {
      showError.show({
        error,
        message: `Error updating settings, please try again`,
      })
    },
    onUpdateLoading: (loading) => {
      if (loading) {
        snackbar.show({
          message: `Updating settings...`,
          severity: 'info',
        })
      }
    },
  }
}
