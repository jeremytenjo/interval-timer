import { updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../../firebase/useFirebase'
import useSnackBar from '../../../../components/Snackbar/useSnackbar'
import useShowError from '../../../../components/feedback/useShowError'

export default function useUpdate({
  data: allData,
  updateData,
  userId,
  collectionName,
  onUpdate,
}) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()
  const showError = useShowError()

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

    const returnData = { updatedItem, updatedItems }

    onUpdate && onUpdate(returnData)

    return returnData
  }

  const update = useAsync(fetcher, {
    onError: (error) => {
      showError.show({
        error,
        message: `Error updating ${collectionName.singularized}, please try again`,
      })
    },
    onResult: (result) => {
      updateData(result.updatedItems)
      snackbar.show({ message: `${collectionName.capitalizedSingularized} updated` })
    },
    onLoading: (loading) => {
      if (loading) {
        snackbar.show({
          message: `Updating ${collectionName.capitalizedSingularized}...`,
          severity: 'info',
        })
      }
    },
  })

  return update
}
