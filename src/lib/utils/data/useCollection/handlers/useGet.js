import { collection, query, where, getDocs } from 'firebase/firestore'
import useSWRImmutable from 'swr/immutable'
import useOnTrue from '@useweb/use-on-true'
import create from 'zustand'

import useFirebase from '../../../../../firebase/useFirebase'
import useShowError from '../../../../components/feedback/useShowError'
import useLocalStorage from '../../../storage/useLocalStorage'

export default function useGet({
  userId,
  collectionName,
  showLocalStorageDataIfNoUserSignedIn,
  onGet,
  defaultData,
}) {
  const firebase = useFirebase()
  const showError = useShowError()

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

    onGet && onGet(data)
    return data
  }

  const swrKey = () => (userId ? collectionName.raw : null)

  // https://swr.vercel.app/docs/options
  const dataFetch = useSWRImmutable(swrKey, firestoreFetcher, {
    onSuccess: (data) => {
      setLocalStorageData.exec({ value: data })
    },
    onError: (error) => {
      showError.show({
        error,
        message: `Error fetching ${collectionName.raw}, please try again.`,
      })
    },
  })
  const getLocalStorageData = useLocalStorage({
    action: 'get',
    key: collectionName.raw,
  })
  const setLocalStorageData = useLocalStorage({ action: 'set', key: collectionName.raw })

  useOnTrue(!dataFetch.data, () => {
    getLocalStorageData.exec()
  })

  const update = (newData) => {
    setLocalStorageData.exec({ value: newData })
    dataFetch.mutate(newData, false)
  }

  const determineReturnData = () => {
    if (dataFetch.data) {
      return dataFetch.data
    }

    if (
      !dataFetch.data &&
      getLocalStorageData.result &&
      showLocalStorageDataIfNoUserSignedIn
    ) {
      return getLocalStorageData.result
    }

    if (!dataFetch.data && !getLocalStorageData.result && defaultData) {
      return defaultData
    }

    return []
  }

  const fetching = !dataFetch.data && !dataFetch.error
  const data = determineReturnData()
  const error = dataFetch.error

  return {
    data,
    fetching,
    error,
    update,
  }
}
