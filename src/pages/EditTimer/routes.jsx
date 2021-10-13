import { lazy } from 'react'

const EditTimer = lazy(() => import('./'))

export default function EditTimerRoutes() {
  return (
    <Routes>
      <Route path='/edit-timer' element={<EditTimer />} />
      <Route path='/edit-timer/:timerId' element={<EditTimer />} />
    </Routes>
  )
}
