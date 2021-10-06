import { updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'
import useOnTrue from '@useweb/use-on-true'

import useFirebase from '../../../../../firebase/useFirebase'
import useSnackBar from '../../../../components/Snackbar/useSnackbar'
import useShowError from '../../../../components/feedback/useShowError'

export default function useUpdate({ data, updateData, userId, collectionName }) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()

  const fetcher = async ({ id, data }) => {
    delete data.id
    const updateItem = {
      ...data,
      id,
      timestamp: serverTimestamp(),
    }

    // update only locally
    if (!userId) return updateItem
    else {
      // update firestore
      const docRef = doc(firebase.db, collectionName.raw, id)
      await updateDoc(docRef, updateItem)

      return updateItem
    }
  }

  const update = useAsync(fetcher)

  useShowError(
    update.error,
    `Error updating ${collectionName.singularized}, please try again`,
  )

  useOnTrue(update.result, () => {
    const updateItems = arrayDB.update(data, {
      data: update.result,
      id: update.result.id,
    })

    updateData(updateItems)
    snackbar.show({ message: `${collectionName.capitalizedSingularized} updated` })
  })

  return update
}
