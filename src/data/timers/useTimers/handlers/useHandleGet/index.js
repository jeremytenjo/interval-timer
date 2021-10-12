export default function useHandleGet({ timer }) {
  const urlParams = useParams()

  const setSelectedTimer = (data) => {
    if (!urlParams.timerId && !!data.length) {
      timer.setSelectedTimer(data[0])
    }

    if (urlParams.timerId && !!data.length) {
      timer.setSelectedTimerById(urlParams.timerId, data)
    }
  }

  return { setSelectedTimer }
}
