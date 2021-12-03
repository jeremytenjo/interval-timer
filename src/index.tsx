import '@capacitor/core'
import ReactDOM from 'react-dom'
import { UseInstallPromptProvider } from '@useweb/use-install-prompt'

import Firebase from './firebase/firebase'
import Router from './pages/router'
import Theme from './theme/theme'
import GlobalProviders from './globalState/GlobalProviders'

function App() {
  return (
    <UseInstallPromptProvider>
      <Firebase>
        <Theme>
          <GlobalProviders>
            <Router />
          </GlobalProviders>
        </Theme>
      </Firebase>
    </UseInstallPromptProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
