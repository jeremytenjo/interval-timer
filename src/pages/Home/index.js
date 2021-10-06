import { useParams } from 'react-router'

import useAppBar from '../../globalState/useAppBar'
import useTimers from '../../data/timers/useTimers'
import CreateTimerPage from '../CreateTimer'
import useTimer from '../../globalState/useTimer'

import Details from './containers/Details'
import Timer from './containers/Timer'
import TimerControls from './containers/TimerControls'

export default function HomePage() {
  useAppBar({ title: false, hideEditButtonOnUnmount: true, showEditButton: true })
  const timers = useTimers()
  const urlParams = useParams()
  const timer = useTimer()

  useEffect(() => {
    if (!urlParams.timerId && !!timers.data.length) {
      timer.setSelectedTimer(timers.data[0])
    }

    if (urlParams.timerId && !!timers.data.length) {
      timer.setSelectedTimerById(urlParams.timerId)
    }
  }, [urlParams.timerId, timers.data])

  return (
    <section>
      {timer.selectedTimer ? (
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
