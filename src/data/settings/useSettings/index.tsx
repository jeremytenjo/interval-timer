import useShowError from '../../../lib/components/feedback/useShowError'
import useSnackBar from '../../../lib/components/Snackbar/useSnackbar'
import useFirebaseCollection from '../../../lib/utils/data/useFirebaseCollection'

import defaultSettings from './defaultSettings'

export default function useSettings() {
  const showError = useShowError()
  const snackbar = useSnackBar()

  const settings = useFirebaseCollection('settings', {
    returnDefaultData: true,
    defaultData: [defaultSettings],
    onGet: (data) => {
      if (!data.length) {
        settings.create.exec({ data: defaultSettings, disableSnackbar: true })
      }
    },
    onGetError: (error) => {
      showError.show({
        error,
        message: `Error fetching settings, please try again.`,
      })
    },
    onUpdate: () => {
      snackbar.show({ message: `Settings updated` })
    },
    onUpdateError: (error) => {
      showError.show({
        error,
        message: `Error updating settings, please try again`,
      })
    },
    onUpdateLoading: (loading) => {
      if (loading) {
        snackbar.show({
          message: `Updating settings...`,
          severity: 'info',
        })
      }
    },
  })

  const [currentUserSettings] = settings.get.data

  return { ...settings, currentUserSettings }
}
