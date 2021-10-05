import useAsync from '@useweb/use-async'
import useOnTrue from '@useweb/use-on-true'

import useShowError from '../../../../../lib/components/feedback/useShowError'
import defaultSettings from '../../defaultSettings'

export default function useGetSettings({ settingsStore }) {
  const fetcher = async () => {
    // TODO fetch settings from firebase
    return true
  }

  const getSettings = useAsync(fetcher)

  useShowError(getSettings.error, 'Error fetching settings, please try again')

  useOnTrue(getSettings.result, () => {
    settingsStore.setSettings(getSettings.result)
  })

  // if not signed in use default settings

  // fetch in local storage

  // fetch in firestore

  return getSettings
}
