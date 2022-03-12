import { SnackBarProvider } from '../../lib/components/Snackbar/useSnackbar/useSnackbar'

export default function GlobalProviders({ children }) {
  return <SnackBarProvider>{children}</SnackBarProvider>
}
