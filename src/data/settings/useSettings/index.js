import useCollection from '../../../lib/utils/data/useCollection'

import defaultSettings from './defaultSettings'

export default function useSettings() {
  const collection = useCollection('settings', {
    onGet: (data) => {
      if (!data.length) {
        collection.create.exec({ data: defaultSettings, disableSnackbar: true })
      }
    },
  })

  const [currentUserSettings] = collection.get.data || [defaultSettings]

  return { ...collection, currentUserSettings }
}
