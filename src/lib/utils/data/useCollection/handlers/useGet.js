import { collection, query, where, getDocs } from 'firebase/firestore'
import useSWRImmutable from 'swr/immutable'
import useOnTrue from '@useweb/use-on-true'

import useFirebase from '../../../../../firebase/useFirebase'
import useShowError from '../../../../components/feedback/useShowError'
import useLocalStorage from '../../../storage/useLocalStorage'

export default function useGet({
  userId,
  collectionName,
  showLocalStorageDataIfNoUserSignedIn,
}) {
  const firebase = useFirebase()

  const firestoreFetcher = async () => {
    const data = []
    const q = query(
      collection(firebase.db, collectionName.raw),
      where('userId', '==', userId),
    )
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return data
  }

  const swrKey = () => (userId ? collectionName.raw : null)

  const dataFetch = useSWRImmutable(swrKey, firestoreFetcher)
  const getLocalStorageData = useLocalStorage({ action: 'get', key: collectionName.raw })
  const setLocalStorageData = useLocalStorage({ action: 'set', key: collectionName.raw })

  useOnTrue(!dataFetch.data, () => {
    getLocalStorageData.exec()
  })

  useOnTrue(dataFetch.data, () => {
    setLocalStorageData.exec({ value: dataFetch.data })
  })

  useShowError(dataFetch.error, `Error fetching ${collectionName.raw}, please try again.`)

  const update = (newData) => {
    setLocalStorageData.exec({ value: newData })
    dataFetch.mutate(newData, false)
  }

  const fetching = !dataFetch.data && !dataFetch.error
  const data =
    !dataFetch.data && fetching && showLocalStorageDataIfNoUserSignedIn && !userId
      ? getLocalStorageData.result
      : dataFetch.data
  const error = dataFetch.error

  return {
    data,
    fetching,
    error,
    update,
  }
}
