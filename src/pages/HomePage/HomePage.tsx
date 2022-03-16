import React from 'react'

import useAppBar from '../../globalState/useAppBar/useAppBar'
import CreateTimerForm from '../../lib/components/CreateTimerForm/CreateTimerForm'
import useTimer from '../../globalState/useTimer/useTimer'
import useDocumentTitle from '../../lib/utils/dom/useDocumentTitle'
import useUrlSearchParams from '../../lib/utils/navigation/useUrlSearchParams'
import useTimers from '../../data/timers/useTimers/useTimers'

import Details from './containers/Details/Details'
import Timer from './containers/Timer/Timer'
import TimerControls from './containers/TimerControls/TimerControls'

export default function HomePage() {
  useAppBar({
    title: false,
    hideEditButtonOnUnmount: true,
    showEditButton: true,
  })
  const timer = useTimer()
  useDocumentTitle({ title: timer?.selectedTimer?.name || 'Home' })
  const timers = useTimers()
  useUrlSearchParams({
    onUpdate: (updatedValues) => {
      if (timers?.get?.data?.length && updatedValues.id) {
        timer.setSelectedTimerById(updatedValues.id, timers.get.data)
      }
    },
  })

  return (
    <section>
      {timer.selectedTimer ? (
        <>
          <Details />
          <Timer />
          <TimerControls />
        </>
      ) : (
        <CreateTimerForm header='Create your first timer' />
      )}
    </section>
  )
}
