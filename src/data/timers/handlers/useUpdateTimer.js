import { updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import useAsync from '@useweb/use-async'

import useFirebase from '../../../firebase/useFirebase'
import useSnackBar from '../../../lib/components/Snackbar/useSnackbar'

export default function useUpdateTimer() {
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

    return updatedTimer
  }

  const udpateTimer = useAsync(fetcher)

  useEffect(() => {
    if (udpateTimer.result) {
      snackbar.show({ message: 'Timer Updated' })
    }
  }, [udpateTimer.result])

  useEffect(() => {
    if (udpateTimer.error) {
      console.warn(udpateTimer.error)
      snackbar.show({
        message: 'Error updating timer, please try again',
        severity: 'error',
      })
    }
  }, [udpateTimer.error])

  return udpateTimer
}
