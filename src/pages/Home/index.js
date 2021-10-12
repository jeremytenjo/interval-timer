import useAppBar from '../../globalState/useAppBar'
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
