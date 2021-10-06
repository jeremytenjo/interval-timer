import { collection, addDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import useOntrue from '@useweb/use-on-true'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../../firebase/useFirebase'
import useSnackBar from '../../../../components/Snackbar/useSnackbar'
import useShowError from '../../../../components/feedback/useShowError'

export default function useCreate({
  userId,
  updateData,
  data: allData,
  collectionName,
  onCreate,
}) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()

  const fetcher = async ({ data, disableSnackbar } = {}) => {
    delete data.id
    let createdItem = {
      ...data,
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
      const docRef = await addDoc(
        collection(firebase.db, collectionName.raw),
        createdItem,
      )

      createdItem = {
        ...createdItem,
        id: docRef.id,
      }
    }

    const updatedData = arrayDB.add(allData, { data: createdItem })
    const returnData = { createdItem, updatedData, disableSnackbar }

    onCreate && onCreate(returnData)

    return returnData
  }

  const create = useAsync(fetcher)

  useShowError(
    create.error,
    `Error creating ${collectionName.singularized}, please try again`,
  )

  useOntrue(create.result, () => {
    updateData(create.result.updatedData)
    !create.result.disableSnackbar &&
      snackbar.show({ message: `${collectionName.capitalizedSingularized} saved` })
  })

  return create
}
