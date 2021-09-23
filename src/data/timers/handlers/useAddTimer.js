import { collection, addDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'

import arrayDB from '../../../lib/utils/array/arrayDB'
import useFirebase from '../../../firebase/useFirebase'

export default function useAddTimer({ userId, updateLocalTimers, localTimers }) {
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

  const addTimer = useAsync(fetcher)

  useEffect(() => {
    if (addTimer.result) {
      const updatedTimers = arrayDB.add(localTimers, { data: addTimer.result })
      updateLocalTimers(updatedTimers)
    }
  }, [addTimer.result])

  return addTimer
}
