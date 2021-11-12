import useCollection from '../../../lib/utils/data/useCollection'
import useTimer from '../../../globalState/useTimer'

import useHandleGet from './handlers/useHandleGet'
import useHandleRemove from './handlers/useHandleRemove'

export default function useTimers({ onCreate = undefined } = {}) {
  const timer = useTimer()
  const handleGet = useHandleGet({ timer })
  const handleRemove = useHandleRemove({ timer })
  const timers = useCollection('timers', {
    onGet: (result) => {
      handleGet.setSelectedTimer(result)
    },
    onCreate: (result) => {
      onCreate(result)
    },
    onRemove: (result) => {
      handleRemove.setSelectedTimer(result)
    },
  })

  return timers
}
