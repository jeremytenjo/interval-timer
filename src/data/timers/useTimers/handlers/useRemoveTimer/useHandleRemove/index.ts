import { useNavigate } from 'react-router-dom'

export default function useHandleRemove({ timer }) {
  const navigate = useNavigate()

  const setSelectedTimer = (data: { removedItemId: string; latestData: any[] }) => {
    const remainingTimers = data.latestData.filter(
      (item) => item.id !== data.removedItemId,
    )

    if (remainingTimers.length) {
      timer.setSelectedTimer(remainingTimers[0])
    } else {
      timer.setSelectedTimer(false)
      navigate('/create-timer')
    }
  }

  return { setSelectedTimer }
}
