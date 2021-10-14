import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const CreateTimer = lazy(() => import('./'))

export default function CreateTimerRoutes() {
  return (
    <Routes>
      <Route path='/create-timer' element={<CreateTimer />} />
    </Routes>
  )
}
