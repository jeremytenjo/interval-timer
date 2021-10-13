import { lazy } from 'react'

const Settings = lazy(() => import('.'))

export default function SettingsRoutes() {
  return (
    <Routes>
      <Route path='/settings' element={<Settings />} />
    </Routes>
  )
}
