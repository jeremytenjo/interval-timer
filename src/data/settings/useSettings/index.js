import useCollection from '../../../lib/utils/data/useCollection'

import defaultSettings from './defaultSettings'

export default function useSettings() {
  const settings = useCollection('settings', {
    onGet: (data) => {
      if (!data.length) {
        settings.create.exec({ data: defaultSettings, disableSnackbar: true })
      }
    },
  })

  const [currentUserSettings] = !settings.get.fetched
    ? [defaultSettings]
    : settings.get.data

  return { ...settings, currentUserSettings }
}
