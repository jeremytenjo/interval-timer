const Home = lazy(() => import('./'))

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}
