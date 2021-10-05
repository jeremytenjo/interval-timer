import useAsync from '@useweb/use-async'
import useOnTrue from '@useweb/use-on-true'

import useSnackbar from '../../../../../lib/components/Snackbar/useSnackbar'
import useShowError from '../../../../../lib/components/feedback/useShowError'

export default function useUpdateSetting({ settingsStore }) {
  const fetcher = async ({ setting, type, data }) => {
    // TODO update settings from firebase
    console.log(setting, type, data)
    return true
  }

  const updateSetting = useAsync(fetcher)

  useShowError(updateSetting.error, 'Error fetching settings, please try again')

  useOnTrue(updateSetting.result, () => {
    settingsStore.setSettings(updateSetting.result)
  })

  // save in local storage

  // save in firestore

  return updateSetting
}
