import type { UseDataProps } from '@useweb/use-data'
import { collection, addDoc } from 'firebase/firestore'
import useFirebase from '@useweb/use-firebase'

import gtag from '../../../../../lib/utils/analytics/gtag'
import useSnackBar from '../../../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../../../lib/components/feedback/useShowError'
import useAuth from '../../../../../globalState/useAuth/useAuth'

type UseCreateTimerProps = UseDataProps['create']

export default function useCreateTimer({ onCreate }): UseCreateTimerProps {
  const snackbar = useSnackBar()
  const showError = useShowError()
  const auth = useAuth()
  const firebase = useFirebase()

  return {
    creator: async ({ value }) => {
      console.log(value)
      delete value.id

      const doc = {
        ...value,
        userId: auth.user.uid,
      }

      const docRef = await addDoc(collection(firebase.db, 'timers'), doc)

      const newItem = {
        id: docRef.id,
        ...doc,
      }

      return {
        newItem,
      }
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
  }
}
