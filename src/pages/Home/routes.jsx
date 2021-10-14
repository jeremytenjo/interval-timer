import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('.'))

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/timer' element={<Home />} />
      <Route path='/timer/:timerId' element={<Home />} />
    </Routes>
  )
}
