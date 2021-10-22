import useTimers from '../../../../../../../../data/timers/useTimers'
import useTimer from '../../../../../../../../globalState/useTimer'

import TimersDropdownUi from './TimersDropdownUi'

export default function TimersDropdown() {
  const timers = useTimers()
  const timer = useTimer()

  const onTimerSelected = (selectedItem) => {
    timer.setSelectedTimer(selectedItem)
  }

  return (
    <TimersDropdownUi
      onTimerSelected={onTimerSelected}
      timers={timers.get.data}
      selectedTimer={timer.selectedTimer}
    />
  )
}
