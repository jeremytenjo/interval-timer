import { createContext, useContext, useRef, useEffect, useState } from 'react'

export const UseInstallPromptContext = createContext(null)

export const UseInstallPromptProvider = ({ children }) => {
  const [isInstalled, setIsInstalled] = useState(null)
  const deferredPromptRef = useRef(null)

  const prompt = () => {
    if (deferredPromptRef.current) {
      deferredPromptRef.current.prompt()
    }
  }

  const setPromptFunction = (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault()
    // Stash the event so it can be triggered later.
    deferredPromptRef.current = e

    if (window.matchMedia) {
      const appIsInstalled = window.matchMedia('(display-mode: standalone)').matches
      setIsInstalled(appIsInstalled)
    }
  }

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', setPromptFunction)

    return () => {
      window.removeEventListener('beforeinstallprompt', setPromptFunction)
    }
  }, [])

  return (
    <UseInstallPromptContext.Provider
      value={{
        prompt,
        isInstalled,
      }}
    >
      {children}
    </UseInstallPromptContext.Provider>
  )
}

type Return = { prompt: () => void; isInstalled: boolean }

const useInstallPrompt = (): Return => useContext(UseInstallPromptContext)

export default useInstallPrompt
