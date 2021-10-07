import useCollection from '../../../lib/utils/data/useCollection'
import useTimer from '../../../globalState/useTimer'

export default function useTimers() {
  const navigate = useNavigate()
  const timer = useTimer()
  const collection = useCollection('timers', {
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
