import { SnackBarProvider } from '../../Snackbar/useSnackbar'

import TopBar from './AppBar'

export default function ShellLayout({ children }) {
  return (
    <SnackBarProvider>
      <TopBar />
      <main>{children}</main>
    </SnackBarProvider>
  )
}
