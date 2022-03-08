import { useLocation } from 'react-router-dom'

import useUrlSearchParams from '../../../../../../lib/utils/navigation/useUrlSearchParams'

export default function useHandleGet({ timer }) {
  const location = useLocation()
  const urlSearchParams = useUrlSearchParams()

  const setSelectedTimer = (timers) => {
    const urlTimerId = urlSearchParams.id
    const redirect = location.pathname === '/' && !location.pathname.includes('/timer/')

    if (!urlTimerId && !!timers.length) {
      timer.setSelectedTimer(timers[0], { redirect })
    }

    if (urlTimerId && !!timers.length) {
      timer.setSelectedTimerById(urlTimerId, timers, { redirect })
    }
  }

  return { setSelectedTimer }
}
