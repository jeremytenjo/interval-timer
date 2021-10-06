import useSWRImmutable from 'swr/immutable'

import useShowError from '../../../components/feedback/useShowError'

export default function useData({ key, fetcher }) {
  // TODO get data from local storage
  // TODO fetch dataFetch after local storage get
  //   const getLocalData = useLocalStorage({ action: 'get', key })

  const dataFetch = useSWRImmutable(key, fetcher)

  console.log(dataFetch)

  useShowError(dataFetch.error, `Error fetching ${key}, please try again.`)

  const update = (newData) => {
    dataFetch.mutate(newData)
  }

  return {
    data: dataFetch.data,
    isFetching: !dataFetch.data && !dataFetch.error,
    error: dataFetch.error,
    update,
  }
}
