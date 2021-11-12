import { useMemo } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import useSWRImmutable from 'swr/immutable'
import create from 'zustand'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../../firebase/useFirebase'
import useShowError from '../../../../components/feedback/useShowError'
import useLocalStorage from '../../../storage/useLocalStorage'

const useGetStore = create((set) => ({
  fetchedCollections: [],
  setFetchedCollections: (newValue) => set(() => ({ fetchedCollections: newValue })),
}))

export default function useGet({
  userId,
  collectionName,
  onGet,
  defaultData,
  returnDefaultDataOnNoData,
}) {
  const firebase = useFirebase()
  const showError = useShowError()
  const getStore: any = useGetStore()

  const collectionWasFetched = useMemo(() => {
    const wasCollectionFetched = getStore.fetchedCollections.some(
      (fetchedCollection) => fetchedCollection.id === collectionName.raw,
    )
    return wasCollectionFetched
  }, [collectionName.raw, getStore.fetchedCollections])

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

  const updateFetchedCollections = () => {
    const updatedFetchedCollections = arrayDB.add(getStore.fetchedCollections, {
      data: { id: collectionName.raw },
    })

    getStore.setFetchedCollections(updatedFetchedCollections)
  }

  const localStorageData = useLocalStorage(collectionName.raw, {
    onGet: (result) => {
      updateFetchedCollections()
      onGet && onGet(result)
    },
  })

  const swrKey = () => (userId ? collectionName.raw : null)

  // https://swr.vercel.app/docs/options
  const swr = useSWRImmutable(swrKey, firestoreFetcher, {
    onSuccess: (data) => {
      const updatedFetchedCollections = arrayDB.add(getStore.fetchedCollections, {
        data: { id: collectionName.raw },
      })

      getStore.setFetchedCollections(updatedFetchedCollections)
      localStorageData.update(data)
      onGet && onGet(data)
    },
    onError: (error) => {
      showError.show({
        error,
        message: `Error fetching ${collectionName.raw}, please try again.`,
      })
    },
  })

  const update = (newData) => {
    localStorageData.update(newData)

    if (swrKey()) {
      swr.mutate(newData, false)
    }
  }

  const getReturnData = () => {
    if (!swr.data && !collectionWasFetched && localStorageData.data) {
      return localStorageData.data
    }

    if (swr.data) {
      return swr.data
    }

    if (!swr.data && localStorageData.data) {
      return localStorageData.data
    }

    if (
      collectionWasFetched &&
      !swr.data &&
      !localStorageData.data &&
      returnDefaultDataOnNoData &&
      defaultData
    ) {
      return defaultData
    }

    return []
  }

  const fetching = !swr.data && !swr.error
  const data = getReturnData()
  const error = swr.error
  const isFetched = collectionWasFetched

  return {
    data,
    fetching,
    isFetched,
    error,
    update,
  }
}
