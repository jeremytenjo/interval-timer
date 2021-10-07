import useTimer from '../../../../globalState/useTimer'

import DetailsUi from './DetailsUi'

export default function Details() {
  const timer = useTimer()

  return (
    <DetailsUi
      repetitions={timer.repetitions}
      sets={timer.sets}
      isStarted={timer.isStarted}
      remainingTime={timer.remainingTime}
      totalTime={timer.totalTime}
    />
  )
}
