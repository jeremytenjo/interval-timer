import useSWRImmutable from 'swr/immutable'

export default function useData({ key, fetcher }) {
  const swr = useSWRImmutable(key, fetcher)

  return {
    data: swr.data,
    isFetching: !swr.data && !swr.error,
    error: swr.error,
  }
}
