import useTimers from '../../../data/timers/useTimers'
import useTimer from '../../../globalState/useTimer'

import CreateTimerFormUi from './CreateTimerFormUi'

export default function CreateTimerForm({ header }) {
  const timer = useTimer()
  const timers = useTimers({
    onCreate: (result) => {
      console.log(result.createdItem)
      timer.setSelectedTimer(result.createdItem)
    },
  })

  const onSaveTimer = (payload) => {
    timers.create.exec({ data: payload })
  }

  return <CreateTimerFormUi onSaveTimer={onSaveTimer} header={header} />
}
