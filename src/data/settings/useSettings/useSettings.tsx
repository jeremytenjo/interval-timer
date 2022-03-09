import useData from '@useweb/use-data'

import useAuth from '../../../globalState/useAuth/useAuth'

import defaultSettings from './defaultSettings'
import useGetSettings from './useGetSettings/useGetSettings'
import useCreateSettings from './useCreateSettings/useCreateSettings'
import useUpdateSettings from './useUpdateSettings/useUpdateSettings'

export default function useSettings() {
  const auth = useAuth()

  const get = useGetSettings({
    onGet: (results) => {
      if (!results.length) {
        settings.create.exec({ value: defaultSettings })
      }
    },
  })
  const create = useCreateSettings()
  const update = useUpdateSettings()

  const settings = useData({
    id: auth?.user?.uid ? `settings/${auth.user.uid}` : undefined,
    defaultData: [defaultSettings],
    get,
    create,
    update,
  })

  const [currentUserSettings] = settings.get.data

  return { ...settings, currentUserSettings }
}
