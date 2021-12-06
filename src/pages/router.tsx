import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

import ShellLayout from '../lib/components/layouts/ShellLayout'
import CapacitorHandleBackButton from '../lib/components/Capacitor/CapacitorHandleBackButton'

import HomeRoutes from './HomePage/routes'
import CreateTimerRoutes from './CreateTimerPage/routes'
import EditTimerRoutes from './EditTimerPage/routes'
import SettingsRoutes from './SettingsPage/routes'

export function Routes() {
  return (
    <CapacitorHandleBackButton>
      <ShellLayout>
        <Suspense fallback={null}>
          <CreateTimerRoutes />
          <EditTimerRoutes />
          <SettingsRoutes />
          <HomeRoutes />
        </Suspense>
      </ShellLayout>
    </CapacitorHandleBackButton>
  )
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
