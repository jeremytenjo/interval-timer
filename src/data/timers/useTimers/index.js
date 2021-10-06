import useOnTrue from '@useweb/use-on-true'

import useCollection from '../../../lib/utils/data/useCollection'
import useTimer from '../../../globalState/useTimer'

export default function useTimers() {
  const navigate = useNavigate()
  const timer = useTimer()
  const collection = useCollection('timers')

  useOnTrue(collection.remove.result, () => {
    const remainingTimers = collection.get.data.filter(
      (item) => item.id !== collection.remove.result.removedItemId,
    )

    if (remainingTimers.length) {
      timer.setSelectedTimer(remainingTimers[0])
    } else {
      timer.setSelectedTimer(false)
      navigate('/create-timer')
    }
  })

  return collection
}
