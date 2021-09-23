import { doc, getDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'

import useFirebase from '../../../firebase/useFirebase'

export default function useGetTimers() {
  const firebase = useFirebase()

  const fetcher = async () => {
    const docRef = doc(firebase.db, 'cities', 'SF')
    const docSnap = await getDoc(docRef)
    let data = []

    if (docSnap.exists()) {
      data = docSnap.data()
    }

    return data
  }

  const timers = useAsync(fetcher)

  return timers
}
