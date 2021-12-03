import { updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../../firebase/useFirebase'
import type { HandlerPayloadType } from '../'

type Callbacks = {
  onUpdate?: (result: any) => void
  onUpdateError?: (error: any) => void
  onUpdateLoading?: (loading: boolean) => void
}

export default function useUpdate(
  { data: allData = [], updateData, userId, collectionName }: HandlerPayloadType,
  callbacks?: Callbacks,
) {
  const firebase = useFirebase()

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
      await updateDoc(doc(firebase.db, collectionName, id), updatedItem)
    }

    const returnData = { updatedItem, updatedItems }

    return returnData
  }

  const update = useAsync(fetcher, {
    onError: (error) => {
      callbacks.onUpdateError(error)
    },
    onResult: (result) => {
      updateData(result.updatedItems)
      callbacks.onUpdate(result)
    },
    onLoading: (loading) => {
      callbacks.onUpdateLoading(loading)
    },
  })

  return update
}
