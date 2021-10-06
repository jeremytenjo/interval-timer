import { useParams } from 'react-router'
import useOnTrue from '@useweb/use-on-true'

import useAppBar from '../../globalState/useAppBar'
import useTimers from '../../data/timers/useTimers'
import CreateTimerPage from '../CreateTimer'
import useSelectedTimer from '../../globalState/useSelectedTimer'

import Details from './containers/Details'
import Timer from './containers/Timer'
import TimerControls from './containers/TimerControls'

export default function HomePage() {
  useAppBar({ title: false, hideEditButtonOnUnmount: true, showEditButton: true })
  const timers = useTimers()
  const urlParams = useParams()
  const selectedTimer = useSelectedTimer()

  useOnTrue(!urlParams.timerId && !!timers.data.length, () => {
    selectedTimer.setSelectedTimer(timers.data[0])
  })

  return (
    <section>
      {selectedTimer.selectedTimer ? (
        <>
          <Details />
          <Timer />
          <TimerControls />
        </>
      ) : (
        <CreateTimerPage />
      )}
    </section>
  )
}
