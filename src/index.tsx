import '@capacitor/core'
import ReactDOM from 'react-dom'
import { UseInstallPromptProvider } from '@useweb/use-install-prompt'

import { FirebaseProvider } from './firebase/useFirebase'
import Router from './pages/router'
import Theme from './theme/theme'
import GlobalProviders from './globalState/GlobalProviders'

function App() {
  return (
    <UseInstallPromptProvider>
      <FirebaseProvider>
        <Theme>
          <GlobalProviders>
            <Router />
          </GlobalProviders>
        </Theme>
      </FirebaseProvider>
    </UseInstallPromptProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
