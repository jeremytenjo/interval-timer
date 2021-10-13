import { StatusBar, StatusBarStyle } from '@capacitor/status-bar'
import { useEffect } from 'react'

import Capacitor from '../../Capacitor'

export default function useSetStatusBarColor({ color } = { color: 'Light' }) {
  const setColor = async () => {
    if (Capacitor.isNative) {
      StatusBar.setBackgroundColor({ color: StatusBarStyle[color] })
    }
  }

  useEffect(() => {
    setColor()
  }, [])
}
