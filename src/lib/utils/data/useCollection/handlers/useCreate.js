import { collection, addDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../../firebase/useFirebase'
import useSnackBar from '../../../../components/Snackbar/useSnackbar'
import useShowError from '../../../../components/feedback/useShowError'

export default function useCreate({
  userId,
  updateData,
  data: allData = [],
  collectionName,
  onCreate,
}) {
  const firebase = useFirebase()
  const snackbar = useSnackBar()
  const showError = useShowError()

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

    console.log({ allData, createdItem })

    const updatedData = arrayDB.add(allData, { data: createdItem })
    const returnData = { createdItem, updatedData, disableSnackbar }

    onCreate && onCreate(returnData)

    return returnData
  }

  const create = useAsync(fetcher, {
    onError: (error) => {
      showError.show({
        error,
        message: `Error creating ${collectionName.singularized}, please try again`,
      })
    },
    onResult: (result) => {
      updateData(result.updatedData)
      !result.disableSnackbar &&
        snackbar.show({ message: `${collectionName.capitalizedSingularized} saved` })
    },
    onLoading: (loading) => {
      if (loading) {
        snackbar.show({
          message: `Creating ${collectionName.capitalizedSingularized}...`,
          severity: 'info',
        })
      }
    },
  })

  return create
}
