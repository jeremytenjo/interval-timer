import useCollection from '../../../lib/utils/data/useFirebaseCollection'
import useTimer from '../../../globalState/useTimer'

import useHandleGet from './handlers/useHandleGet'
import useHandleRemove from './handlers/useHandleRemove'

export default function useTimers({
  onCreate = undefined,
  onGet = undefined,
  onRemove = undefined,
} = {}) {
  const timer = useTimer()
  const handleGet = useHandleGet({ timer })
  const handleRemove = useHandleRemove({ timer })
  const timers = useCollection('timers', {
    onGet: (result) => {
      handleGet.setSelectedTimer(result)
      onGet && onGet(result)
    },
    onCreate: (result) => {
      onCreate && onCreate(result)
    },
    onRemove: (result) => {
      handleRemove.setSelectedTimer(result)
      onRemove && onRemove()
    },
  })

  return timers
}
