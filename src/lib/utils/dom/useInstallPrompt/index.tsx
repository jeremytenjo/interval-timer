import { createContext, useContext, useRef, useEffect } from 'react'

export const UseInstallPromptContext = createContext(null)

export const UseInstallPromptProvider = ({ children }) => {
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
      }}
    >
      {children}
    </UseInstallPromptContext.Provider>
  )
}

type Return = { prompt: () => void }

const useInstallPrompt = (): Return => useContext(UseInstallPromptContext)

export default useInstallPrompt
