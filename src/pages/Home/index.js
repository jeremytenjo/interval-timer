import useAppBar from '../../lib/components/layouts/ShellLayout/AppBar/useAppBar'
import useTimers from '../../data/timers/useTimers'
import TimerEditorCreator from '../../lib/components/TimerEditorCreator'

import Details from './containers/Details'
import Timer from './containers/Timer'
import TimerControls from './containers/TimerControls'

export default function HomePage() {
  const useAppBarData = useAppBar()
  const timers = useTimers()

  useEffect(() => {
    useAppBarData.updateTitle(false)
    useAppBarData.setShowEditButton(true)

    return () => {
      useAppBarData.setShowEditButton(false)
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
