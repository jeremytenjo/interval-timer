import useAppBar from '../../lib/components/layouts/ShellLayout/AppBar/useAppBar'

import Details from './containers/Details'
import Timer from './containers/Timer'
import TimerControls from './containers/TimerControls'

export default function HomePage() {
  const useAppBarData = useAppBar()

  useEffect(() => {
    useAppBarData.updateTitle(false)
    useAppBarData.setShowEditButton(true)

    return () => {
      useAppBarData.setShowEditButton(false)
    }
  }, [])

  return (
    <div>
      <Details />
      <Timer />
      <TimerControls />
    </div>
  )
}
