import useAppBar from '../../globalState/useAppBar'
import useTimers from '../../data/timers/useTimers'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'

import Details from './containers/Details'
import Timer from './containers/Timer'
import TimerControls from './containers/TimerControls'

export default function HomePage() {
  const appBarData = useAppBar()
  const timers = useTimers()

  useEffect(() => {
    appBarData.updateTitle(false)
    appBarData.setShowEditButton(true)

    return () => {
      appBarData.setShowEditButton(false)
    }
  }, [])

  return (
    <section>
      {timers.selectedTimer ? (
        <>
          <Details />
          <Timer />
          <TimerControls />
        </>
      ) : (
        <TimerEditorCreator type='create' />
      )}
    </section>
  )
}
