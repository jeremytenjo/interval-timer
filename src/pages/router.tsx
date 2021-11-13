import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

import ShellLayout from '../lib/components/layouts/ShellLayout'
import CapacitorHandleBackButton from '../lib/components/Capacitor/CapacitorHandleBackButton'

import HomeRoutes from './Home/routes'
import CreateTimerRoutes from './CreateTimer/routes'
import EditTimerRoutes from './EditTimer/routes'
import SettingsRoutes from './Settings/routes'

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
