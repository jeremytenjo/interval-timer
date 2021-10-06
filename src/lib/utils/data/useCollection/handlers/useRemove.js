import { doc, deleteDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import useOnTrue from '@useweb/use-on-true'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../../firebase/useFirebase'
import useShowError from '../../../../components/feedback/useShowError'
import useSnackBar from '../../../../components/Snackbar/useSnackbar'

export default function useRemove({
  data,
  updateData,
  userId,
  collectionName,
  onRemove,
}) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()

  const fetcher = async ({ id }) => {
    const remainingItems = arrayDB.remove(data, {
      id,
    })

    if (userId) {
      await deleteDoc(doc(firebase.db, collectionName.raw, id))
    }

    const returnData = { removedItemId: id, remainingItems }

    onRemove && onRemove(returnData)

    return returnData
  }

  const remove = useAsync(fetcher)

  useShowError(
    remove.error,
    `Error removing ${collectionName.singularized}, please try again`,
  )

  useOnTrue(remove.result, () => {
    updateData(remove.result.remainingItems)
    snackbar.show({ message: `${collectionName.capitalizedSingularized} removed` })
  })

  return remove
}
