import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import getIsOsMobile from '../../../os/getIsOsMobile'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
})

const isOsMobile = getIsOsMobile()

export default function DataProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {!isOsMobile && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}
