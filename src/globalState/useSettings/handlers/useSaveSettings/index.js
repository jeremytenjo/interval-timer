import useAsync from '@useweb/use-async'
import useOnTrue from '@useweb/use-on-true'

import useSnackbar from '../../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../../lib/components/feedback/useShowError'

export default function useSaveSettings() {
  const snackbar = useSnackbar()

  const fetcher = async () => {
    return true
  }

  const saveSettings = useAsync(fetcher)

  useShowError(saveSettings.error, 'Error saving settings, please try again')

  useOnTrue(saveSettings.result, () => {
    snackbar.show({ message: 'Settings saved' })
  })

  return saveSettings
}
