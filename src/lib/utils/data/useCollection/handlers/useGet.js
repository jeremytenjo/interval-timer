import { collection, query, where, getDocs } from 'firebase/firestore'
import useSWRImmutable from 'swr/immutable'
import useOnTrue from '@useweb/use-on-true'
import create from 'zustand'

import useFirebase from '../../../../../firebase/useFirebase'
import useShowError from '../../../../components/feedback/useShowError'
import useLocalStorage from '../../../storage/useLocalStorage'

const useGetStore = create((set) => ({
  fetchedFirestore: false,
  setFtchedFirestore: (newValue) => set(() => ({ fetchedFirestore: newValue })),

  fetchedLocalStorage: false,
  setFetchedLocalStorage: (newValue) => set(() => ({ fetchedLocalStorage: newValue })),
  fetchedLocalStorageData: false,
  setFetchedLocalStorageData: (newValue) =>
    set(() => ({ fetchedLocalStorageData: newValue })),
}))

export default function useGet({
  userId,
  collectionName,
  showLocalStorageDataIfNoUserSignedIn,
  onGet,
  defaultData,
}) {
  const firebase = useFirebase()
  const showError = useShowError()
  const getStore = useGetStore()

  const firestoreFetcher = async () => {
    getStore.setFtchedFirestore(true)
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
    onResult: (result) => {
      getStore.setFetchedLocalStorageData(result)
      getStore.setFetchedLocalStorage(true)
    },
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
      getStore.fetchedLocalStorageData &&
      showLocalStorageDataIfNoUserSignedIn
    ) {
      return getStore.fetchedLocalStorageData
    }

    if (
      !dataFetch.data &&
      getStore.fetchedLocalStorage &&
      !getStore.fetchedLocalStorageData &&
      defaultData
    ) {
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
    fetchedFirestore: getStore.fetchedFirestore,
    fetchedLocalStorage: getStore.fetchedLocalStorage,
    error,
    update,
  }
}
