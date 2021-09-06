const CreateTimer = lazy(() => import('./'))

export default function CreateTimerRoutes() {
  return (
    <Routes>
      <Route path='/create-timer' element={<CreateTimer />} />
    </Routes>
  )
}
