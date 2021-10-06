import { doc, deleteDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../firebase/useFirebase'
import useShowError from '../../../../lib/components/feedback/useShowError'
import useSnackBar from '../../../../lib/components/Snackbar/useSnackbar'
import useSelectedTimer from '../../../../globalState/useSelectedTimer'

export default function useRemoveTimer({ localTimers, updateLocalTimers }) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()
  const navigate = useNavigate()
  const selectedTimer = useSelectedTimer()

  const fetcher = async ({ id }) => {
    await deleteDoc(doc(firebase.db, 'timers', id))

    return id
  }

  const removeTimer = useAsync(fetcher)

  useShowError(removeTimer.error, 'Error removing timer, please try again')

  useEffect(() => {
    if (removeTimer.result) {
      const updatedTimers = arrayDB.remove(localTimers, {
        id: removeTimer.result,
      })

      updateLocalTimers(updatedTimers)
      snackbar.show({ message: 'Timer removed' })

      if (updatedTimers.length) {
        selectedTimer.setSelectedTimer(updatedTimers[0])
      } else {
        navigate('/create-timer')
      }
    }
  }, [removeTimer.result])

  return removeTimer
}
