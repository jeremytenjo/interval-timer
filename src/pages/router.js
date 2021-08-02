import AccessRoutes from './Access/routes'
import HomeRoutes from './Home/routes'

export function Routes() {
  return (
    <ShellLayout>
      <Suspense fallback={null}>
        <AccessRoutes />
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
