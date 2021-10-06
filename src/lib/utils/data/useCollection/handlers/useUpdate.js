import { updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'
import useOnTrue from '@useweb/use-on-true'

import useFirebase from '../../../../../firebase/useFirebase'
import useSnackBar from '../../../../components/Snackbar/useSnackbar'
import useShowError from '../../../../components/feedback/useShowError'

export default function useUpdate({ data: allData, updateData, userId, collectionName }) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()

  const fetcher = async ({ id, data }) => {
    delete data.id
    const updatedItem = {
      ...data,
      id,
      timestamp: serverTimestamp(),
    }

    const updatedItems = arrayDB.update(allData, {
      data: updatedItem,
      id: id,
    })

    if (userId) {
      await updateDoc(doc(firebase.db, collectionName.raw, id), updatedItem)
    }

    return { updatedItem, updatedItems }
  }

  const update = useAsync(fetcher)

  useShowError(
    update.error,
    `Error updating ${collectionName.singularized}, please try again`,
  )

  useOnTrue(update.result, () => {
    updateData(update.result.updatedItems)
    snackbar.show({ message: `${collectionName.capitalizedSingularized} updated` })
  })

  return update
}
