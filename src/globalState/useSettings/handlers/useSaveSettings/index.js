import useAsync from '@useweb/use-async'
import useOnTrue from '@useweb/use-on-true'

import useSnackbar from '../../../../lib/components/Snackbar/useSnackbar'

export default function useSaveSettings() {
  const snackbar = useSnackbar()

  const fetcher = async () => {
    return true
  }

  const saveSettings = useAsync(fetcher)

  useOnTrue(saveSettings.result, () => {
    snackbar.show({ message: 'Settings saved' })
  })

  return saveSettings
}
