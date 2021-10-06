import useSWRImmutable from 'swr/immutable'
import useOnTrue from '@useweb/use-on-true'

import useShowError from '../../../components/feedback/useShowError'
import useLocalStorage from '../../storage/useLocalStorage'

export default function useData({ key, fetcher }) {
  const getLocalStorageData = useLocalStorage({ action: 'get', key })
  const setLocalStorageData = useLocalStorage({ action: 'set', key })

  const dataFetch = useSWRImmutable(key, fetcher)

  useOnTrue(!dataFetch.data, () => {
    getLocalStorageData.exec()
  })

  useOnTrue(dataFetch.data, () => {
    setLocalStorageData.exec({ value: dataFetch.data })
  })

  useShowError(dataFetch.error, `Error fetching ${key}, please try again.`)

  const update = (newData) => {
    setLocalStorageData.exec({ value: newData })
    dataFetch.mutate(newData, false)
  }

  const isFetchingFirestore = !dataFetch.data && !dataFetch.error
  const data =
    !dataFetch.data && isFetchingFirestore ? getLocalStorageData.result : dataFetch.data
  const error = dataFetch.error

  if (getLocalStorageData.result) {
    console.log(getLocalStorageData.result)
    console.log({ data })
  }
  return {
    data,
    isFetching: isFetchingFirestore,
    error,
    update,
  }
}
