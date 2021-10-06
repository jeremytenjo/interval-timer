import { collection, query, where, getDocs } from 'firebase/firestore'

import useFirebase from '../../../../firebase/useFirebase'
import useData from '../../../../lib/utils/data/useData'

export default function useGetTimers({ userId }) {
  const firebase = useFirebase()

  const firestoreFetcher = async () => {
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

  const timers = useData({
    key: () => (userId ? 'timers' : null),
    fetcher: firestoreFetcher,
  })

  return timers
}
