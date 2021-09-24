import { updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import useAsync from '@useweb/use-async'

import useFirebase from '../../../firebase/useFirebase'
import useSnackBar from '../../../lib/components/Snackbar/useSnackbar'
import arrayDB from '../../../lib/utils/array/arrayDB'
import useShowError from '../../../lib/components/feedback/useShowError'

export default function useUpdateTimer({ localTimers, updateLocalTimers }) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()

  const fetcher = async ({ id, data }) => {
    const docRef = doc(firebase.db, 'timers', id)
    delete data.id
    const updatedTimer = {
      ...data,
      timestamp: serverTimestamp(),
    }

    await updateDoc(docRef, updatedTimer)

    return { ...updatedTimer, id }
  }

  const udpateTimer = useAsync(fetcher)

  useShowError(udpateTimer.error, 'Error updating timer, please try again')

  useEffect(() => {
    if (udpateTimer.result) {
      const updatedTimers = arrayDB.update(localTimers, {
        data: udpateTimer.result,
        id: udpateTimer.result.id,
      })

      updateLocalTimers(updatedTimers)
      snackbar.show({ message: 'Timer saved' })
    }
  }, [udpateTimer.result])

  return udpateTimer
}
