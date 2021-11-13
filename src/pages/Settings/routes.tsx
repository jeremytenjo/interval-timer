import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Settings = lazy(() => import('.'))

export default function SettingsRoutes() {
  return (
    <Routes>
      <Route path='/settings' element={<Settings />} />
    </Routes>
  )
}
