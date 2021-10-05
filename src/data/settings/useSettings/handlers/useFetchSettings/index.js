import useAsync from '@useweb/use-async'
import useOnTrue from '@useweb/use-on-true'

import useShowError from '../../../../../lib/components/feedback/useShowError'
import defaultSettings from '../../defaultSettings'

export default function useFetchSettings({ settingsStore }) {
  const fetcher = async () => {
    // TODO fetch settings from firebase
    return true
  }

  const fetchSettings = useAsync(fetcher)

  useShowError(fetchSettings.error, 'Error fetching settings, please try again')

  useOnTrue(fetchSettings.result, () => {
    settingsStore.setSettings(fetchSettings.result)
  })

  // if not signed in use default settings

  // fetch in local storage

  // fetch in firestore

  return fetchSettings
}
