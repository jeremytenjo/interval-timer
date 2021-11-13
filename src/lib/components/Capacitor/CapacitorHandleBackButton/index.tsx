import { useEffect } from 'react'
import { App as CapacitorApp } from '@capacitor/app'
import { useNavigate } from 'react-router'
import { Capacitor } from '@capacitor/core'

export default function CapacitorHandleBackButton({ children }) {
  const navigate = useNavigate()

  useEffect(() => {
    const isWeb = Capacitor.getPlatform() === 'web'

    if (!isWeb) {
      CapacitorApp.addListener('backButton', ({ canGoBack }) => {
        console.log({ canGoBack })

        if (!canGoBack) {
          CapacitorApp.exitApp()
        } else {
          navigate(-1)
        }
      })
    }

    return () => {
      CapacitorApp.removeAllListeners()
    }
  }, [])

  return children
}
