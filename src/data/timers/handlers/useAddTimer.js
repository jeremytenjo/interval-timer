import { collection, addDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../firebase/useFirebase'
import useSnackBar from '../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../lib/components/feedback/useShowError'

export default function useAddTimer({ userId, updateLocalTimers, localTimers }) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()

  const fetcher = async (payload) => {
    delete payload.id
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

  useShowError(addTimer.error, 'Error adding timer, please try again')

  useEffect(() => {
    if (addTimer.result) {
      const updatedTimers = arrayDB.add(localTimers, { data: addTimer.result })
      updateLocalTimers(updatedTimers)
      snackbar.show({ message: 'Timer saved' })
    }
  }, [addTimer.result])

  return addTimer
}
