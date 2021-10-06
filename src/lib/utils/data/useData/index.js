import useSWRImmutable from 'swr/immutable'
import useOnTrue from '@useweb/use-on-true'

import useShowError from '../../../components/feedback/useShowError'
import useLocalStorage from '../../storage/useLocalStorage'
import useAuth from '../../../../globalState/useAuth'

export default function useData({ key, fetcher }) {
  const dataFetch = useSWRImmutable(key, fetcher)
  const getLocalStorageData = useLocalStorage({ action: 'get', key })
  const setLocalStorageData = useLocalStorage({ action: 'set', key })
  const auth = useAuth()

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

  const isFetching = !dataFetch.data && !dataFetch.error
  const data =
    (!dataFetch.data && isFetching) || !auth.user
      ? getLocalStorageData.result
      : dataFetch.data
  const error = dataFetch.error

  return {
    data,
    isFetching,
    error,
    update,
  }
}
