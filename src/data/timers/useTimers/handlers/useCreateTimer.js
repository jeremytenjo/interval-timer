import { collection, addDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../firebase/useFirebase'
import useSnackBar from '../../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../../lib/components/feedback/useShowError'

export default function useCreateTimer({ userId, updateTimers, timers }) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()

  const fetcher = async (payload) => {
    delete payload.id
    let createdTimer = {
      ...payload,
      userId,
    }

    // update only locally
    if (!userId) {
      createdTimer = {
        ...createdTimer,
        id: Date.now().toString(),
      }
    } else {
      // update firestore
      const docRef = await addDoc(collection(firebase.db, 'timers'), createdTimer)

      createdTimer = {
        ...createdTimer,
        id: docRef.id,
      }
    }

    return createdTimer
  }

  const createTimer = useAsync(fetcher)

  useShowError(createTimer.error, 'Error creating timer, please try again')

  useEffect(() => {
    if (createTimer.result) {
      const updatedTimers = arrayDB.add(timers, { data: createTimer.result })
      updateTimers(updatedTimers)
      snackbar.show({ message: 'Timer saved' })
    }
  }, [createTimer.result])

  return createTimer
}
