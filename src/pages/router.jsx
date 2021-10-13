import { BrowserRouter, Routes } from 'react-router-dom'

import ShellLayout from '../lib/components/layouts/ShellLayout'

import HomeRoutes from './Home/routes'
import CreateTimerRoutes from './CreateTimer/routes'
import EditTimerRoutes from './EditTimer/routes'
import SettingsRoutes from './Settings/routes'

export function Routess() {
  return (
    <ShellLayout>
      <Suspense fallback={null}>
        <CreateTimerRoutes />
        <EditTimerRoutes />
        <SettingsRoutes />
        <HomeRoutes />
      </Suspense>
    </ShellLayout>
  )
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
