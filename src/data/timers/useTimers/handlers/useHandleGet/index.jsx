import { useLocation, useParams } from 'react-router-dom'

export default function useHandleGet({ timer }) {
  const urlParams = useParams()
  const location = useLocation()

  const setSelectedTimer = (timers) => {
    // console.log(timers, urlParams)
    console.log('fetched timers')
    const redirect = location.pathname === '/' && !location.pathname.includes('/timer/')

    if (!urlParams.timerId && !!timers.length) {
      // timer.setSelectedTimer(timers[0], { redirect })
    }

    if (urlParams.timerId && !!timers.length) {
      timer.setSelectedTimerById(urlParams.timerId, timers, { redirect })
    }
  }

  return { setSelectedTimer }
}
