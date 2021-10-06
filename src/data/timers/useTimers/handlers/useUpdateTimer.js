import { updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'
import useOnTrue from '@useweb/use-on-true'

import useFirebase from '../../../../firebase/useFirebase'
import useSnackBar from '../../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../../lib/components/feedback/useShowError'

export default function useUpdateTimer({ timers, updateTimers }) {
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

  useOnTrue(udpateTimer.result, () => {
    const updatedTimers = arrayDB.update(timers, {
      data: udpateTimer.result,
      id: udpateTimer.result.id,
    })

    updateTimers(updatedTimers)
    snackbar.show({ message: 'Timer saved' })
  })

  return udpateTimer
}
