const EditTimer = lazy(() => import('./'))

export default function EditTimerRoutes() {
  return (
    <Routes>
      <Route path='/edit-timer' element={<EditTimer />} />
    </Routes>
  )
}
