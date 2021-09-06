import CreateTimerRoutes from './CreateTimer/routes'
import HomeRoutes from './Home/routes'

export function Routes() {
  return (
    <ShellLayout>
      <Suspense fallback={null}>
        <CreateTimerRoutes />
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
