import ShellLayout from '../lib/components/layouts/ShellLayout'

import CreateTimerRoutes from './CreateTimer/routes'
import EditTimerRoutes from './EditTimer/routes'
import HomeRoutes from './Home/routes'
import SettingsRoutes from './Settings/routes'

export function Routes() {
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
