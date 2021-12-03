import useShowError from '../../../lib/components/feedback/useShowError'
import useFirebaseCollection from '../../../lib/utils/data/useFirebaseCollection'

import defaultSettings from './defaultSettings'

export default function useSettings() {
  const showError = useShowError()

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
  })

  const [currentUserSettings] = settings.get.data

  return { ...settings, currentUserSettings }
}
