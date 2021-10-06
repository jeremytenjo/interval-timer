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

  const getTimers = useGetTimers({ userId })

  const handlerPayload = {
    userId,
    selectedTimer: timer.selectedTimer,
    updateTimers: getTimers.update,
    timers: getTimers.data,
  }

  const createTimer = useCreateTimer(handlerPayload)
  const removeTimer = useRemoveTimer(handlerPayload)
  const updateTimer = useUpdateTimer(handlerPayload)

  return {
    data: getTimers.data,
    updateTimer,
    removeTimer,
    createTimer,
  }
}
