import useCollection from '../../../lib/utils/data/useCollection'

import defaultSettings from './defaultSettings'

export default function useSettings() {
  // TODO
  const collection = useCollection('settings', {
    defaultData: defaultSettings,
    onGet: (data) => {
      if (!data.length) {
        collection.create.exec({ data: defaultSettings, disableSnackbar: true })
      }
    },
  })

  return collection
}
