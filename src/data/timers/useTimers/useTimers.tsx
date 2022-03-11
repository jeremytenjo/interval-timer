import useData from '@useweb/use-data'

import useAuth from '../../../globalState/useAuth/useAuth'

import useGetTimers from './handlers/useGetTimers/useGetTimers'
import useCreateTimer from './handlers/useCreateTimer/useCreateTimer'
import useUpdateTimer from './handlers/useUpdateTimer/useUpdateTimer'
import useRemoveTimer from './handlers/useRemoveTimer/useRemoveTimer'

export default function useTimers({
  onGet = undefined,
  onCreate = undefined,
  onUpdate = undefined,
  onRemove = undefined,
} = {}) {
  const auth = useAuth()
  const get = useGetTimers({ onGet })
  const create = useCreateTimer({ onCreate })
  const update = useUpdateTimer({ onUpdate })
  const remove = useRemoveTimer({ onRemove })

  const timers = useData({
    id: auth?.user?.uid ? `timers/${auth.user.uid}` : undefined,
    localStorageDefaultId: 'timers',
    get,
    create,
    update,
    remove,
  })

  return timers
}
