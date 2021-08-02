import { useQuery, useQueryClient } from 'react-query'
/**
 * @example  
 *  const repoData = useData("repoData", fetcher, {
    initialData: {},
    fetchOnLoad: true
  });
 */
export default function useData(dataId, fetcher, options = { fetchOnLoad: false }) {
  const queryClient = useQueryClient()

  const query = useQuery(dataId, fetcher, {
    ...options,
    refetchOnMount: options.fetchOnLoad,
  })

  const mutate = (data) => {
    queryClient.setQueryData(dataId, data)
  }

  const fetch = () => {
    if (!query.data || !Object.keys(query.data)?.length || !query.data?.length)
      query.refetch()
  }

  const revalidate = () => {
    query.refetch()
  }

  return {
    ...query,
    fetch,
    mutate,
    revalidate,
  }
}
