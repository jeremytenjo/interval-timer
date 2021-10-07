import useOnTrue from '@useweb/use-on-true'

import useTimers from '../../../../data/timers/useTimers'
import useTimer from '../../../../globalState/useTimer'

import CreateTimerFormUi from './CreateTimerFormUi'

export default function CreateTimerForm() {
  const timers = useTimers()
  const timer = useTimer()

  const onSaveTimer = (payload) => {
    timers.create.exec({ data: payload })
  }

  useOnTrue(timers.create.result, () => {
    timer.setSelectedTimer(timers.create.result.createdItem)
  })

  return <CreateTimerFormUi onSaveTimer={onSaveTimer} />
}
