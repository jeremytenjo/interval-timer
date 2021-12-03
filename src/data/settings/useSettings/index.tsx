import useFirebaseCollection from '../../../lib/utils/data/useFirebaseCollection'

import defaultSettings from './defaultSettings'

export default function useSettings() {
  const settings = useFirebaseCollection('settings', {
    returnDefaultData: true,
    defaultData: [defaultSettings],
    onGet: (data) => {
      if (!data.length) {
        settings.create.exec({ data: defaultSettings, disableSnackbar: true })
      }
    },
  })

  const [currentUserSettings] = settings.get.data

  return { ...settings, currentUserSettings }
}
