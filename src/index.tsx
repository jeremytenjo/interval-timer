import '@capacitor/core'
import ReactDOM from 'react-dom'

import { FirebaseProvider } from './firebase/useFirebase'
import Router from './pages/router'
import Theme from './theme/theme'
import GlobalProviders from './globalState/GlobalProviders'

function App() {
  return (
    <FirebaseProvider>
      asdfsadf
      <Theme>
        <GlobalProviders>
          <Router />
        </GlobalProviders>
      </Theme>
    </FirebaseProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
