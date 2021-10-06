import useSWRImmutable from 'swr/immutable'

import useShowError from '../../../components/feedback/useShowError'

export default function useData({ key, fetcher }) {
  // TODO fetch dataFetch after local storage get
  //   const getLocalData = useLocalStorage({ action: 'get', key })

  const dataFetch = useSWRImmutable(key, fetcher)

  useShowError(dataFetch.error, `Error fetching ${key}, please try again.`)

  return {
    data: dataFetch.data,
    isFetching: !dataFetch.data && !dataFetch.error,
    error: dataFetch.error,
  }
}
