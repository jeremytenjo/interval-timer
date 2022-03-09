import useFirebase from '@useweb/use-firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import type { UseDataProps } from '@useweb/use-data'

import useAuth from '../../../../globalState/useAuth/useAuth'
import useShowError from '../../../../lib/components/feedback/useShowError'

type UseGetSettingsProps = UseDataProps['get']

export default function useGetSettings({ onGet }): UseGetSettingsProps {
  const firebase = useFirebase()
  const auth = useAuth()
  const showError = useShowError()

  return {
    fetcher: async () => {
      const data = []
      const q = query(
        collection(firebase.db, 'settings'),
        where('userId', '==', auth.user.uid),
      )
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      return data
    },
    onGet: (data) => {
      onGet(data)
    },
    onGetError: (error) => {
      showError.show({
        error,
        message: `Error fetching settings, please try again.`,
      })
    },
  }
}
