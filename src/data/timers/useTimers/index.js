import useAuth from '../../../globalState/useAuth'
import useLocalStorage from '../../../lib/utils/storage/useLocalStorage'
import useTimer from '../../../globalState/useTimer'

import useGetTimers from './handlers/useGetTimers'
import useCreateTimer from './handlers/useCreateTimer'
import useUpdateTimer from './handlers/useUpdateTimer'
import useRemoveTimer from './handlers/useRemoveTimer'

export default function useTimers() {
  const timer = useTimer()
  const auth = useAuth()
  const setLocalStorage = useLocalStorage({ action: 'set' })

  const updateLocalTimers = (updatedTimers) => {
    setLocalStorage.exec({ key: 'timers', value: updatedTimers })
    // timersStore.setTimers(updatedTimers)
  }

  const handlerPayload = {
    userId: auth?.user?.uid,
    updateLocalTimers,
    selectedTimer: timer.selectedTimer,
  }

  const getData = useGetTimers(handlerPayload)
  const createTimer = useCreateTimer(handlerPayload)
  const updateTimer = useUpdateTimer(handlerPayload)
  const removeTimer = useRemoveTimer(handlerPayload)

  return {
    data: getData.data,
    updateTimer,
    removeTimer,
    createTimer,
  }
}
