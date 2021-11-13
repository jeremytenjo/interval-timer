import { useEffect } from 'react'
import { Capacitor } from '@capacitor/core'

export default function CapacitorHandleBackButton({ children }) {
  useEffect(() => {
    // Capacitor.addListener('backButton', ({ canGoBack }) => {
    //   if (!canGoBack) {
    //     Capacitor.exitApp()
    //   } else {
    //     window.history.back()
    //   }
    // })
  }, [])

  return children
}
