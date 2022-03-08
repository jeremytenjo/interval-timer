import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const EditTimer = lazy(() => import('./EditTimerPage'))

export default function EditTimerRoutes() {
  return (
    <Routes>
      <Route path='/edit-timer' element={<EditTimer />} />
      <Route path='/edit-timer/:timerId' element={<EditTimer />} />
    </Routes>
  )
}
