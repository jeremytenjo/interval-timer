import { collection, query, where, getDocs } from 'firebase/firestore'

import useFirebase from '../../../../firebase/useFirebase'
import useGetData from '../../../../lib/utils/data/useGetData'

export default function useGetTimers({ userId }) {
  const firebase = useFirebase()
  const collectionName = 'timers'

  const firestoreFetcher = async () => {
    const data = []
    const q = query(
      collection(firebase.db, collectionName),
      where('userId', '==', userId),
    )
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return data
  }

  const timers = useGetData({
    key: () => (userId ? collectionName : null),
    fetcher: firestoreFetcher,
  })

  return timers
}
