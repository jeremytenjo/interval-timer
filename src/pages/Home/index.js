import { useParams } from 'react-router'

import useAppBar from '../../globalState/useAppBar'
import useTimers from '../../data/timers/useTimers'
import CreateTimerPage from '../CreateTimer'
import useTimer from '../../globalState/useTimer'
import useDocumentTitle from '../../lib/utils/dom/useDocumentTitle'

import Details from './containers/Details'
import Timer from './containers/Timer'
import TimerControls from './containers/TimerControls'

export default function HomePage() {
  useAppBar({ title: false, hideEditButtonOnUnmount: true, showEditButton: true })
  const timer = useTimer()
  useDocumentTitle({ title: timer?.selectedTimer?.name || 'Home' })
  const timers = useTimers()
  const urlParams = useParams()

  useEffect(() => {
    if (!urlParams.timerId && !!timers.get?.data?.length) {
      timer.setSelectedTimer(timers.get?.data?.[0])
    }

    if (urlParams.timerId && !!timers.get?.data?.length) {
      timer.setSelectedTimerById(urlParams.timerId, timers.get.data)
    }
  }, [urlParams.timerId, timers.get?.data])

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
