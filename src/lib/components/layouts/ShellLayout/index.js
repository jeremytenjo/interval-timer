import TopBar from './TopBar'
import BottomNav from './BottomNav'

export default function ShellLayout({ children }) {
  return (
    <>
      <TopBar />
      <main>{children}</main>
      <BottomNav />
    </>
  )
}
