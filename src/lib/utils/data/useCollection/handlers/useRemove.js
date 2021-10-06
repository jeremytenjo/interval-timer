import { doc, deleteDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import useOnTrue from '@useweb/use-on-true'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../../firebase/useFirebase'
import useShowError from '../../../../components/feedback/useShowError'
import useSnackBar from '../../../../components/Snackbar/useSnackbar'
import useTimer from '../../../../../globalState/useTimer'

export default function useRemove({ data, updateData, userId, collectionName }) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()
  const navigate = useNavigate()
  const timer = useTimer()

  const fetcher = async ({ id }) => {
    if (userId) {
      await deleteDoc(doc(firebase.db, collectionName, id))
    }

    return id
  }

  const removeTimer = useAsync(fetcher)

  useShowError(removeTimer.error, 'Error removing timer, please try again')

  useOnTrue(removeTimer.result, () => {
    const removedItem = arrayDB.remove(data, {
      id: removeTimer.result,
    })

    updateData(removedItem)
    snackbar.show({ message: 'Timer removed' })

    if (removedItem.length) {
      timer.setSelectedTimer(removedItem[0])
    } else {
      navigate('/create-timer')
    }
  })

  return removeTimer
}
