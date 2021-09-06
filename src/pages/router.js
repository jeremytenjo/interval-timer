import CreateTimerRoutes from './CreateTimer/routes'
import EditTimerRoutes from './EditTimer/routes'
import HomeRoutes from './Home/routes'

export function Routes() {
  return (
    <ShellLayout>
      <Suspense fallback={null}>
        <CreateTimerRoutes />
        <EditTimerRoutes />
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
