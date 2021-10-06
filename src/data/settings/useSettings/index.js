import useOnTrue from '@useweb/use-on-true'

import useCollection from '../../../lib/utils/data/useCollection'

import defaultSettings from './defaultSettings'

export default function useSettings() {
  // TODO
  const collection = useCollection('settings', {
    defaultData: defaultSettings,
  })

  useOnTrue(collection.get.data, () => {
    console.log(collection.get.data)

    // add default settings to firestore if not added before
    if (!collection.get.data.length) {
      collection.create.exec({ data: defaultSettings, disableSnackbar: true })
    }
  })

  return collection
}
