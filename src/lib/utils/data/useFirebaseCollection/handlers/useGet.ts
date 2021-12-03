import { useMemo } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import useSWRImmutable from 'swr/immutable'
import create from 'zustand'
import arrayDB from '@useweb/array-db'

import useFirebase from '../../../../../firebase/useFirebase'
import useLocalStorage from '../../../storage/useLocalStorage'

type Types = {
  fetchedCollections: any[]
  setFetchedCollections: (newValue: any) => void
}

const useGetStore = create<Types>((set) => ({
  fetchedCollections: [],
  setFetchedCollections: (newValue) => set(() => ({ fetchedCollections: newValue })),
}))

type Callbacks = {
  onGet?: (result: any) => void
  onGetError?: (error: any) => void
  onGetLoading?: (loading: boolean) => void
}

export default function useGet(
  { userId, collectionName, defaultData, returnDefaultData },
  callbacks?: Callbacks,
) {
  const firebase = useFirebase()
  const getStore: any = useGetStore()

  const collectionWasFetched = useMemo(() => {
    const wasCollectionFetched = getStore.fetchedCollections.some(
      (fetchedCollection) => fetchedCollection.id === collectionName,
    )
    return wasCollectionFetched
  }, [collectionName, getStore.fetchedCollections])

  const firestoreFetcher = async () => {
    const data = []
    const q = query(
      collection(firebase.db, collectionName),
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
      data: { id: collectionName },
    })

    getStore.setFetchedCollections(updatedFetchedCollections)
  }

  const localStorageData = useLocalStorage(collectionName, {
    onGet: (result) => {
      updateFetchedCollections()
      callbacks.onGet(result)
    },
  })

  const swrKey = () => (userId ? collectionName : null)

  // https://swr.vercel.app/docs/options
  const swr = useSWRImmutable(swrKey, firestoreFetcher, {
    onSuccess: (data) => {
      const updatedFetchedCollections = arrayDB.add(getStore.fetchedCollections, {
        data: { id: collectionName },
      })

      getStore.setFetchedCollections(updatedFetchedCollections)
      localStorageData.update(data)
      callbacks.onGet(data)
    },
    onError: (error) => {
      callbacks.onGetError(error)
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
      returnDefaultData &&
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
