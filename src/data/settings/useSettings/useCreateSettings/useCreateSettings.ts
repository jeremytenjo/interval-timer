import type { UseDataProps } from '@useweb/use-data'
import { collection, addDoc } from 'firebase/firestore'
import useFirebase from '@useweb/use-firebase'

import useShowError from '../../../../lib/components/feedback/useShowError'
import useAuth from '../../../../globalState/useAuth/useAuth'

type UseCreateSettingsProps = UseDataProps['create']

export default function useCreateSettings(): UseCreateSettingsProps {
  const showError = useShowError()
  const auth = useAuth()
  const firebase = useFirebase()

  return {
    creator: async ({ value }) => {
      delete value.id

      const doc = {
        ...value,
        userId: auth.user.uid,
      }

      const docRef = await addDoc(collection(firebase.db, 'settings'), doc)

      const newItem = {
        id: docRef.id,
        ...doc,
      }

      return {
        newItem,
      }
    },
    onCreateError: (error) => {
      showError.show({
        error,
        message: `Error creating settings, please try again`,
      })
    },
  }
}
