import useFirebase from '@useweb/use-firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import type { UseDataProps } from '@useweb/use-data'

import useTimer from '../../../../../globalState/useTimer/useTimer'
import useAuth from '../../../../../globalState/useAuth/useAuth'
import useShowError from '../../../../../lib/components/feedback/useShowError'

import useHandleGet from './useHandleGet'

type UseGetTimersProps = UseDataProps['get']

export default function useGetTimers({ onGet }): UseGetTimersProps {
  const firebase = useFirebase()
  const timer = useTimer()
  const handleGet = useHandleGet({ timer })
  const auth = useAuth()
  const showError = useShowError()

  return {
    fetcher: async () => {
      const data = []
      const q = query(
        collection(firebase.db, 'timers'),
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
    onGet: (result) => {
      handleGet.setSelectedTimer(result)
      onGet && onGet(result)
    },
    onGetError: (error) => {
      showError.show({
        error,
        message: `Error fetching timers, please try again.`,
      })
    },
  }
}
