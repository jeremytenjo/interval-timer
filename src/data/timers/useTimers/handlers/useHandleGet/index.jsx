import { useLocation, useParams } from 'react-router-dom'

export default function useHandleGet({ timer }) {
  const urlParams = useParams()
  const location = useLocation()

  const setSelectedTimer = (data) => {
    const redirect = location.pathname === '/' && !location.pathname.includes('/timer/')

    if (!urlParams.timerId && !!data.length) {
      timer.setSelectedTimer(data[0], { redirect })
    }

    if (urlParams.timerId && !!data.length) {
      timer.setSelectedTimerById(urlParams.timerId, data, { redirect })
    }
  }

  return { setSelectedTimer }
}
