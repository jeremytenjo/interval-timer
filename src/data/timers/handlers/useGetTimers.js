import { collection, query, where, getDocs } from 'firebase/firestore'
import useAsync from '@useweb/use-async'

import useFirebase from '../../../firebase/useFirebase'

export default function useGetTimers({ userId }) {
  const firebase = useFirebase()

  const fetcher = async () => {
    const data = []
    const q = query(collection(firebase.db, 'timers'), where('userId', '==', userId))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return data
  }

  const timers = useAsync(fetcher)

  return timers
}
