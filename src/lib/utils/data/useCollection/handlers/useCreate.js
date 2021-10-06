import { collection, addDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../../firebase/useFirebase'
import useSnackBar from '../../../../components/Snackbar/useSnackbar'
import useShowError from '../../../../components/feedback/useShowError'

export default function useCreate({ userId, udpateData, data, collectionName }) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()

  const fetcher = async (payload) => {
    delete payload.id
    let createdItem = {
      ...payload,
      userId,
    }

    // update only locally
    if (!userId) {
      createdItem = {
        ...createdItem,
        id: Date.now().toString(),
      }
    } else {
      // update firestore
      const docRef = await addDoc(collection(firebase.db, collectionName), createdItem)

      createdItem = {
        ...createdItem,
        id: docRef.id,
      }
    }

    return createdItem
  }

  const create = useAsync(fetcher)

  useShowError(create.error, 'Error creating timer, please try again')

  useEffect(() => {
    if (create.result) {
      const updatedTimers = arrayDB.add(data, { data: create.result })
      udpateData(updatedTimers)
      snackbar.show({ message: 'Timer saved' })
    }
  }, [create.result])

  return create
}
