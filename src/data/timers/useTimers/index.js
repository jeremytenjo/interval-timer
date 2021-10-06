import useAuth from '../../../globalState/useAuth'
import useTimer from '../../../globalState/useTimer'

import useGetTimers from './handlers/useGetTimers'
import useCreateTimer from './handlers/useCreateTimer'
import useUpdateTimer from './handlers/useUpdateTimer'
import useRemoveTimer from './handlers/useRemoveTimer'

export default function useTimers() {
  const timer = useTimer()
  const auth = useAuth()

  const userId = auth?.user?.uid

  const get = useGetTimers({ userId })

  const handlerPayload = {
    userId,
    selectedTimer: timer.selectedTimer,
    updateTimers: get.update,
    timers: get.data,
  }

  const create = useCreateTimer(handlerPayload)
  const remove = useRemoveTimer(handlerPayload)
  const update = useUpdateTimer(handlerPayload)

  return {
    get,
    update,
    remove,
    create,
  }
}
