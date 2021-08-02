const Access = lazy(() => import('./'))

export default function AccessRoutes() {
  return (
    <Routes>
      <Route path='/access' element={<Access />} />
      <Route path='/login' element={<Access />} />
      <Route path='/register' element={<Access />} />
    </Routes>
  )
}
