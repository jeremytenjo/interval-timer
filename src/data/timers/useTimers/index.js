import useCollection from '../../../lib/utils/data/useCollection'
import useTimer from '../../../globalState/useTimer'

import useHandleGet from './handlers/useHandleGet'

export default function useTimers({ onCreate } = {}) {
  const navigate = useNavigate()
  const timer = useTimer()
  const handleGet = useHandleGet({ timer })
  const collection = useCollection('timers', {
    onGet: (result) => {
      handleGet.setSelectedTimer(result)
    },
    onCreate: (result) => {
      onCreate(result)
    },
    onRemove: (result) => {
      const remainingTimers = result.remainingItems.filter(
        (item) => item.id !== result.removedItemId,
      )

      if (remainingTimers.length) {
        timer.setSelectedTimer(remainingTimers[0])
      } else {
        timer.setSelectedTimer(false)
        navigate('/create-timer')
      }
    },
  })

  return collection
}
