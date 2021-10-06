import { collection, addDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import useOntrue from '@useweb/use-on-true'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../../firebase/useFirebase'
import useSnackBar from '../../../../components/Snackbar/useSnackbar'
import useShowError from '../../../../components/feedback/useShowError'

export default function useCreate({ userId, updateData, data: allData, collectionName }) {
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

    return { createdItem, updatedData }
  }

  const create = useAsync(fetcher)

  useShowError(
    create.error,
    `Error creating ${collectionName.singularized}, please try again`,
  )

  useOntrue(create.result, () => {
    updateData(create.result.updatedData)
    snackbar.show({ message: `${collectionName.capitalizedSingularized} saved` })
  })

  return create
}
