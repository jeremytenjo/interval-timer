import { collection, addDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'

import useFirebase from '../../../firebase/useFirebase'

export default function useAddTimer({ userId }) {
  const firebase = useFirebase()

  const fetcher = async (payload) => {
    const newTimer = {
      ...payload,
      userId,
    }
    const docRef = await addDoc(collection(firebase.db, 'timers'), newTimer)
    const createdTimer = {
      ...newTimer,
      id: docRef.id,
    }

    return createdTimer
  }

  const timers = useAsync(fetcher)

  return timers
}
