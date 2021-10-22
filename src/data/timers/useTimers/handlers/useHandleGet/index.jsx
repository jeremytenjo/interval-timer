import { useLocation } from 'react-router-dom'

import useUrlParams from '../../../../../lib/utils/navigation/useUrlParams'

export default function useHandleGet({ timer }) {
  const location = useLocation()
  const urlParams = useUrlParams()

  const setSelectedTimer = (timers) => {
    const urlTimerId = urlParams.get('id')
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
