import useAppBar from '../../globalState/useAppBar'
import CreateTimerForm from '../../lib/components/CreateTimerForm'
import useTimer from '../../globalState/useTimer'
import useDocumentTitle from '../../lib/utils/dom/useDocumentTitle'
import useUrlSearchParams from '../../lib/utils/navigation/useUrlSearchParams'
import useTimers from '../../data/timers/useTimers'

import Details from './containers/Details'
import Timer from './containers/Timer'
import TimerControls from './containers/TimerControls'

export default function HomePage() {
  useAppBar({
    title: false,
    hideEditButtonOnUnmount: true,
    showEditButton: true,
  })
  const timer = useTimer()
  useDocumentTitle({ title: timer?.selectedTimer?.name || 'Home' })
  const timers = useTimers()
  useUrlSearchParams({
    onUpdate: (updatedValues) => {
      if (timers?.get?.data?.length && updatedValues.id) {
        timer.setSelectedTimerById(updatedValues.id, timers.get.data)
      }
    },
  })

  return (
    <section>
      {timer.selectedTimer ? (
        <>
          <Details />
          <Timer />
          <TimerControls />
        </>
      ) : (
        <CreateTimerForm header='Create your first timer' />
      )}
    </section>
  )
}
